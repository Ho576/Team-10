import React from 'react'
import { useEffect, useState } from 'react'
import './PostsTableStyle.css';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export default function PostsList({posts, setPosts}) {

     
   const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Blog Posts'));
                const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
         const Delete = async (postId) => {
        try {
          const ref = doc(db, 'Blog Posts', postId);
          await deleteDoc(ref);
        } catch (error) {
          console.log('Error deleting post:', error.message);
        }
      };

    useEffect(() => {
        fetchData();
    }, [posts]);

    
   
    return (
        <>
            <h2>Dashboard</h2>
            <h3>Blog Posts</h3>
            <Link to='/add' className="btn btn-primary btn-block mb-4" >Add post</Link>
            <div className="posts-table-container">
                <table className='posts-table'>
                    <thead>
                        <tr>
                            <th> Tittle </th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td> {post.content} </td>
                                {<td>
                                    <Link to={`/edit/${post.id}`} className="btn btn-primary btn-block mb-4 mt-4" >edit post</Link>
                                    <button className="btn btn-danger m-1" onClick={() =>Delete(post.id)}>Delete </button>
                                </td>}
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )

}

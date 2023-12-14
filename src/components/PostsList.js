import React from 'react'
import { useEffect, useState } from 'react'
//import firestore from '../Firebase.js';
import './PostsTableStyle.css';

export default function PostsList(){
    
        const [data, setData] = useState([]);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const snapshot = await firestore.ref('/Blog Posts/HRNRB54TWGPwfD7cUpkL').once('value');
                    const dataFromFirebase = snapshot.val();
                    console.log('Data from Firebase:', dataFromFirebase);
                    setData(dataFromFirebase);
    
                    const dataArray = Object.values(dataFromFirebase || {});
    
                    setData(dataArray);
                } catch (error) {
                    console.error('Error fetching data :', error);
                }
            };
            fetchData();
        }, []);
    
        const posts = [
            { id: 1, title: 'test', content: 'test' },
            { id: 2, title: 'test', content: 'test' },
            { id: 3, title: 'test', content: 'test' },
            { id: 4, title: 'test', content: 'test' },
          ];
    return (
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
                        { <td>
                            <button >Edit</button>
                            <button >Delete</button> 
                        </td> }
                    </tr>
                ))}

            </tbody>
        </table>
    </div>
    )

}

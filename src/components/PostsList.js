import React from 'react'
import { Link } from 'react-router-dom'

export default function PostsList(){
    return (
        <div>
            <Link to='/add'  className="btn btn-primary btn-block mb-4" >Add post</Link>
            <p>PostsList</p>
            <Link to='/edit'  className="btn btn-primary btn-block mb-4" >edit post</Link>
            </div>
    )
}
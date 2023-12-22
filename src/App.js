import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
import Edit from './components/Edit';
import PostsList from './components/PostsList';
import Sidebar from './components/Sidebar';


export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [posts, setPosts] = useState([]);
  return (
    
    <>
      <Navbar toggleSidebar={toggleSidebar}  />
      <Routes>
        <Route
          path='/'
          element={<Sidebar isSidebarOpen={isSidebarOpen} />}
        >
          <Route index element={<PostsList posts ={posts} setPosts={setPosts} />} />
          <Route path='add' element={<AddPost posts ={posts} />} />
          <Route path='edit/:postId' element={<Edit posts ={posts} />} />
        </Route>
        <Route path='*' element={<h2>User not found</h2>} />
      </Routes>
    </>
  );
}

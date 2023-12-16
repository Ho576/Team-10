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

  return (
    
    <>
      <Navbar toggleSidebar={toggleSidebar}  />
      <Routes>
        <Route
          path='/'
          element={<Sidebar isSidebarOpen={isSidebarOpen} />}
        >
          <Route index element={<PostsList/>} />
          <Route path='add' element={<AddPost />} />
          <Route path='edit' element={<Edit />} />
        </Route>
        <Route path='*' element={<h2>User not found</h2>} />
      </Routes>
    </>
  );
}
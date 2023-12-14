import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
import Edit from './components/Edit';
import PostsList from './components/PostsList';
import Sidebar from './components/Sidebar';


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Sidebar />}
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
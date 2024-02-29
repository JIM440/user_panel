import React from 'react';
import Navbar from '../commons/Navbar';
import Sidebar from '../commons/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminRootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="admin-root-container">
        <Sidebar />
        <div className="admin-content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminRootLayout;

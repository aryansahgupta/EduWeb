import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Navbar />
      <main className="ml-64 pt-16">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

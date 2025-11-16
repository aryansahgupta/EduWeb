import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Users,
  ClipboardList,
  Wrench,
  TrendingDown,
  AlertCircle,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: 'Assets', path: '/assets', icon: <Package className="w-5 h-5" /> },
  { name: 'Assignments', path: '/assignments', icon: <ClipboardList className="w-5 h-5" /> },
  { name: 'Employees', path: '/employees', icon: <Users className="w-5 h-5" /> },
  { name: 'Maintenance', path: '/maintenance', icon: <Wrench className="w-5 h-5" /> },
  { name: 'Depreciation', path: '/depreciation', icon: <TrendingDown className="w-5 h-5" /> },
  { name: 'Requests', path: '/requests', icon: <AlertCircle className="w-5 h-5" /> },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen fixed left-0 top-0 flex flex-col shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Package className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl font-bold">IT Asset Manager</h1>

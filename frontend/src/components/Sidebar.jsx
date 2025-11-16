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
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-500 text-center">v1.0.0</p>
      </div>
    </aside>
  );
};

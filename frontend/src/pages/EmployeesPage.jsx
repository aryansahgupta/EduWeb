import React from 'react';
import { Package, Eye } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Table } from '../components/Table';

const mockEmployees = [
  { id: 1, name: 'John Doe', department: 'Engineering', email: 'john@example.com', assetsCount: 3 },
  { id: 2, name: 'Jane Smith', department: 'Marketing', email: 'jane@example.com', assetsCount: 2 },
  { id: 3, name: 'Mike Johnson', department: 'Sales', email: 'mike@example.com', assetsCount: 2 },
  { id: 4, name: 'Sarah Williams', department: 'HR', email: 'sarah@example.com', assetsCount: 1 },
  { id: 5, name: 'Tom Brown', department: 'Engineering', email: 'tom@example.com', assetsCount: 4 },
];

export const EmployeesPage = () => {
  const columns = [
    { key: 'name', label: 'Employee Name' },
    { key: 'department', label: 'Department' },
    { key: 'email', label: 'Email' },
    {
      key: 'assetsCount',
      label: 'Assets Assigned',
      render: (count) => (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          <Package className="w-4 h-4 mr-1" />
          {count}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <Button size="sm" variant="secondary">
          <Eye className="w-4 h-4 mr-1" />
          View Assets
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
        <p className="text-gray-500 mt-1">View employee asset allocations</p>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Departments</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>HR</option>
        </select>
      </div>

      <Card>
        <Table columns={columns} data={mockEmployees} />
      </Card>
    </div>
  );
};

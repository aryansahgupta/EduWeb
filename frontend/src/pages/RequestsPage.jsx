import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Table } from '../components/Table';

const mockRequests = [
  { id: 1, asset: 'MacBook Pro 16"', employee: 'John Doe', issue: 'Keyboard not working', date: '2024-01-15', priority: 'High', status: 'Open' },
  { id: 2, asset: 'Dell Monitor', employee: 'Jane Smith', issue: 'Display flickering', date: '2024-01-14', priority: 'Medium', status: 'In Progress' },
  { id: 3, asset: 'HP Laptop', employee: 'Mike Johnson', issue: 'Slow performance', date: '2024-01-13', priority: 'Low', status: 'Resolved' },
  { id: 4, asset: 'iPhone 13', employee: 'Sarah Williams', issue: 'Battery draining fast', date: '2024-01-12', priority: 'Medium', status: 'In Progress' },
  { id: 5, asset: 'Surface Tablet', employee: 'Tom Brown', issue: 'Touchscreen not responsive', date: '2024-01-10', priority: 'High', status: 'Open' },
];

export const RequestsPage = () => {
  const columns = [
    { key: 'asset', label: 'Asset' },
    { key: 'employee', label: 'Reported By' },
    { key: 'issue', label: 'Issue Description' },
    { key: 'date', label: 'Date' },
    {
      key: 'priority',
      label: 'Priority',
      render: (priority) => {
        const priorityColors = {
          High: 'bg-red-100 text-red-800',
          Medium: 'bg-orange-100 text-orange-800',
          Low: 'bg-blue-100 text-blue-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[priority]}`}>
            {priority}
          </span>
        );
      },
    },
    {
      key: 'status',
      label: 'Status',
      render: (status) => {
        const statusColors = {
          Open: 'bg-yellow-100 text-yellow-800',
          'In Progress': 'bg-blue-100 text-blue-800',
          Resolved: 'bg-green-100 text-green-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <Button size="sm" variant="secondary">
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Issue Requests</h1>
          <p className="text-gray-500 mt-1">Track and manage reported asset issues</p>
        </div>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Report Issue
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Open Requests</p>
              <p className="text-3xl font-bold text-yellow-600 mt-1">2</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <span className="text-2xl">📋</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">2</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <span className="text-2xl">⚙️</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Resolved</p>
              <p className="text-3xl font-bold text-green-600 mt-1">1</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search requests..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <Card>
        <Table columns={columns} data={mockRequests} />
      </Card>
    </div>
  );
};

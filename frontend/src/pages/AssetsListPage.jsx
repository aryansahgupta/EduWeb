import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Table } from '../components/Table';

const mockAssets = [
  { id: 1, name: 'MacBook Pro 16"', category: 'Laptop', serialNumber: 'MBP123456', status: 'Active', assignedTo: 'John Doe', purchaseDate: '2023-01-15' },
  { id: 2, name: 'Dell Monitor 27"', category: 'Monitor', serialNumber: 'MON789012', status: 'Active', assignedTo: 'Jane Smith', purchaseDate: '2023-02-20' },
  { id: 3, name: 'HP Laptop', category: 'Laptop', serialNumber: 'HP345678', status: 'Maintenance', assignedTo: '-', purchaseDate: '2022-11-10' },
  { id: 4, name: 'iPhone 13 Pro', category: 'Phone', serialNumber: 'IP901234', status: 'Active', assignedTo: 'Mike Johnson', purchaseDate: '2023-03-05' },
  { id: 5, name: 'Surface Tablet', category: 'Tablet', serialNumber: 'TAB567890', status: 'Available', assignedTo: '-', purchaseDate: '2023-04-12' },
];

export const AssetsListPage = () => {
  const navigate = useNavigate();

  const columns = [
    { key: 'name', label: 'Asset Name' },
    { key: 'category', label: 'Category' },
    { key: 'serialNumber', label: 'Serial Number' },
    {
      key: 'status',
      label: 'Status',
      render: (status) => {
        const statusColors = {
          Active: 'bg-green-100 text-green-800',
          Maintenance: 'bg-orange-100 text-orange-800',
          Available: 'bg-blue-100 text-blue-800',
          Retired: 'bg-gray-100 text-gray-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status}
          </span>
        );
      },
    },
    { key: 'assignedTo', label: 'Assigned To' },
    { key: 'purchaseDate', label: 'Purchase Date' },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex space-x-2">
          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate(`/assets/edit/${row.id}`)}
            className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assets</h1>
          <p className="text-gray-500 mt-1">Manage all IT assets in your organization</p>
        </div>
        <Button onClick={() => navigate('/assets/new')}>
          <Plus className="w-5 h-5 mr-2" />
          Add New Asset
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search assets..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Categories</option>
          <option>Laptops</option>
          <option>Desktops</option>
          <option>Monitors</option>
          <option>Phones</option>
          <option>Tablets</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Available</option>
          <option>Maintenance</option>
          <option>Retired</option>
        </select>
      </div>

      <Card>
        <Table columns={columns} data={mockAssets} />
      </Card>
    </div>
  );
};

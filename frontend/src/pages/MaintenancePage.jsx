import React, { useState } from 'react';
import { Plus, CheckCircle, Package } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';

const mockMaintenanceAssets = [
  { id: 1, name: 'HP Laptop', serialNumber: 'HP345678', issue: 'Screen flickering', startDate: '2024-01-10', status: 'In Progress', cost: 0 },
  { id: 2, name: 'Dell Desktop', serialNumber: 'DELL123', issue: 'RAM upgrade', startDate: '2024-01-08', status: 'Completed', cost: 250 },
  { id: 3, name: 'MacBook Air', serialNumber: 'MBA789', issue: 'Battery replacement', startDate: '2024-01-12', status: 'In Progress', cost: 0 },
];

export const MaintenancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    assetId: '',
    issue: '',
    cost: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const columns = [
    { key: 'name', label: 'Asset Name' },
    { key: 'serialNumber', label: 'Serial Number' },
    { key: 'issue', label: 'Issue/Reason' },
    { key: 'startDate', label: 'Start Date' },
    {
      key: 'status',
      label: 'Status',
      render: (status) => {
        const statusColors = {
          'In Progress': 'bg-orange-100 text-orange-800',
          Completed: 'bg-green-100 text-green-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      key: 'cost',
      label: 'Repair Cost',
      render: (cost) => (cost > 0 ? `$${cost}` : '-'),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) =>
        row.status === 'In Progress' && (
          <Button size="sm" variant="success">
            <CheckCircle className="w-4 h-4 mr-1" />
            Mark Complete
          </Button>
        ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Maintenance Tracking</h1>
          <p className="text-gray-500 mt-1">Track asset repairs and maintenance activities</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-5 h-5 mr-2" />
          Log Maintenance
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-3xl font-bold text-orange-600 mt-1">2</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Package className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-3xl font-bold text-green-600 mt-1">1</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Cost</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">$250</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <Table columns={columns} data={mockMaintenanceAssets} />
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Log Maintenance Activity" size="md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Asset</label>
            <select
              name="assetId"
              value={formData.assetId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose an asset</option>
              <option value="1">MacBook Pro 16"</option>
              <option value="2">Dell Monitor</option>
              <option value="3">HP Laptop</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Issue/Reason</label>
            <input
              type="text"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Screen damage, Battery issue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Repair Cost</label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Additional details about the maintenance..."
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

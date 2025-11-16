import React, { useState } from 'react';
import { UserPlus, UserMinus } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { Modal } from '../components/Modal';

const mockAssets = [
  { id: 1, name: 'MacBook Pro 16"', category: 'Laptop', serialNumber: 'MBP123456', status: 'Active', assignedTo: 'John Doe' },
  { id: 2, name: 'Dell Monitor 27"', category: 'Monitor', serialNumber: 'MON789012', status: 'Active', assignedTo: 'Jane Smith' },
  { id: 3, name: 'Surface Tablet', category: 'Tablet', serialNumber: 'TAB567890', status: 'Available', assignedTo: null },
  { id: 4, name: 'iPhone 13 Pro', category: 'Phone', serialNumber: 'IP901234', status: 'Active', assignedTo: 'Mike Johnson' },
  { id: 5, name: 'Samsung Monitor', category: 'Monitor', serialNumber: 'SAM345678', status: 'Available', assignedTo: null },
];

const mockEmployees = [
  { id: 1, name: 'John Doe', department: 'Engineering', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', department: 'Marketing', email: 'jane@example.com' },
  { id: 3, name: 'Mike Johnson', department: 'Sales', email: 'mike@example.com' },
  { id: 4, name: 'Sarah Williams', department: 'HR', email: 'sarah@example.com' },
  { id: 5, name: 'Tom Brown', department: 'Engineering', email: 'tom@example.com' },
];

export const AssignmentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleAssign = (asset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
  };

  const handleUnassign = (asset) => {
    console.log('Unassigning asset:', asset);
  };

  const handleSelectEmployee = (employee) => {
    console.log('Assigning to:', employee);
    setIsModalOpen(false);
  };

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
          Available: 'bg-blue-100 text-blue-800',
        };
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      key: 'assignedTo',
      label: 'Assigned To',
      render: (value) => value || <span className="text-gray-400">-</span>,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex space-x-2">
          {row.assignedTo ? (
            <Button size="sm" variant="danger" onClick={() => handleUnassign(row)}>
              <UserMinus className="w-4 h-4 mr-1" />
              Unassign
            </Button>
          ) : (
            <Button size="sm" onClick={() => handleAssign(row)}>
              <UserPlus className="w-4 h-4 mr-1" />
              Assign
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Asset Assignments</h1>
        <p className="text-gray-500 mt-1">Assign and manage asset allocations to employees</p>
      </div>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search assets..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Status</option>
          <option>Available</option>
          <option>Assigned</option>
        </select>
      </div>

      <Card>
        <Table columns={columns} data={mockAssets} />
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Select Employee"
        size="md"
      >
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <div className="max-h-96 overflow-y-auto space-y-2">
            {mockEmployees.map((employee) => (
              <button
                key={employee.id}
                onClick={() => handleSelectEmployee(employee)}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <p className="font-medium text-gray-900">{employee.name}</p>
                <p className="text-sm text-gray-500">{employee.department}</p>
                <p className="text-xs text-gray-400">{employee.email}</p>
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

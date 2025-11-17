import React from 'react';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockDepreciationData = [
  { id: 1, name: 'MacBook Pro 16"', purchasePrice: 2500, currentValue: 1875, depreciationRate: '25%', yearsOwned: 1 },
  { id: 2, name: 'Dell Monitor', purchasePrice: 400, currentValue: 320, depreciationRate: '20%', yearsOwned: 1 },
  { id: 3, name: 'HP Laptop', purchasePrice: 1200, currentValue: 720, depreciationRate: '40%', yearsOwned: 2 },
  { id: 4, name: 'iPhone 13 Pro', purchasePrice: 1000, currentValue: 650, depreciationRate: '35%', yearsOwned: 1.5 },
];

const mockChartData = [
  { year: 'Year 0', value: 100 },
  { year: 'Year 1', value: 80 },
  { year: 'Year 2', value: 64 },
  { year: 'Year 3', value: 51 },
  { year: 'Year 4', value: 41 },
  { year: 'Year 5', value: 33 },
];

export const DepreciationPage = () => {
  const columns = [
    { key: 'name', label: 'Asset Name' },
    {
      key: 'purchasePrice',
      label: 'Purchase Price',
      render: (value) => `$${value}`,
    },
    {
      key: 'currentValue',
      label: 'Current Value',
      render: (value) => `$${value}`,
    },
    { key: 'depreciationRate', label: 'Depreciation' },
    { key: 'yearsOwned', label: 'Years Owned' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Depreciation Overview</h1>
        <p className="text-gray-500 mt-1">Track asset value depreciation over time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <p className="text-sm font-medium text-gray-500">Total Purchase Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">$5,100</p>
        </Card>
        <Card>
          <p className="text-sm font-medium text-gray-500">Current Total Value</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">$3,565</p>
        </Card>
        <Card>
          <p className="text-sm font-medium text-gray-500">Total Depreciation</p>
          <p className="text-2xl font-bold text-red-600 mt-2">$1,535</p>
        </Card>
        <Card>
          <p className="text-sm font-medium text-gray-500">Avg. Depreciation Rate</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">30%</p>
        </Card>
      </div>

      <Card title="Depreciation Curve (20% Annual Rate)">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-500 mt-4">
          This chart shows typical asset depreciation over 5 years using a 20% declining balance method.
        </p>
      </Card>

      <Card title="Asset Depreciation Details">
        <Table columns={columns} data={mockDepreciationData} />
      </Card>
    </div>
  );
};

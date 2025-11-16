import React from 'react';
import { Package, Users, Wrench, AlertTriangle } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { Card } from '../components/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const mockAssetData = [
  { month: 'Jan', assets: 65 },
  { month: 'Feb', assets: 72 },
  { month: 'Mar', assets: 68 },
  { month: 'Apr', assets: 85 },
  { month: 'May', assets: 92 },
  { month: 'Jun', assets: 98 },
];

const mockCategoryData = [
  { category: 'Laptops', count: 45 },
  { category: 'Desktops', count: 32 },
  { category: 'Monitors', count: 78 },
  { category: 'Phones', count: 23 },
  { category: 'Tablets', count: 15 },
];

export const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of your IT assets and operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Assets"
          value={193}
          icon={<Package className="w-8 h-8" />}
          color="blue"
          trend={{ value: '12% from last month', isPositive: true }}
        />
        <StatCard
          title="Active Employees"
          value={87}
          icon={<Users className="w-8 h-8" />}
          color="green"
          trend={{ value: '5% from last month', isPositive: true }}
        />
        <StatCard
          title="Under Maintenance"
          value={8}
          icon={<Wrench className="w-8 h-8" />}
          color="orange"
          trend={{ value: '2 from last week', isPositive: false }}
        />
        <StatCard
          title="Pending Requests"
          value={14}
          icon={<AlertTriangle className="w-8 h-8" />}
          color="red"
          trend={{ value: '3 new today', isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Asset Growth Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockAssetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="assets" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Assets by Category">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockCategoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <div className="space-y-4">
            {[
              { action: 'New asset added', item: 'MacBook Pro 16"', time: '2 hours ago' },
              { action: 'Asset assigned', item: 'Dell Monitor to John Doe', time: '4 hours ago' },
              { action: 'Maintenance completed', item: 'HP Laptop #1234', time: '1 day ago' },
              { action: 'Asset retired', item: 'Old Desktop PC', time: '2 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.item}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
              <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Add Asset</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Assign Asset</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all">
              <Wrench className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Log Maintenance</p>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">View Requests</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

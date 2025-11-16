import React from 'react';

export const StatCard = ({ title, value, icon, trend, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>

          {trend && (
            <p className={`text-sm mt-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}
            </p>
          )}
        </div>

        <div className={`${colorClasses[color]} p-4 rounded-xl`}>
          <div className="text-white">{icon}</div>
        </div>
      </div>
    </div>
  );
};

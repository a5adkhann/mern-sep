// src/dashboard/components/ProgressSummary.jsx
import React from 'react';
import { FiFileText, FiDownload } from 'react-icons/fi';

const ProgressSummary = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-cyan-400">Progress Summary</h3>
        <div className="space-x-2">
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 transition">
            <FiFileText /> Export PDF
          </button>
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 transition">
            <FiDownload /> Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">DATE</th>
              <th className="px-4 py-2">WEIGHT</th>
              <th className="px-4 py-2">CHEST</th>
              <th className="px-4 py-2">WAIST</th>
              <th className="px-4 py-2">RUN TIME</th>
              <th className="px-4 py-2">LIFT WEIGHT</th>
              <th className="px-4 py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-400">
                No progress recorded yet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressSummary;

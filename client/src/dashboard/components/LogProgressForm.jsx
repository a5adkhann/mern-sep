// src/dashboard/components/ProgressForm.jsx
import React from 'react';

const LogProgressForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Track Your Progress</h2>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Log New Progress</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input type="date" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Weight (kg)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Chest (cm)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input type="text" placeholder="Waist (cm)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Run Time (minutes)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Lift Weight (kg)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
        </div>

        <button className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
          Save Progress
        </button>
      </div>
    </div>
  );
};

export default LogProgressForm;

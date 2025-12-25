import React from 'react';

const FitnessGoals = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-cyan-400 mb-1">Goals</h1>
          <p className="text-gray-400 text-sm">Set and track fitness goals.</p>
        </div>

        {/* Form Container */}
        <div className="p-6 mb-10">
          <h2 className="text-cyan-400 text-lg font-semibold mb-6">Fitness Goals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
            {/* Goal Type */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-medium">Goal Type</label>
              <select className="w-full bg-gray-700 border border-[#2A2A2A] rounded p-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#FFC107]">
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
              </select>
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-medium">Deadline</label>
              <input 
                type="text" 
                defaultValue="25/12/2025"
                className="w-full bg-gray-700 rounded p-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#FFC107]"
              />
            </div>

            {/* Target */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-medium">Target</label>
              <input 
                type="text" 
                placeholder="Target (kg)"
                className="w-full bg-gray-700 rounded p-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#FFC107]"
              />
            </div>

            {/* Current */}
            <div className="space-y-2">
              <label className="text-xs text-gray-400 font-medium">Current</label>
              <input 
                type="text" 
                placeholder="Current (kg)"
                className="w-full bg-gray-700 rounded p-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#FFC107]"
              />
            </div>

            {/* Notes - Span full width */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs text-gray-400 font-medium">Notes</label>
              <input 
                type="text" 
                placeholder="Notes"
                className="w-full bg-gray-700 rounded p-2.5 text-sm text-gray-300 focus:outline-none focus:border-[#FFC107]"
              />
            </div>
          </div>

          <button className="mt-8 bg-cyan-400 hover:bg-[#e5ac00] text-black font-bold py-2 px-5 rounded flex items-center gap-2 text-sm transition-colors">
            <span className="text-lg">+</span> Add
          </button>
        </div>

        {/* Data Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="pb-4 text-[11px] font-bold uppercase tracking-wider text-gray-300 px-2">Type</th>
                <th className="pb-4 text-[11px] font-bold uppercase tracking-wider text-gray-300 px-2">Target</th>
                <th className="pb-4 text-[11px] font-bold uppercase tracking-wider text-gray-300 px-2">Current</th>
                <th className="pb-4 text-[11px] font-bold uppercase tracking-wider text-gray-300 px-2">Deadline</th>
                <th className="pb-4 text-[11px] font-bold uppercase tracking-wider text-gray-300 px-2">Progress</th>
                <th className="pb-4 text-[11px] font-bold uppercase tracking-wider text-gray-300 px-2">Status</th>
                <th className="pb-4 text-[11px] font-bold uppercase tracking-wider text-gray-300 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="py-10 text-center text-sm text-gray-500 italic">
                  No goals set yet
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FitnessGoals;
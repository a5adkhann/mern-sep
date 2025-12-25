import React from 'react';

const Reminders = () => {
  return (
    <div className="min-h-screen text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto"> 

        {/* Form Container */}
        <div className="bg-gray-900 rounded-lg p-8 mb-10 shadow-xl">
             {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Reminders & Alerts</h1>
          <p className="text-gray-400 text-sm">Create, edit or delete personal reminders for workouts, meals or goals.</p>
        </div>
          <h2 className="text-cyan-400 text-lg font-semibold mb-8">Set Notification</h2>

          {/* Tab Selection */}
          <div className="flex bg-[#0A0A0A] rounded-md p-1 mb-8 w-full border border-[#1A1A1A]">
            <button className="flex-1 bg-cyan-400 text-black font-bold py-2 rounded-md text-sm transition-colors">
              All
            </button>
            <button className="flex-1 text-gray-400 font-medium py-2 text-sm hover:text-white transition-colors">
              Reminders (0)
            </button>
            <button className="flex-1 text-gray-400 font-medium py-2 text-sm hover:text-white transition-colors">
              Alerts (0)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Title *</label>
              <input
                type="text"
                placeholder="Title *"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Reminder Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Type</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <option>Reminder</option>
                <option>Alert</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Date</label>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Time</label>
              <input
                type="text"
                placeholder="--:-- --"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Category</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <option>Workout</option>
                <option>Meal</option>
                <option>Goal</option>
              </select>
            </div>

            {/* Notes */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm text-gray-400">Notes (optional)</label>
              <input
                type="text"
                placeholder="Notes"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <button className="mt-8 bg-cyan-400 hover:bg-cyan-500 text-black font-extrabold py-2.5 px-6 rounded flex items-center gap-2 text-sm uppercase transition-all active:scale-95 shadow-lg shadow-cyan-400/10">
            <span className="text-xl">+</span> Add Reminder
          </button>
        </div>

        {/* Data Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="pb-5 text-[11px] font-bold uppercase tracking-widest text-gray-400 px-4">Item</th>
                <th className="pb-5 text-[11px] font-bold uppercase tracking-widest text-gray-400 px-4">Date / Time</th>
                <th className="pb-5 text-[11px] font-bold uppercase tracking-widest text-gray-400 px-4">Type</th>
                <th className="pb-5 text-[11px] font-bold uppercase tracking-widest text-gray-400 px-4">Status</th>
                <th className="pb-5 text-[11px] font-bold uppercase tracking-widest text-gray-400 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="py-20 text-center text-sm text-gray-500 font-light tracking-wide">
                  No items found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
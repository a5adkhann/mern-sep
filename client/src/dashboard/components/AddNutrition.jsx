import { motion } from 'framer-motion';
import React from 'react';
import { FiFileText, FiDownload } from 'react-icons/fi';

const AddNutrition = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mx-auto m-10  p-6 rounded-xl shadow-lg bg-gray-900 text-white"
    >
    <div className="mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Title */}
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Nutrition Tracker</h2>

      {/* Nutrition Logs Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Nutrition Logs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select className="p-3 rounded-lg bg-gray-700 text-white w-full">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
          <input
            type="date"
            className="p-3 rounded-lg bg-gray-700 text-white w-full"
            value="2025-12-25"
            readOnly
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Food name" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Quantity (e.g. 150g)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input type="text" placeholder="Calories" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Proteins (g)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Carbs (g)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
          <input type="text" placeholder="Fats (g)" className="p-3 rounded-lg bg-gray-700 text-white w-full" />
        </div>

        <button className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
          + Add
        </button>
      </div>

     
    </div>
    </motion.div>
  );
};

export default AddNutrition;

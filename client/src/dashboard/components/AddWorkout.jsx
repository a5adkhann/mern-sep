import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AddWorkout = () => {
  const [form, setForm] = useState({
    exerciseName: '',
    sets: '',
    reps: '',
    weight: '',
    notes: '',
    category: '',
    tags: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Workout submitted:', form);
    // Here you can add your axios POST request to send data to backend
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mx-auto mt-10 p-6 rounded-xl shadow-lg bg-gray-900 text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">Add New Workout</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Exercise Name</label>
          <input
            type="text"
            name="exerciseName"
            value={form.exerciseName}
            onChange={handleChange}
            placeholder="Enter exercise name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Sets</label>
            <input
              type="number"
              name="sets"
              value={form.sets}
              onChange={handleChange}
              placeholder="e.g. 3"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Reps</label>
            <input
              type="number"
              name="reps"
              value={form.reps}
              onChange={handleChange}
              placeholder="e.g. 12"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="e.g. 20"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Any additional notes"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows={3}
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select category</option>
              <option value="Strength">Strength</option>
              <option value="Cardio">Cardio</option>
              <option value="Flexibility">Flexibility</option>
              <option value="HIIT">HIIT</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Tags</label>
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="Comma separated tags"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 rounded-lg font-bold bg-cyan-400 text-gray-900 hover:bg-cyan-500 transition-all"
        >
          Add Workout
        </button>
      </form>
    </motion.div>
  );
};

export default AddWorkout;

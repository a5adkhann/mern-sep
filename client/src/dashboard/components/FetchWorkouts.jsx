import React from 'react';
import { motion } from 'framer-motion';

const FetchWorkouts = () => {
  const sampleData = [
    {
      exerciseName: 'Bench Press',
      sets: 4,
      reps: 10,
      weight: 60,
      category: 'Chest',
      tags: 'Strength',
      date: '2025-12-25',
      notes: 'Felt strong today'
    },
    {
      exerciseName: 'Squats',
      sets: 5,
      reps: 8,
      weight: 80,
      category: 'Legs',
      tags: 'Power',
      date: '2025-12-24',
      notes: 'Good form'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto mt-6 p-6 rounded-xl shadow-lg bg-gray-900 text-white overflow-x-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">Recent Workouts</h2>

      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Exercise Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Sets</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Reps</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Weight (kg)</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Category</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Tags</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Date</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-200">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {sampleData.map((workout, index) => (
            <tr key={index} className="hover:bg-gray-700 transition-colors">
              <td className="px-4 py-2">{workout.exerciseName}</td>
              <td className="px-4 py-2">{workout.sets}</td>
              <td className="px-4 py-2">{workout.reps}</td>
              <td className="px-4 py-2">{workout.weight}</td>
              <td className="px-4 py-2">{workout.category}</td>
              <td className="px-4 py-2">{workout.tags}</td>
              <td className="px-4 py-2">{workout.date}</td>
              <td className="px-4 py-2">{workout.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default FetchWorkouts;

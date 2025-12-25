import React from 'react'
import { FiDownload, FiFileText } from 'react-icons/fi'

const FetchNutritions = () => {
  return (
    <>
         {/* Nutrition History Table */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-white">nutritionHistory</span>
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
                <th className="px-4 py-2">MEAL</th>
                <th className="px-4 py-2">FOOD</th>
                <th className="px-4 py-2">QUANTITY</th>
                <th className="px-4 py-2">CAL</th>
                <th className="px-4 py-2">P</th>
                <th className="px-4 py-2">C</th>
                <th className="px-4 py-2">F</th>
                <th className="px-4 py-2">DATE</th>
                <th className="px-4 py-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-400">
                  No nutrition logs yet
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default FetchNutritions

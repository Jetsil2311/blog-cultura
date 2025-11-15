import React from 'react'

export const Card = ({ name, role }) => {
  return (
    <div className="group relative bg-gray-800 rounded-xl shadow-black shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-gray-600">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-4 sm:p-5 flex flex-col items-center text-center">
        <h3 className="font-bold text-white text-xs sm:text-sm mb-1 line-clamp-2 transition-colors">
          {name}
        </h3>
        
        <p className="text-xs text-gray-500 font-medium">
          {role}
        </p>
      </div>
    </div>
  );
}

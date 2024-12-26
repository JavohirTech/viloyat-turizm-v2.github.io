"use client"
import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <motion.h1
            className="text-6xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
            className="text-lg text-gray-600 mt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
         Sahifa topilmadi, Iltimos qayta urinib ko`ring
        </motion.p>
        <motion.a
            href="/"
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-blue-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
          Orga qaytish
        </motion.a>
      </div>
  );
};

export default NotFound;

"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="h-screen w-full flex justify-center items-center bg-green-500"
      >
        <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 bg-white rounded-full"
        />
      </motion.div>
  );
};

export default Loading;

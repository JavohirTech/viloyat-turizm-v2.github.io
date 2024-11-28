import React, {FC} from 'react';
import { motion } from 'framer-motion';

interface EmptyProps {
  height?: string;
}

export const Empty: FC<EmptyProps> = ({ height = 'h-screen' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${height} text-center select-none`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-500"
      >
        <i className="fa-duotone fa-solid fa-folder-open text-7xl"></i>
      </motion.div>
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-4 text-2xl font-bold text-gray-700"
      >
        Ma`lumot topilmadi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-2 text-gray-500"
      >
        Iltimos keyinroq qayta urinib ko`ring
      </motion.p>
    </div>
  );
};


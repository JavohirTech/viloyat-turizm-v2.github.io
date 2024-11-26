import React, {FC} from 'react';
import { motion } from 'framer-motion';

interface EmptyProps {
  height?: string;
}

export const Empty: FC<EmptyProps> = ({ height = 'h-screen' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${height} text-center`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-500"
      >
        <i className="fa-duotone fa-solid fa-folder-open"></i>
      </motion.div>
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-4 text-2xl font-bold text-gray-700"
      >
        No Content Available
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-2 text-gray-500"
      >
        Please check back later.
      </motion.p>
    </div>
  );
};


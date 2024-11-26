import React, {FC} from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  height?: string;
}

export const Loader: FC<LoaderProps> = ({ height = 'h-screen' }) => {
  return (
    <div className={`flex items-center justify-center ${height}`}>
      <motion.div
        className="w-16 h-16 border-4 border-t-4 border-t-green-500 border-gray-200 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
};

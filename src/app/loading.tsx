"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

const Loading = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="h-screen w-full flex flex-col gap-4 justify-center items-center bg-green-500"
      >
        <Image className={"filter invert brightness-0"} src={"/images/namangan-turizm-logo.gif"} width={100} height={100} alt={"Namangan turizm logo"}/>
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
            className="w-10 h-10 bg-white rounded-full"
        />
      </motion.div>
  );
};

export default Loading;

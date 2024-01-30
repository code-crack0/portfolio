import React from 'react';
import { motion } from 'framer-motion';
import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa6';

export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="text-4xl max-w-[1450px] text-white font-bold mb-4 mx-auto p-8">Skills</h1>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <motion.div whileHover={{ scale: 1.5 }}>
          <TiHtml5 size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <FaCss3Alt size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <FaReact size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <SiNextdotjs size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <IoLogoJavascript size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <SiTypescript size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <FaPython size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <TbBrandCpp size={64} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }}>
          <FaJava size={64} />
        </motion.div>
      </div>
    </div>
  );
}

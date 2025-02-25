import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Brain, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code2, title: 'Programming Languages', items: ['Python', 'C++',] },
    { icon: Brain, title: 'Backend Development', items: ['Python', 'PostgreSQL'] },
    { icon: Palette, title: 'Design', items: ['Solidworks', 'KiCAD', 'UI/UX'] },
    { icon: Rocket, title: 'Other', items: ['Git', 'Docker', 'Linux'] },
  ];

  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6">
            I'm a passionate mechatronics engineer with proven expertise in developing innovative solutions, 
            with experience in automation, product design, and multidisciplinary projects. I love creating 
            elegant solutions to complex problems and am constantly learning new technologies.
          </p>
          <p className="text-gray-600">
            When I'm not working, you can find me developing personal projects,
            exploring the latest technologies or playing volleyball.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map(({ icon: Icon, title, items }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
              >
                <Icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="text-gray-600"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About

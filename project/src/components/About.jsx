import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express", level: 82 },
    { name: "UI/UX Design", level: 75 },
    { name: "React Native", level: 78 },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle background patterns - changed to match projects section */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-500/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-pink-500/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              className="md:col-span-1"
            >
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 h-full">
                <h3 className="text-xl font-semibold mb-4 text-pink-400">Professional Profile</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">FrontEnd Developer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">MERN Stack Developer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">Mobile App Developer</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">UI/UX Desinger</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300">Wordpress Developer</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2"
            >
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 relative">
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
                
                <p className="text-lg leading-relaxed text-gray-300">
                I'm Sachini Ruvindya, a passionate Software Engineer currently pursuing my <span className='text-pink-400'> BSc (Hons) in Software Engineering at NSBM Green University. </span>
                I’m deeply interested in Web Development, where I can combine both creativity and technical skills to build user-friendly, functional websites.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mt-4">
                With experience in both frontend and backend development, I work to create seamless web solutions that offer great performance and a smooth user experience. 
                I enjoy exploring new technologies, finding creative ways to solve problems, and continuously improving my craft.
                </p>
              </div >
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
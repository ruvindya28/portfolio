import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import myImage from "../assets/my.jpg";
import { faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const profileVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.5)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
  initial: {
    scale: 1,
  },
};

export default function Hero() {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-500/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 text-center z-10"
      >
        <motion.div
          variants={profileVariants}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-pink-500 relative">
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-pink-500/20"
              animate={{
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          {/* Orbit effect around profile */}
          <motion.div
            className="absolute w-full h-full top-0 left-0"
            style={{ width: '16rem', height: '16rem', marginLeft: 'calc(50% - 8rem)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 top-0 left-1/2 transform -translate-x-1/2" />
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Welcome to My Portfolio
          </h1>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="h-16 mb-8"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'UI/UX Designer',
              2000,
              'Mobile Application Developer',
              2000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-pink-400 font-semibold"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 max-w-lg mx-auto mb-8 text-lg"
        >
          I create beautiful, responsive, and user-friendly digital experiences with a focus on performance and accessibility.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          
          <motion.a
            href="https://drive.google.com/file/d/1rQ_rN6sYO6ybD-86aern2igQSi4Cc19M/view?usp=sharing"
            target="_blank"
            download
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium flex items-center mx-auto space-x-3 shadow-lg shadow-pink-500/30 cursor-pointer"
          >
            <FontAwesomeIcon icon={faDownload} className="text-lg" />
            <span>Download CV</span>
          </motion.a>

          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="bg-transparent border-2 border-pink-500 text-pink-400 px-8 py-4 rounded-full font-medium flex items-center mx-auto space-x-3"
          >
            <span>View Projects</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center space-x-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/ruvindya28"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sachini-ruvindya/"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </motion.a>
          <motion.a
            href="https://dribbble.com/designs_sachini"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faDribbble} size="2x" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
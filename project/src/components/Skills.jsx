import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode,
  faDatabase,
  faMobile,
  faPalette,
  faServer,
  faCloud,
  faTools,
  faLayerGroup,
  faPencilRuler,
  faSwatchbook,
  faUserCheck,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact,
  faNode,
  faJs,
  faCss3,
  faHtml5,
  faFigma,
  faGitAlt,
  faNpm,
  faDocker
} from '@fortawesome/free-brands-svg-icons';

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  }
};

const itemVariants = {
  hidden: { x: -40, opacity: 0, scale: 0.9 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14
    }
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.2), 0 8px 10px -6px rgba(236, 72, 153, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  }
};

// Modified icon variants without rotation
const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    scale: 1.3,
    color: "#d946ef", // Pink color on hover
    transition: {
      scale: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }
};

// Modified category icon variants without spinning
const categoryIconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const progressVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (level) => ({
    width: `${level}%`,
    opacity: 1,
    transition: { 
      duration: 1.5,
      delay: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.1
    }
  }
};

// Modified floating decoration without rotation
const floatingDecoration = {
  animate: {
    y: [0, -10, 0],
    opacity: [0.6, 1, 0.6],
    scale: [1, 1.05, 1],
    transition: {
      y: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      },
      opacity: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      },
      scale: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

export default function Skills() {
  // Categorized skills
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: faCode,
      color: "#d946ef", // Pink for frontend
      skills: [
        { name: 'React.js', level: 90, icon: faReact, color: "#61DAFB" },
        { name: 'JavaScript', level: 90, icon: faJs, color: "#F7DF1E" },
        { name: 'HTML5', level: 95, icon: faHtml5, color: "#E34F26" },
        { name: 'CSS3', level: 85, icon: faCss3, color: "#1572B6" },
      ]
    },
    {
      name: "Backend Development",
      icon: faServer,
      color: "#8b5cf6", // Purple for backend
      skills: [
        { name: 'Node.js', level: 85, icon: faNode, color: "#68A063" },
        { name: 'Express.js', level: 85, icon: faCode, color: "#828282" },
        { name: 'MongoDB', level: 80, icon: faDatabase, color: "#4DB33D" },
        { name: 'RESTful APIs', level: 88, icon: faCloud, color: "#3498DB" },
      ]
    },
    {
      name: "Mobile Development",
      icon: faMobile,
      color: "#3b82f6", // Blue for mobile
      skills: [
        { name: 'React Native', level: 80, icon: faReact, color: "#61DAFB" },
        { name: 'Mobile UI Design', level: 75, icon: faPalette, color: "#FF6B6B" },
        { name: 'App Deployment', level: 70, icon: faCloud, color: "#3498DB" },
      ]
    },
    {
      name: "UI/UX Design",
      icon: faPalette,
      color: "#ec4899", // Brighter pink for UI/UX
      skills: [
        { name: 'Figma', level: 85, icon: faFigma, color: "#F24E1E" },
        { name: 'Wireframing', level: 90, icon: faPencilRuler, color: "#FF6B6B" },
        { name: 'Color Theory', level: 80, icon: faSwatchbook, color: "#FF9F43" },
        { name: 'User Research', level: 85, icon: faUserCheck, color: "#A3A1FB" },
      ]
    },
    {
      name: "Development Tools",
      icon: faTools,
      color: "#10b981", // Green for tools
      skills: [
        { name: 'Git', level: 90, icon: faGitAlt, color: "#F05032" },
        { name: 'npm', level: 85, icon: faNpm, color: "#CB3837" },
        { name: 'Docker', level: 75, icon: faDocker, color: "#2496ED" },
      ]
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 140 + 50,
              height: Math.random() * 140 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 5 === 0 ? '#ec489930' : 
                i % 4 === 0 ? '#8b5cf630' : 
                i % 3 === 0 ? '#3b82f630' : 
                i % 2 === 0 ? '#10b98130' : 
                '#d946ef30'
              } 0%, transparent 70%)`,
              filter: "blur(5px)"
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.3, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Floating icons decoration without rotation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['React', 'Node', 'Design', 'Mobile', 'Web'].map((_, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-gray-700 opacity-5"
            style={{
              fontSize: Math.random() * 30 + 40,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            variants={floatingDecoration}
            animate="animate"
          >
            <FontAwesomeIcon 
              icon={
                i % 5 === 0 ? faReact : 
                i % 4 === 0 ? faNode : 
                i % 3 === 0 ? faPalette : 
                i % 2 === 0 ? faMobile : 
                faCode
              } 
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={titleVariants}
            className="text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text"
          >
            Technical Skills
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-center max-w-2xl mx-auto"
          >
            I specialize in full-stack development with expertise in the following technologies and frameworks.
            My skills cover the entire development lifecycle from design to deployment.
          </motion.p>
        </motion.div>

        {/* Three categories per row layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col h-full bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-pink-900/20 transition-all duration-500"
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  variants={categoryIconVariants}
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ 
                    background: `${category.color}20`,
                    boxShadow: `0 0 20px ${category.color}30`
                  }}
                >
                  <FontAwesomeIcon icon={category.icon} className="text-2xl" style={{ color: category.color }} />
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  {category.name}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 gap-4 flex-grow"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover="hover"
                    custom={index}
                    className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 shadow-lg group relative overflow-hidden"
                  >
                    {/* Skill content */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          variants={iconVariants}
                          whileHover="hover"
                          className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center"
                        >
                          <FontAwesomeIcon 
                            icon={skill.icon} 
                            className="text-lg" 
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white">{skill.name}</h4>
                          <p className="text-xs text-gray-400">{skill.level}% proficiency</p>
                        </div>
                      </div>
                      
                      <motion.div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm"
                        style={{ background: `${category.color}20`, color: category.color }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: `0 0 15px ${category.color}40`
                        }}
                      >
                        <span className="flex items-center">
                          {skill.level >= 90 && (
                            <motion.span 
                              className="mr-1"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                color: [category.color, "#ffdd00", category.color]
                              }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            >
                              <FontAwesomeIcon icon={faStar} className="text-xs" />
                            </motion.span>
                          )}
                          {skill.level}%
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Enhanced Progress bar */}
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(to right, ${skill.color}, ${category.color})`,
                        }}
                      >
                        {/* Animated shimmer effect */}
                        <motion.div 
                          className="absolute inset-0 w-full h-full"
                          style={{
                            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)`,
                            backgroundSize: "200% 100%"
                          }}
                          animate={{
                            backgroundPosition: ["0% 0%", "200% 0%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Enhanced glow effect on hover */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                      animate={{
                        background: [
                          `radial-gradient(circle at 50% 50%, ${category.color}40 0%, transparent 70%)`,
                          `radial-gradient(circle at 50% 50%, ${category.color}20 0%, transparent 70%)`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
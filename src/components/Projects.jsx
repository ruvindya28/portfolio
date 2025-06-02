import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faArrowLeft,
  faLink,
  faGlobe,
  faPalette,
  faMobileScreen
} from '@fortawesome/free-solid-svg-icons';
import petcare from "../assets/petcare1.png";
import railway from "../assets/railway.png";
import Cover8 from "../assets/Cover8.png";
import interial from "../assets/interial.png";
import resturant from "../assets/resturant.jpg";
import pastry from "../assets/pasty_shop.png";
import pos from "../assets/pos.png";
import clothing from "../assets/clothing.png";
import student from "../assets/student.png";
import netflix from "../assets/netflix.jpg";
import FoodDelivery from "../assets/FoodDelivery.png";
import Luxelady from "../assets/luxelady.png";

import wordpress1 from "../assets/wordpress1.png";
import Travel from "../assets/travel.jpg";


export default function Projects() {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Updated categories to match your requirements
  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Development','Wordpress Development'];
  
  // Icons for each category
  const categoryIcons = {
    'Web Development': faGlobe,
    'UI/UX Design': faPalette,
    'Mobile Development': faMobileScreen,
    'Wordpress Development':faGlobe, 
  };

  // Updated projects with new categories
  const projects = [
     {
      title: "Food Delivery website-MERN", 
      description: "MERN Stack Responsive website for food delivery website",
      image: FoodDelivery,
      category:"Web Development",
      github: "https://github.com/ruvindya28/food-delivery-web-app.git",
      live: "https://github.com/ruvindya28/food-delivery-web-app.git"
     },

    {
      title: "Railway Website Redesign", 
      description: "Redesign in government railway website",
      image: railway,
      category:"UI/UX Design",
      github: "#",
      live: "https://www.figma.com/proto/H37RhU9k53bXiE3GOS4ixj/HCI-Project?node-id=0-1&p=f&t=7VnV8JVmi21uCgvg-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A3&show-proto-sidebar=1"
    },
     {
      title: "Netflix Clone-React",
      description: "Responsive website for netflix website",
      image: netflix,
      category: "Web Development",
      github: "https://github.com/ruvindya28/Nelflix-Clone-React.git",
      live: "https://nelflix-clone-react.vercel.app/login"
    },
    {
      title: "Resturant Website-React",
      description: "Responsive website for resturant website",
      image: resturant,
      category: "Web Development",
      github: "https://github.com/ruvindya28/Resturant-website-React-JS",
      live: "https://resturant-website-react-js.vercel.app/"
    },
   
    {
      title: "Travel Website-React",
      description: "Modern travel application interface with intuitive booking flow and animations",
      image: Travel,
      category: "Web Development",
      github: "https://github.com/ruvindya28/Travel_Agency-react",
      live: "https://travel-agency-company.vercel.app/"
    },
    {
      title: "Pet Care Website",
      description: "User-friendly Pet Care website for caring your pets. This website is developed using html,css,javaScript.",
      image: petcare,
      category: "Web Development",
      github: "https://github.com/ruvindya28/Pet-Care-Website-html-css-js",
      live: "https://ruvindya28.github.io/Pet-Care-Website-html-css-js/"
    },
    {
      title: "Clothing Shop Website",
      description: "Responsive website for clothing shop website",
      image: clothing,
      category: "Web Development",
      github: "https://github.com/ruvindya28/Clothing_website-Js",
      live: "https://clothing-website-js.vercel.app/"
    },
    {
      title: "Student Mangement System",
      description: "Responsive website for student managment system",
      image: student,
      category: "Web Development",
      github: "https://github.com/ruvindya28/Student_Management-System-Js",
      live: "https://student-management-system-js.vercel.app/"
    },
    {
      title: "Pastry Shop Website",
      description: "Responsive website for pastry shop website",
      image: pastry,
      category: "Web Development",
      github: "https://github.com/ruvindya28/Pastry-Shop-Website",
      live: "https://pastry-shop-website.vercel.app/"
    },
    {
      title: "Interial Website Design",
      description: "Responsive website for interior design website",
      image: interial,
      category: "UI/UX Design",
      github: "#",
      live: "https://www.figma.com/proto/uGk4f3lDhvrftT1YYv0ZWE/Interior-Design-Web-Site?node-id=1-671&p=f&t=SD8OYaqvDMyedSnb-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A671"
    },
    
    {
      title: "Food Delivery App",
      description: "On-demand food delivery application with real-time tracking and payment system",
      image: "https://via.placeholder.com/400x250",
      category: "Mobile Development",
      github: "#",
      live: "#"
    },
    {
      title: "Clothing Shop Website",
      description: "Responsive website for clothing shop website",
      image: Luxelady,
      category: "Wordpress Development",
      github: "#",
      live: "https://luxelady.free.nf/"
    }
  ];

  const filteredProjects = currentCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === currentCategory);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProjectIndex((prev) => 
      prev === filteredProjects.length - 3 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 3 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentProjectIndex]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20
      }
    }
  };

  const categoryVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 25,
        delay: i * 0.08
      }
    })
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: i * 0.15
      }
    }),
    hover: { 
      y: -15,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    exit: { 
      y: 40, 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.08,
      transition: { duration: 0.4 }
    }
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      transition: { type: "spring", stiffness: 500 }
    },
    tap: { 
      scale: 0.9 
    }
  };

  // Badge with pop animation
  const badgeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 500, delay: 0.2 }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2
            variants={titleVariants}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            My Projects
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Showcasing my expertise in web development, UI/UX design, and mobile applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center flex-wrap gap-4 mb-16"
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              custom={index}
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: currentCategory === category ? "" : "rgba(var(--color-accent-rgb), 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentProjectIndex(0);
              }}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium shadow-lg flex items-center gap-2 ${
                currentCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:text-white hover:shadow-pink-500/20'
              }`}
            >
              {category !== 'all' && (
                <FontAwesomeIcon icon={categoryIcons[category]} className="text-lg" />
              )}
              {category.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative overflow-hidden py-12">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentProjectIndex}
              className="flex gap-8 overflow-visible"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
              {filteredProjects.slice(currentProjectIndex, currentProjectIndex + 3).map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-1/3 flex-shrink-0 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/30"
                >
                  <motion.div className="overflow-hidden h-52 relative">
                    <motion.img
                      variants={imageVariants}
                      initial="initial"
                      whileHover="hover"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                    >
                      <motion.span 
                        variants={badgeVariants}
                        initial="initial"
                        animate="animate"
                        className="m-4 inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium"
                      >
                        {project.category.toUpperCase()}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="text-white hover:text-pink-400 p-3 bg-gray-700/50 hover:bg-gray-700 rounded-full transition-colors"
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="text-white hover:text-pink-400 p-3 bg-gray-700/50 hover:bg-gray-700 rounded-full transition-colors"
                      >
                        <FontAwesomeIcon icon={faLink} className="text-lg" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length > 3 && (
            <>
              <motion.button
                onClick={prevProject}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                disabled={isAnimating}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-lg z-10"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
              </motion.button>
              <motion.button
                onClick={nextProject}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                disabled={isAnimating}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-lg z-10"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              </motion.button>
            </>
          )}
        </div>
        
        {/* Section divider with animation */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
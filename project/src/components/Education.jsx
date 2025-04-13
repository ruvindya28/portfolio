import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import image from '../assets/image.png';
import dp_figma from "../assets/dp_figma.png";

export default function Education() {
  const [activeTab, setActiveTab] = useState('education');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewingCert, setViewingCert] = useState(null);
  
  // Refs for scrolling certificate rows
  const scrollContainerRefs = useRef({});
  
  const certCategories = ['all', 'web development', 'design', 'mobile development'];

  
  const educationData = [
    {
      degree: "Bsc(Honours) in Software Engineering",
      school: "Nsbm Green University",
      location: "Homagama-Pitipana",
      years: "2022-2026",
      description: "Specialized in Artificial Intelligence and Machine Learning with a focus on Neural Networks and Deep Learning architectures.",
      logo: image, // Use the imported image variable
    },
  ];

  const certificates = [
    {
      title: "Full Stack Development",
      provider: "Udemy",
      year: "2023",
      description: "Complete MERN Stack Developer Course",
      category: "development",
      certUrl: "#" // Add actual certificate URL here
    },
    {
      "title": "UI/UX Design",
      "provider": "DP Education",
      "year": "2025",
      "description": "Google UX Design Professional Certificate",
      "category": "design",
      "certUrl": "https://www.dpitcampus.lk/lms/mod/customcert/view.php?id=1749&downloadown=1",  
      "image": dp_figma
    },
    
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon",
      year: "2023",
      description: "Cloud Computing Fundamentals",
      category: "cloud",
      certUrl: "#" // Add actual certificate URL here
    },
    {
      title: "React Native Development",
      provider: "Udemy",
      year: "2023",
      description: "Mobile App Development with React Native",
      category: "development",
      certUrl: "#" // Add actual certificate URL here
    },
    {
      title: "Advanced UI Design",
      provider: "Figma",
      year: "2023",
      description: "Advanced UI Design Principles and Practices",
      category: "design",
      certUrl: "#" // Add actual certificate URL here
    },
    {
      title: "Azure Fundamentals",
      provider: "Microsoft",
      year: "2023",
      description: "Microsoft Azure Cloud Essentials",
      category: "cloud",
      certUrl: "#" // Add actual certificate URL here
    }
  ];

  // Group certificates by category
  const certsByCategory = {};
  certCategories.forEach(category => {
    if (category === 'all') {
      certsByCategory[category] = certificates;
    } else {
      certsByCategory[category] = certificates.filter(cert => cert.category === category);
    }
  });

  // Function to scroll certificate container
  const scroll = (category, direction) => {
    const container = scrollContainerRefs.current[category];
    if (container) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Function to open certificate view
  const openCertificate = (cert) => {
    setViewingCert(cert);
  };

  // Function to close certificate view
  const closeCertificateView = () => {
    setViewingCert(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="education" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-500/5 to-transparent" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-pink-500/5 to-transparent" 
      />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Title with department image */}
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mr-4 rounded-full overflow-hidden"
            >
              
            </motion.div>
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Education & Certifications
            </h2>
          </div>

          <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
            My academic journey and professional certifications that have shaped my expertise in software development and design.
          </p>

          {/* Tab buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 7.727 3.313a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397a1 1 0 011.354-.46l.292.125v3.999a1 1 0 01-2 0V9.394l.354.158zM15 9a1 1 0 012 0v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5a1 1 0 112 0v4h6V9z" />
              </svg>
              <span>Education</span>
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors ${
                activeTab === 'certificates'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-12a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
              </svg>
              <span>Certificates</span>
            </motion.button>
          </div>

          {/* Education Content */}
          {activeTab === 'education' && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg relative overflow-hidden hover:border-purple-500/30 transition-all duration-300"
                >
                  {/* Animated decoration dots */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-70" 
                  />
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-500 rounded-full opacity-70" 
                  />
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-gray-600 overflow-hidden"
                      >
                        <img 
                          src={edu.logo} 
                          alt="NSBM Green University Logo" 
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center mb-1">
                        <div className=" overflow-hidden flex-shrink-0">
                          
                        </div>
                        <h3 className="font-semibold text-xl text-white">{edu.degree}</h3>
                      </div>
                      <p className="text-pink-400 font-medium mb-2">{edu.school}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {edu.years}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certificates Content */}
          {activeTab === 'certificates' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Category selector buttons */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                {certCategories.map(category => (
                  <motion.button
                    key={category}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full font-medium flex items-center space-x-2 transition-colors ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }`}
                  >
                    <span>{category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}</span>
                  </motion.button>
                ))}
              </motion.div>
              
              {/* Display selected category */}
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* Category title */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white border-l-4 border-pink-500 pl-3">
                    {activeCategory === 'all' ? 'All Certificates' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Certificates`}
                  </h3>
                  
                  {/* Navigation arrows - now with gradient styling */}
                  <div className="flex space-x-3">
                    <motion.button 
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-purple-500/20 transition-all duration-300"
                      onClick={() => scroll(activeCategory, 'left')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    <motion.button 
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-pink-500/20 transition-all duration-300"
                      onClick={() => scroll(activeCategory, 'right')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
                
                {/* Scrollable container for certificates */}
                <div 
                  ref={el => scrollContainerRefs.current[activeCategory] = el}
                  className="flex overflow-x-auto py-4 space-x-6 scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {certsByCategory[activeCategory].map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        borderColor: 'rgba(139, 92, 246, 0.3)'  // Light purple border
                      }}
                      className="flex-shrink-0 w-64 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 relative"
                    >
                      {/* Decoration dot for first certificate with animation */}
                      {index === 0 && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full opacity-70" 
                        />
                      )}
                      
                      <div className="mb-4 flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3 border border-gray-600 overflow-hidden">
                            <motion.svg 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 1 }}
                              className="w-5 h-5 text-pink-400" 
                              fill="currentColor" 
                              viewBox="0 0 20 20" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-12a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                            </motion.svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                          <p className="text-purple-400 text-sm">{cert.provider} • {cert.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                      
                      {/* Category indicator with spring animation */}
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="mt-4 flex justify-between items-center"
                      >
                        <span className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300 border border-gray-600">
                          {cert.category}
                        </span>
                        
                        {/* View Certificate Button */}
                        <motion.button
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => openCertificate(cert)}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
                        >
                          View
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Certificate Viewing Modal */}
      {viewingCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative border border-purple-500/30"
          >
            <button
              onClick={closeCertificateView}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">{viewingCert.title}</h3>
            <p className="text-purple-400 mb-4">{viewingCert.provider} • {viewingCert.year}</p>
            
            <div className="bg-gray-900 rounded-lg p-4 mb-6 aspect-video flex items-center justify-center">
              {/* Certificate would be displayed here */}
              <p className="text-gray-300 text-center">Certificate Preview</p>
            </div>
            
            <div className="flex justify-end">
              <a
                href={viewingCert.certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
              >
                Download Certificate
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
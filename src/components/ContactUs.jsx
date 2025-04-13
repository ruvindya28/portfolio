import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-500/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-pink-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block">
              Let's Connect
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out.
              I'm always interested in new opportunities and collaborations.
            </p>
          </motion.div>
          
          {/* Contact Info Cards - Now at the top */}
          <motion.div 
            variants={containerVariants}
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Email */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 text-center relative overflow-hidden group"
            >
              <motion.div 
                variants={floatVariants}
                animate="animate"
                className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-purple-500 to-purple-300 transform origin-left group-hover:scale-x-100 transition-transform duration-300"
              ></motion.div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-500/10 text-purple-400 mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-medium text-white mb-2">Email</h3>
              <p className="text-gray-400">ruvindyasachini6@gmail.com</p>
            </motion.div>
            
            {/* Phone */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 text-center relative overflow-hidden group"
            >
              <motion.div 
                variants={floatVariants}
                animate="animate"
                className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-pink-500 to-pink-300 transform origin-left group-hover:scale-x-100 transition-transform duration-300"
              ></motion.div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-500/10 text-pink-400 mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-medium text-white mb-2">Phone</h3>
              <p className="text-gray-400">+94 70 586 4481</p>
            </motion.div>
            
            {/* Location */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 text-center relative overflow-hidden group"
            >
              <motion.div 
                variants={floatVariants}
                animate="animate"
                className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left group-hover:scale-x-100 transition-transform duration-300"
              ></motion.div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-500/10 text-purple-400 mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-medium text-white mb-2">Location</h3>
              <p className="text-gray-400">Matara, Sri Lanka</p>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
            >
              <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="bg-gray-800 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-gray-700/60 border-0 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                          required
                        />
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="w-full px-4 py-3 bg-gray-700/60 border-0 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your thoughts or project details..."
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-700/60 border-0 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                        required
                      ></textarea>
                    </motion.div>
                    
                    <motion.div 
                      className="flex justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        Send Message
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
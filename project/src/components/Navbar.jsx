import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Portfolio</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-pink-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm w-full absolute top-16 left-0 p-4 border-t border-purple-500/20">
          <div className="flex flex-col space-y-4">
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-64}
                className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
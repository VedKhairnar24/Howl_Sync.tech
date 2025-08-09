import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center group">
              <img 
                src="./imgs/Howl Sync.png" 
                alt="HowlSync.Tech Logo" 
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full border-2 border-blue-500 object-cover mr-2 group-hover:scale-110 transition-transform duration-300"
                 />
              <span className="ml-2 text-base sm:text-lg lg:text-xl font-bold text-tech-blue group-hover:text-tech-indigo transition-colors">HowlSync.Tech</span>
            </Link>
            <p className="mt-3 text-gray-600 text-xs sm:text-sm lg:text-base max-w-md">
              Helping beginners navigate their tech journey with structured learning paths, 
              problem-solving resources, and a supportive community.
            </p>
            <div className="mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
              <a href="mailto:howlsync.tech@gmail.com" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://www.instagram.com/mr.vedkhairnar_officials/?igsh=MTRpYzJwcXZ2Y20yaQ%3D%3D#" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://github.com/VedKhairnar24" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://www.linkedin.com/in/ved-khairnar-193889355/" className="text-gray-400 hover:text-tech-blue transition-colors">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a> 
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase">Learn</h3>
            <ul className="mt-3 space-y-1.5 sm:space-y-2">
              <li><Link to="/learning-paths" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Learning Paths</Link></li>
              <li><Link to="/problem-solving" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Problem-Solving Hub</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Resources Library</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase">Community</h3>
            <ul className="mt-3 space-y-1.5 sm:space-y-2">
              <li><Link to="/community" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Join Forum</Link></li>
              <li><Link to="/community/groups" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Study Groups</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-3 space-y-1.5 sm:space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-tech-blue text-xs sm:text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10 border-t pt-4 sm:pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} HowlSync.Tech. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 md:mt-0">
            Learn code with love...!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
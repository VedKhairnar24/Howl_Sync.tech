import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Code,
  Menu,
  X,
  BookOpen,
  HelpCircle,
  Library,
  Users,
  FileText,
  Info,
  Search
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleGetStartedClick = () => {
    navigate('/');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [window.location.pathname]);

  const navLinks = [
    { name: 'Learning Paths', path: '/learning-paths', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: 'Problem-Solving', path: '/problem-solving', icon: <HelpCircle className="h-4 w-4 mr-2" /> },
    { name: 'Resources', path: '/resources', icon: <Library className="h-4 w-4 mr-2" /> },
    { name: 'Community', path: '/community', icon: <Users className="h-4 w-4 mr-2" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="h-4 w-4 mr-2" /> },
    { name: 'Tools', path: '/tools', icon: <Code className="h-4 w-4 mr-2" /> },
    { name: 'About', path: '/about', icon: <Info className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center group">
            <img
              src="./imgs/Howl Sync.png"
              alt="Website Logo"
              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full border-2 border-blue-500 object-cover mr-2 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg sm:text-xl font-bold text-tech-blue group-hover:text-tech-indigo transition-colors">HowlSync.Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 text-sm rounded-md hover:bg-gray-100 flex items-center text-gray-700 hover:text-tech-blue transition-all duration-300 hover:scale-105"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="default" 
              size={isMobile ? "sm" : "default"}
              className="bg-tech-blue text-white hover:bg-tech-blue/90 hover:scale-105 transition-all duration-300 shadow-md"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t animate-fade-in mobile-menu-container">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-3 rounded-lg hover:bg-gray-100 flex items-center text-gray-700 hover:text-tech-blue transition-all duration-300 hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t">
                <Button 
                  variant="outline" 
                  className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

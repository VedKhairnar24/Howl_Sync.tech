import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Menu, X, BookOpen, HelpCircle, Library, Users, FileText, Info, Search } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Code className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-tech-blue" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-tech-blue">HowlSync.Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-2 py-2 text-sm rounded-md hover:bg-gray-100 flex items-center text-gray-700 hover:text-tech-blue transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search and CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button> */}
            <Button 
              variant="default" 
              size={isMobile ? "sm" : "default"}
              className="bg-tech-blue text-white hover:bg-tech-blue/90"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-3 rounded-md hover:bg-gray-100 flex items-center text-gray-700"
                  onClick={toggleMobileMenu}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t">
                <Button 
                  variant="outline" 
                  className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white"
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

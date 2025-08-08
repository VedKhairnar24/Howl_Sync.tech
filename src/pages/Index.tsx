import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, HelpCircle, Library, Users } from 'lucide-react';
import LearningCard from '@/components/LearningCard';
import TypewriterText from '@/components/TypewriterText';
import { useIsMobile, useIsTablet, useIsDesktop } from '@/hooks/use-mobile';

const featuredPaths = [
  {
    title: 'Web Development Fundamentals',
    description: 'Learn HTML, CSS, and JavaScript to build interactive websites from scratch.',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    level: 'Beginner' as const,
    duration: '8 weeks',
    learningPath: 'Web Development',
    url: '/learning-paths/web-development',
    category: 'web',
  },
  {
    title: 'Python Programming Essentials',
    description: 'Master Python fundamentals and solve real-world problems with code.',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    level: 'Beginner' as const,
    duration: '6 weeks',
    learningPath: 'Programming',
    url: '/learning-paths/python',
    category: 'programming',
  },
  {
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile apps using JavaScript and React Native.',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    level: 'Intermediate' as const,
    duration: '10 weeks',
    learningPath: 'Mobile Development',
    url: '/learning-paths/react-native',
    category: 'web',
  },
];

const testimonials = [
  {
    quote: "As someone who was completely new to coding, the structured roadmaps and friendly explanations made all the difference. I've now built my first website!",
    name: "Sarah L.",
    role: "Graphic Designer turned Frontend Developer",
  },
  {
    quote: "The problem-solving hub helped me overcome the barriers that kept me stuck for weeks. The community is incredibly supportive!",
    name: "Michael T.",
    role: "Computer Science Student",
  },
  {
    quote: "I tried many platforms but always felt lost. The learning paths here gave me a clear direction and I'm now confident in my coding skills.",
    name: "Jamie K.",
    role: "Self-taught Developer",
  },
];

const features = [
  {
    title: "Structured Learning Paths",
    description: "Follow step-by-step roadmaps designed for beginners in various tech domains",
    icon: <BookOpen className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-tech-blue" />,
    url: "/learning-paths",
  },
  {
    title: "Problem-Solving Hub",
    description: "Get solutions to common challenges faced by beginners in programming",
    icon: <HelpCircle className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-tech-purple" />,
    url: "/problem-solving",
  },
  {
    title: "Resource Library",
    description: "Access curated learning materials, tools, and cheat sheets",
    icon: <Library className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-tech-lightblue" />,
    url: "/resources",
  },
  {
    title: "Supportive Community",
    description: "Connect with fellow learners and participate in study groups",
    icon: <Users className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-tech-pink" />,
    url: "/community",
  },
];

const Index = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tech-blue to-tech-indigo text-white relative overflow-hidden hero-responsive min-h-screen flex items-center">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 sm:top-20 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-cyan-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 left-1/4 sm:bottom-10 sm:left-1/4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-blue-800 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/3 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-1/4 sm:bottom-20 sm:right-1/4 w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-indigo-300 rounded-full animate-bounce"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 right-1/3 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-yellow-400 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 bg-pink-400 rounded-full animate-rotate-slow"></div>
          <div className="absolute top-3/4 right-1/5 w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-8 lg:h-8 bg-green-400 rounded-full animate-bounce-slow"></div>
          
          {/* Particle effects */}
          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-white rounded-full animate-particle-1"></div>
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 md:w-1 md:h-1 lg:w-1.5 lg:h-1.5 bg-cyan-300 rounded-full animate-particle-2"></div>
          <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 md:w-0.5 md:h-0.5 lg:w-1 lg:h-1 bg-purple-300 rounded-full animate-particle-3"></div>
        </div>
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 text-center lg:text-left">
              <Badge className="bg-white/20 text-white mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm animate-fade-in-up badge-responsive text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
                For Beginners & Tech Students
              </Badge>
              <TypewriterText
                firstText="Start Your Tech Journey"
                secondText="with Confidence"
                speed={80}
                delay={800}
              />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 animate-fade-in-up delay-300 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Clear learning paths, problem-solving resources, and a supportive community to help you navigate the world of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 animate-fade-in-up delay-500 justify-center lg:justify-start">
                <Link to="/learning-paths" className="btn-responsive bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 inline-block text-center font-medium">
                  Start Learning
                </Link>
                <Link to="/community" className="btn-responsive bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg inline-block text-center font-medium">
                  Join Community
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0">
              <div className="relative animate-float max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
                {/* Multiple glowing ring effects */}
                <div className="absolute -top-1 -left-1 -right-1 -bottom-1 sm:-top-2 sm:-left-2 sm:-right-2 sm:-bottom-2 md:-top-4 md:-left-4 md:-right-4 md:-bottom-4 lg:-top-6 lg:-left-6 lg:-right-6 lg:-bottom-6 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-30 blur-lg rounded-xl animate-pulse"></div>
                <div className="absolute -top-2 -left-2 -right-2 -bottom-2 sm:-top-4 sm:-left-4 sm:-right-4 sm:-bottom-4 md:-top-6 md:-left-6 md:-right-6 md:-bottom-6 lg:-top-8 lg:-left-8 lg:-right-8 lg:-bottom-8 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl rounded-xl animate-pulse-slow"></div>
                
                {/* Enhanced sparkle effects around the image */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-2 md:-right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 lg:w-4 lg:h-4 bg-yellow-400 rounded-full animate-sparkle-1"></div>
                <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 md:-bottom-1 md:-left-1 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 lg:w-3 lg:h-3 bg-cyan-400 rounded-full animate-sparkle-2"></div>
                <div className="absolute top-1/2 -right-1 sm:-right-1.5 md:-right-2 lg:-right-4 w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 md:w-1 md:h-1 lg:w-2 lg:h-2 bg-pink-400 rounded-full animate-sparkle-3"></div>
                <div className="absolute top-1/4 -left-0.5 sm:-left-1 md:-left-2 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 lg:w-2.5 lg:h-2.5 bg-purple-400 rounded-full animate-sparkle-1"></div>
                <div className="absolute top-3/4 -right-1 sm:-right-2 md:-right-3 lg:-right-6 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-sparkle-2"></div>
                <div className="absolute bottom-1/4 -left-0.5 sm:-left-1 md:-left-2 lg:-left-4 w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 md:w-1 md:h-1 lg:w-2 lg:h-2 bg-orange-400 rounded-full animate-sparkle-3"></div>
                
                {/* Floating tech icons */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 lg:-top-8 lg:-right-8 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-slow">
                  <Code className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 lg:w-4 lg:h-4 text-white" />
                </div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-3 md:-left-3 lg:-bottom-6 lg:-left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-slow delay-1000">
                  <BookOpen className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 lg:w-3 lg:h-3 text-white" />
                </div>
                
                <div className="relative">
                  <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 md:-top-2 md:-left-2 lg:-top-3 lg:-left-3 xl:-top-4 xl:-left-4 2xl:-top-6 2xl:-left-6 bg-tech-purple w-full h-full rounded-xl"></div>
                  <img
                    src="./imgs/dev-img.jpg"
                    alt="Tech Learning Journey"
                    className="rounded-xl shadow-2xl relative z-10 w-full hover:scale-105 transition-transform duration-300 img-responsive"
                  />
                  
                  {/* Image overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-tech-blue rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-tech-purple rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-tech-lightblue rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <Badge variant="outline" className="mb-2 animate-fade-in-up badge-responsive">Our Mission</Badge>
            <h2 className="responsive-heading font-bold mb-4 gradient-text animate-fade-in-up delay-200">
              How We Help You Succeed
            </h2>
            <p className="responsive-text text-gray-600 animate-fade-in-up delay-400">
              We provide a structured approach to learning technology, focusing on real-world skills and problem-solving.
            </p>
          </div>

          <div className="card-grid-responsive">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover animate-fade-in-up hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl card-responsive" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 animate-pulse">{feature.icon}</div>
                  <CardTitle className="hover:text-tech-blue transition-colors duration-300 responsive-subheading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="responsive-text">{feature.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0">
                  <Link to={feature.url} className="text-tech-blue hover:text-tech-purple flex items-center group">
                    Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-gradient-to-r from-tech-purple to-tech-pink rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-gradient-to-r from-tech-lightblue to-tech-blue rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 sm:mb-8 lg:mb-12 gap-4 lg:gap-8">
            <div className="animate-fade-in-up text-center lg:text-left flex-1">
              <Badge className="mb-2 animate-pulse badge-responsive">Learning Paths</Badge>
              <h2 className="responsive-heading font-bold gradient-text animate-fade-in-up delay-200">
                Start Your Learning Journey
              </h2>
              <p className="responsive-text text-gray-600 mt-2 animate-fade-in-up delay-400">
                Structured roadmaps designed for beginners in various tech domains
              </p>
            </div>
            <Link to="/learning-paths" className="mt-4 lg:mt-0 animate-fade-in-up delay-600">
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white hover:scale-105 transition-transform duration-300 shadow-lg btn-responsive">
                View All Paths <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          <div className="card-grid-responsive">
            {featuredPaths.map((path, index) => (
              <div key={index} className="animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 300}ms` }}>
                <LearningCard
                  title={path.title}
                  description={path.description}
                  imageSrc={path.imageSrc}
                  level={path.level}
                  duration={path.duration}
                  learningPath={path.learningPath}
                  url={path.url}
                  category={path.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge variant="outline" className="mb-2">Success Stories</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">
              From Beginners to Achievers
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Hear from students who started their tech journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="mb-4 text-3xl sm:text-4xl text-tech-purple">"</div>
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */
      
      }

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-tech-blue to-tech-lightblue text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 bg-cyan-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 sm:w-6 sm:h-6 md:w-12 md:h-12 bg-purple-300 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="responsive-heading font-bold mb-4 sm:mb-6 animate-fade-in-up">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="responsive-text text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up delay-300">
            Join thousands of beginners who are learning technology the right way.
          </p>
          <div className="btn-group-responsive animate-fade-in-up delay-500 justify-center">
            <Button className="btn-responsive bg-white text-tech-indigo hover:bg-blue-50 hover:scale-105 transition-transform duration-300 shadow-lg">
              <Link to="/learning-paths">Explore Learning Paths</Link>
            </Button>
            <Button variant="outline" className="btn-responsive border-white text-white hover:bg-white/20 hover:border-white hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              <Link to="/problem-solving">Visit Problem-Solving Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-8 sm:py-12 md:py-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-tech-blue rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-tech-purple rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="responsive-heading font-bold mb-4 text-gray-800 dark:text-white animate-fade-in-up">
            Our Team
          </h2>
          <p className="responsive-text text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6 animate-fade-in-up delay-300">
            We are a dedicated and innovative team, passionate about delivering high-quality results. Our commitment to excellence drives us to create impactful solutions and exceed expectations for every project.
          </p>
          <Button
            asChild
            className="btn-responsive bg-tech-blue text-white hover:bg-tech-indigo transition-colors font-semibold shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-500"
          >
            <Link to="/about#top">Meet My Team</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-2">Stay Updated</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get weekly tips, resources, and updates to support your tech learning journey
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-tech-blue"
              />
              <Button size={isMobile ? "responsive" : "default"} className="bg-tech-blue text-white hover:bg-tech-blue/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes sparkle-1 {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
          
          @keyframes sparkle-2 {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.3);
            }
          }
          
          @keyframes sparkle-3 {
            0%, 100% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }
          
          @keyframes typewriter {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
          
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounce-x {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(3px);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-sparkle-1 {
            animation: sparkle-1 2s infinite ease-in-out;
          }
          
          .animate-sparkle-2 {
            animation: sparkle-2 2.5s infinite ease-in-out;
          }
          
          .animate-sparkle-3 {
            animation: sparkle-3 3s infinite ease-in-out;
          }
          
          .animate-typewriter {
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid;
            animation: typewriter 2s steps(20) 1s both;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .animate-bounce-x {
            animation: bounce-x 1s infinite ease-in-out;
          }
          
          .delay-200 {
            animation-delay: 0.2s;
          }
          
          .delay-300 {
            animation-delay: 0.3s;
          }
          
          .delay-400 {
            animation-delay: 0.4s;
          }
          
          .delay-500 {
            animation-delay: 0.5s;
          }
          
          .delay-600 {
            animation-delay: 0.6s;
          }
          
          .delay-1000 {
            animation-delay: 1s;
          }
          
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
          
          @keyframes rotate-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.1);
            }
          }
          
          @keyframes particle-1 {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(100px, -100px) scale(0);
              opacity: 0;
            }
          }
          
          @keyframes particle-2 {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-80px, -120px) scale(0);
              opacity: 0;
            }
          }
          
          @keyframes particle-3 {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(60px, -80px) scale(0);
              opacity: 0;
            }
          }
          
          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
          }
          
          .animate-rotate-slow {
            animation: rotate-slow 8s linear infinite;
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          
          .animate-particle-1 {
            animation: particle-1 4s ease-out infinite;
          }
          
          .animate-particle-2 {
            animation: particle-2 5s ease-out infinite;
            animation-delay: 1s;
          }
          
          .animate-particle-3 {
            animation: particle-3 6s ease-out infinite;
            animation-delay: 2s;
          }
        `
      }} />
    </div>
  );
};

export default Index;

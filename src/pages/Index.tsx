import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, HelpCircle, Library, Users } from 'lucide-react';
import LearningCard from '@/components/LearningCard';
import { useIsMobile } from '@/hooks/use-mobile';

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
    description: "Connect with fellow learners, mentors, and participate in study groups",
    icon: <Users className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-tech-pink" />,
    url: "/community",
  },
];

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tech-blue to-tech-indigo text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-800 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-indigo-300 rounded-full animate-bounce"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-yellow-400 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/3 left-1/5 w-10 h-10 bg-pink-400 rounded-full animate-rotate-slow"></div>
          <div className="absolute top-3/4 right-1/5 w-8 h-8 bg-green-400 rounded-full animate-bounce-slow"></div>
          
          {/* Particle effects */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-particle-1"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-particle-2"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-particle-3"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm animate-fade-in-up">For Beginners & Tech Students</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6x2 font-bold mb-4 sm:mb-6 animate-typewriter">
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Start Your Tech Journey <br/>
                  with Confidence
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 animate-fade-in-up delay-300">
                Clear learning paths, problem-solving resources, and a supportive community to help you navigate the world of technology.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up delay-500">
             <div className="flex justify-center gap-4 mt-6 animate-fade-in-up delay-500">
            <Link to="/learning-paths" className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 inline-block">
            Start Learning
            </Link>
            <Link to="/community" className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg inline-block">
            Join Community
            </Link>
          </div>
              </div>
            </div>
                          <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative animate-float">
                  {/* Multiple glowing ring effects */}
                  <div className="absolute -top-6 -left-6 -right-6 -bottom-6 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-30 blur-lg rounded-xl animate-pulse"></div>
                  <div className="absolute -top-8 -left-8 -right-8 -bottom-8 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl rounded-xl animate-pulse-slow"></div>
                  
                  {/* Enhanced sparkle effects around the image */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-sparkle-1"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full animate-sparkle-2"></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-sparkle-3"></div>
                  <div className="absolute top-1/4 -left-2 w-2.5 h-2.5 bg-purple-400 rounded-full animate-sparkle-1"></div>
                  <div className="absolute top-3/4 -right-6 w-3 h-3 bg-green-400 rounded-full animate-sparkle-2"></div>
                  <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-orange-400 rounded-full animate-sparkle-3"></div>
                  
                  {/* Floating tech icons */}
                  <div className="absolute -top-8 -right-8 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-slow">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-5 h-5 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float-slow delay-1000">
                    <BookOpen className="w-3 h-3 text-white" />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -top-3 sm:-top-4 md:-top-6 -left-3 sm:-left-4 md:-left-6 bg-tech-purple w-full h-full rounded-xl"></div>
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                      alt="Tech Learning Journey"
                      className="rounded-xl shadow-2xl relative z-10 w-full hover:scale-105 transition-transform duration-300"
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-16 h-16 bg-tech-blue rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-tech-purple rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-tech-lightblue rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <Badge variant="outline" className="mb-2 animate-fade-in-up">Our Mission</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in-up delay-200">
              How We Help You Succeed
            </h2>
            <p className="text-base sm:text-lg text-gray-600 animate-fade-in-up delay-400">
              We provide a structured approach to learning technology, focusing on real-world skills and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover animate-fade-in-up hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <div className="mb-3 sm:mb-4 animate-pulse">{feature.icon}</div>
                  <CardTitle className="hover:text-tech-blue transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
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
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-20 h-20 bg-gradient-to-r from-tech-purple to-tech-pink rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-tech-lightblue to-tech-blue rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12">
            <div className="animate-fade-in-up">
              <Badge className="mb-2 animate-pulse">Learning Paths</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text animate-fade-in-up delay-200">
                Start Your Learning Journey
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-2 animate-fade-in-up delay-400">
                Structured roadmaps designed for beginners in various tech domains
              </p>
            </div>
            <Link to="/learning-paths" className="mt-4 md:mt-0 animate-fade-in-up delay-600">
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white hover:scale-105 transition-transform duration-300 shadow-lg">
                View All Paths <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
      <section className="py-8 bg-gradient-to-r from-tech-blue to-tech-lightblue text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-300 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up delay-300">
            Join thousands of beginners who are learning technology the right way.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-fade-in-up delay-500">
            <Button size={isMobile ? "responsive" : "lg"} className="bg-white text-tech-indigo hover:bg-blue-50 hover:scale-105 transition-transform duration-300 shadow-lg">
              <Link to="/learning-paths">Explore Learning Paths</Link>
            </Button>
            <Button size={isMobile ? "responsive" : "lg"} variant="outline" className="border-white text-white hover:bg-white/20 hover:border-white hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
              <Link to="/problem-solving">Visit Problem-Solving Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-12 sm:py-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-16 h-16 bg-tech-blue rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-tech-purple rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white animate-fade-in-up">
            Our Team
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6 animate-fade-in-up delay-300">
            We are a dedicated and innovative team, passionate about delivering high-quality results. Our commitment to excellence drives us to create impactful solutions and exceed expectations for every project.
          </p>
          <Button
            asChild
            size={isMobile ? "responsive" : "lg"}
            className="bg-tech-blue text-white hover:bg-tech-indigo transition-colors font-semibold px-8 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-500"
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

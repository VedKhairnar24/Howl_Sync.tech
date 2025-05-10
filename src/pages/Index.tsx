
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
  },
  {
    title: 'Python Programming Essentials',
    description: 'Master Python fundamentals and solve real-world problems with code.',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    level: 'Beginner' as const,
    duration: '6 weeks',
    learningPath: 'Programming',
    url: '/learning-paths/python',
  },
  {
    title: 'Mobile App Development with React Native',
    description: 'Create cross-platform mobile apps using JavaScript and React Native.',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    level: 'Intermediate' as const,
    duration: '10 weeks',
    learningPath: 'Mobile Development',
    url: '/learning-paths/react-native',
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
      <section className="bg-gradient-to-br from-tech-blue to-tech-indigo text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">For Beginners & Tech Students</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Start Your Tech Journey with Confidence
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100">
                Clear learning paths, problem-solving resources, and a supportive community to help you navigate the world of technology.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button size={isMobile ? "responsive" : "lg"} className="bg-white text-tech-indigo hover:bg-blue-50">
                  <Link to="/learning-paths" className="flex items-center">
                    Start Learning <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button size={isMobile ? "responsive" : "lg"} variant="outline" className="border-white text-white hover:bg-white/20 hover:border-white">
                  <Link to="/community">Join Community</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -top-3 sm:-top-4 md:-top-6 -left-3 sm:-left-4 md:-left-6 bg-tech-purple w-full h-full rounded-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Tech Learning Journey"
                  className="rounded-xl shadow-2xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <Badge variant="outline" className="mb-2">Our Mission</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">
              How We Help You Succeed
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We provide a structured approach to learning technology, focusing on real-world skills and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="mb-3 sm:mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={feature.url} className="text-tech-blue hover:text-tech-purple flex items-center">
                    Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12">
            <div>
              <Badge className="mb-2">Learning Paths</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                Start Your Learning Journey
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-2">
                Structured roadmaps designed for beginners in various tech domains
              </p>
            </div>
            <Link to="/learning-paths" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                View All Paths <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPaths.map((path, index) => (
              <LearningCard
                key={index}
                title={path.title}
                description={path.description}
                imageSrc={path.imageSrc}
                level={path.level}
                duration={path.duration}
                learningPath={path.learningPath}
                url={path.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-tech-purple to-tech-indigo text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8">
            Join thousands of beginners who are learning technology the right way.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button size={isMobile ? "responsive" : "lg"} className="bg-white text-tech-indigo hover:bg-blue-50">
              <Link to="/learning-paths">Explore Learning Paths</Link>
            </Button>
            <Button size={isMobile ? "responsive" : "lg"} variant="outline" className="border-white text-white hover:bg-white/20 hover:border-white">
              <Link to="/problem-solving">Visit Problem-Solving Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16 md:py-20">
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
      </section>
    </div>
  );
};

export default Index;

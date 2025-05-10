
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';
import LearningCard from '@/components/LearningCard';

const learningPaths = [
  // Web Development
  {
    title: 'HTML & CSS Foundations',
    description: 'Learn the building blocks of web pages and style them beautifully.',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    level: 'Beginner' as const,
    duration: '4 weeks',
    learningPath: 'Web Development',
    category: 'web',
    url: '/learning-paths/html-css',
  },
  {
    title: 'JavaScript Essentials',
    description: 'Make your websites interactive with JavaScript programming.',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    level: 'Beginner' as const,
    duration: '6 weeks',
    learningPath: 'Web Development',
    category: 'web',
    url: '/learning-paths/javascript',
  },
  {
    title: 'React Frontend Development',
    description: 'Build modern web applications with React and related technologies.',
    imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    level: 'Intermediate' as const,
    duration: '8 weeks',
    learningPath: 'Web Development',
    category: 'web',
    url: '/learning-paths/react',
  },
  
  // Programming
  {
    title: 'Python Programming Fundamentals',
    description: 'Learn Python from scratch and build your first programs.',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    level: 'Beginner' as const,
    duration: '6 weeks',
    learningPath: 'Programming',
    category: 'programming',
    url: '/learning-paths/python-basics',
  },
  {
    title: 'Java for Beginners',
    description: 'Start your journey with Java, a versatile programming language.',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    level: 'Beginner' as const,
    duration: '8 weeks',
    learningPath: 'Programming',
    category: 'programming',
    url: '/learning-paths/java',
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Master the fundamentals of efficient programming and problem-solving.',
    imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    level: 'Intermediate' as const,
    duration: '10 weeks',
    learningPath: 'Programming',
    category: 'programming',
    url: '/learning-paths/dsa',
  },
  
  // Mobile Development
  {
    title: 'React Native Mobile Apps',
    description: 'Build cross-platform mobile applications using JavaScript.',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    level: 'Intermediate' as const,
    duration: '8 weeks',
    learningPath: 'Mobile Development',
    category: 'mobile',
    url: '/learning-paths/react-native',
  },
  {
    title: 'Flutter App Development',
    description: 'Create beautiful native apps for iOS and Android with Flutter.',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    level: 'Intermediate' as const,
    duration: '10 weeks',
    learningPath: 'Mobile Development',
    category: 'mobile',
    url: '/learning-paths/flutter',
  },
  
  // Data Science
  {
    title: 'Data Science Basics',
    description: 'Introduction to data analysis, visualization, and basic statistics.',
    imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    level: 'Beginner' as const,
    duration: '6 weeks',
    learningPath: 'Data Science',
    category: 'data',
    url: '/learning-paths/data-science-basics',
  },
  {
    title: 'Machine Learning Fundamentals',
    description: 'Learn the core concepts of machine learning and build simple models.',
    imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    level: 'Intermediate' as const,
    duration: '12 weeks',
    learningPath: 'Data Science',
    category: 'data',
    url: '/learning-paths/machine-learning',
  },
];

const LearningPaths = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('all');

  // Filter learning paths based on search, level, and category
  const filteredPaths = learningPaths.filter((path) => {
    // Search filter
    const matchesSearch =
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Level filter
    const matchesLevel = levelFilter ? path.level === levelFilter : true;

    // Category filter
    const matchesCategory = activeTab === 'all' ? true : path.category === activeTab;

    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-blue to-tech-indigo text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">Step-by-Step Guides</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Learning Paths</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 text-blue-100">
            Structured roadmaps to help you master different areas of technology, designed for beginners.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">Level:</span>
              <Button
                variant={levelFilter === null ? 'secondary' : 'outline'} 
                size="sm"
                onClick={() => setLevelFilter(null)}
              >
                All
              </Button>
              <Button
                variant={levelFilter === 'Beginner' ? 'secondary' : 'outline'} 
                size="sm"
                onClick={() => setLevelFilter('Beginner')}
              >
                Beginner
              </Button>
              <Button
                variant={levelFilter === 'Intermediate' ? 'secondary' : 'outline'} 
                size="sm"
                onClick={() => setLevelFilter('Intermediate')}
              >
                Intermediate
              </Button>
              <Button
                variant={levelFilter === 'Advanced' ? 'secondary' : 'outline'} 
                size="sm"
                onClick={() => setLevelFilter('Advanced')}
              >
                Advanced
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Paths</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              {filteredPaths.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPaths.map((path, index) => (
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-500">No learning paths found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setLevelFilter(null);
                      setActiveTab('all');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Content for other tabs is handled by the filter logic */}
            <TabsContent value="web" className="mt-0"></TabsContent>
            <TabsContent value="programming" className="mt-0"></TabsContent>
            <TabsContent value="mobile" className="mt-0"></TabsContent>
            <TabsContent value="data" className="mt-0"></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Path Progression */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-2">Your Learning Journey</Badge>
            <h2 className="text-3xl font-bold mb-4 gradient-text">How Our Learning Paths Work</h2>
            <p className="text-lg text-gray-600">
              Our structured approach guides you from basics to mastery with clear milestones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 text-tech-blue flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Start with Fundamentals</h3>
                <p className="text-gray-600">
                  Begin with core concepts and build a strong foundation with beginner-friendly resources
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 text-tech-purple flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Practice with Projects</h3>
                <p className="text-gray-600">
                  Apply your knowledge by working on guided projects designed to reinforce your learning
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Advance to Mastery</h3>
                <p className="text-gray-600">
                  Move to advanced topics and specialize in your area of interest with confidence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Can't find what you're looking for?</h3>
                <p className="text-blue-100">
                  Request a custom learning path or get personalized guidance from our mentors.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-white text-tech-indigo hover:bg-blue-50">
                  Request Path
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Mentor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPaths;

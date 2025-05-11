
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Search, Filter, BookOpen, Code, Database, Layers, PenTool, Terminal } from 'lucide-react';
import { LearningPathCategory, learningPathsData } from '@/data/learningPathsData';
import { Link } from 'react-router-dom';

// Define the domain categories we want to display
const domainCategories: { id: LearningPathCategory; title: string; icon: React.ReactNode; description: string; color: string }[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Build dynamic, responsive websites and web applications',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-blue-500'
  },
  {
    id: 'programming',
    title: 'Programming',
    description: 'Learn to write efficient, scalable code and solve computational problems',
    icon: <Terminal className="h-6 w-6" />,
    color: 'bg-green-500'
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Design intuitive, user-centered interfaces and experiences',
    icon: <PenTool className="h-6 w-6" />,
    color: 'bg-purple-500'
  },
  {
    id: 'data',
    title: 'Data Science',
    description: 'Analyze data to derive insights and build predictive models',
    icon: <Database className="h-6 w-6" />,
    color: 'bg-yellow-500'
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Automate and manage infrastructure for scalable applications',
    icon: <Layers className="h-6 w-6" />,
    color: 'bg-red-500'
  }
];

// Helper component to display a learning path level
interface PathLevelProps {
  level: 'beginner' | 'intermediate' | 'advanced';
  levelData: any;
  domainColor: string;
}

const PathLevel = ({ level, levelData, domainColor }: PathLevelProps) => {
  const levelTitle = level.charAt(0).toUpperCase() + level.slice(1);
  const badgeClass = level === 'beginner' 
    ? 'bg-green-100 text-green-800' 
    : level === 'intermediate' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-purple-100 text-purple-800';
  
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <Badge className={badgeClass}>{levelTitle}</Badge>
        {level === 'beginner' && <span className="text-xs text-gray-500 ml-2">(0-3 Months)</span>}
        {level === 'intermediate' && <span className="text-xs text-gray-500 ml-2">(3-9 Months)</span>}
        {level === 'advanced' && <span className="text-xs text-gray-500 ml-2">(9+ Months)</span>}
      </div>
      
      <div className="pl-1 border-l-2" style={{borderColor: domainColor}}>
        {/* Core concepts */}
        <div className="mb-2">
          <span className="text-sm font-medium">Core concepts:</span>
          <span className="text-sm text-gray-600 ml-1">
            {levelData.concepts.join(', ')}
          </span>
        </div>
        
        {/* Projects */}
        <div className="mb-2">
          <span className="text-sm font-medium">Projects:</span>
          <span className="text-sm text-gray-600 ml-1">
            {levelData.projects.join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
};

// Domain Card Component
interface DomainCardProps {
  category: LearningPathCategory;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

const DomainCard = ({ category, title, description, icon, color, onClick }: DomainCardProps) => {
  const pathData = learningPathsData[category];
  if (!pathData) return null;
  
  return (
    <Card className="h-full">
      <CardHeader>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white ${color}`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <PathLevel level="beginner" levelData={pathData.beginner} domainColor={color} />
        <PathLevel level="intermediate" levelData={pathData.intermediate} domainColor={color} />
        <PathLevel level="advanced" levelData={pathData.advanced} domainColor={color} />
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onClick}>
          View Complete Path
        </Button>
      </CardFooter>
    </Card>
  );
};

const LearningPaths = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<LearningPathCategory | 'all'>('all');
  const [selectedPath, setSelectedPath] = useState<LearningPathCategory | null>(null);

  // Filter domains based on search and tab
  const filteredDomains = domainCategories.filter((domain) => {
    const matchesSearch = 
      domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTab = activeTab === 'all' ? true : domain.id === activeTab;
    
    return matchesSearch && matchesTab;
  });

  const handlePathSelect = (category: LearningPathCategory) => {
    setSelectedPath(category);
    // You could redirect to a detailed path page or open a modal here
    // For now, we'll just set the selected path state
  };

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
          <div className="relative w-full md:w-96 mx-auto">
            <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search learning paths..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Learning Paths Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as LearningPathCategory | 'all')}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Paths</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="design">UI/UX Design</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              {filteredDomains.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredDomains.map((domain) => (
                    <DomainCard
                      key={domain.id}
                      category={domain.id}
                      title={domain.title}
                      description={domain.description}
                      icon={domain.icon}
                      color={domain.color}
                      onClick={() => handlePathSelect(domain.id)}
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
            <TabsContent value="design" className="mt-0"></TabsContent>
            <TabsContent value="data" className="mt-0"></TabsContent>
            <TabsContent value="devops" className="mt-0"></TabsContent>
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

import React, { useState, useRef, useEffect, memo, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Search, Filter, BookOpen, Code, Database, Layers, PenTool, Terminal, X, ShieldCheck, ArrowRight, Clock, Users, Star, TrendingUp, FileCode, Book, GraduationCap, Zap, Target, Lightbulb, Settings, GitBranch, Globe, Palette, Cpu, Shield, Gamepad2, Brain, Bitcoin, Phone } from 'lucide-react';
import { LearningPathCategory, learningPathsData } from '@/data/learningPathsData';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronDown } from 'lucide-react';

// Chart.js will be loaded via CDN in index.html

const domainCategories: { id: LearningPathCategory; title: string; icon: React.ReactNode; description: string; color: string; stats?: { rating: number; duration: string } }[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Learn to create modern, responsive, and dynamic websites from scratch using HTML, CSS, JavaScript, and popular frameworks. Gain skills in front-end, back-end, and full-stack development to build user-friendly and scalable web applications.',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-blue-500',
    stats: { rating: 4.8, duration: '6-12 months' }
  },
  {
    id: 'programming',
    title: 'Programming',
    description: 'Master the art of writing efficient, clean, and scalable code in multiple programming languages. Learn problem-solving techniques, algorithms, and data structures to tackle real-world challenges in software development.',
    icon: <Terminal className="h-6 w-6" />,
    color: 'bg-green-500',
    stats: { rating: 4.8, duration: '6-12 months' }
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Develop skills to design visually appealing, user-centered interfaces that provide a seamless experience. Learn wireframing, prototyping, design systems, and usability testing to create products users love.',
    icon: <PenTool className="h-6 w-6" />,
    color: 'bg-purple-500',
    stats: { rating: 4.7, duration: '4-8 months' }
  },
  {
    id: 'data',
    title: 'Data Science',
    description: 'Gain expertise in collecting, processing, and analyzing large datasets to extract valuable insights. Learn statistical analysis, data visualization, machine learning, and predictive modeling for data-driven decision-making.',
    icon: <Database className="h-6 w-6" />,
    color: 'bg-yellow-500',
    stats: { rating: 4.9, duration: '8-15 months' }
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Learn to integrate development and operations for faster, more reliable software delivery. Master tools for automation, CI/CD pipelines, cloud infrastructure, and monitoring to streamline the entire development lifecycle.',
    icon: <Layers className="h-6 w-6" />,
    color: 'bg-red-500',
    stats: { rating: 4.6, duration: '6-10 months' }
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Build high-performance, cross-platform mobile applications using frameworks like Flutter and React Native. Learn mobile UI design, API integration, and deployment for both Android and iOS platforms.',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-pink-500',
    stats: { rating: 4.8, duration: '5-9 months' }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Develop the skills to safeguard systems, networks, and data from cyber threats. Learn ethical hacking, encryption, risk assessment, and security best practices to protect against vulnerabilities and attacks.',
    icon: <ShieldCheck className="h-6 w-6" />,
    color: 'bg-gray-700',
    stats: { rating: 4.7, duration: '7-12 months' }
  },
  {
    id: 'game',
    title: 'Game Development',
    description: 'Learn to design and develop immersive, interactive games using popular engines like Unity and Unreal. Master gameplay mechanics, 3D modeling, physics, and storytelling to create engaging gaming experiences.',
    icon: <Layers className="h-6 w-6" />,
    color: 'bg-orange-500',
    stats: { rating: 4.5, duration: '8-14 months' }
  },
  {
    id: 'aiml',
    title: 'AI/ML Engineering',
    description: 'Master artificial intelligence and machine learning concepts to build intelligent systems. Learn to create algorithms, train models, and apply AI/ML techniques for tasks like prediction, automation, and decision-making.',
    icon: <Database className="h-6 w-6" />,
    color: 'bg-indigo-500',
    stats: { rating: 4.9, duration: '10-18 months' }
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Learn to develop decentralized applications (dApps) and smart contracts using blockchain technology. Understand blockchain architecture, cryptocurrencies, and secure transaction systems for innovative solutions.',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-emerald-600',
    stats: { rating: 4.4, duration: '6-12 months' }
  }
];

// Enhanced TypeCard Component
interface TypeCardProps {
  category: LearningPathCategory;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats?: { rating: number; duration: string };
  onClick: () => void;
  index: number;
}

const TypeCard = memo(({ category, title, description, icon, color, stats, onClick, index }: TypeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  const handleClick = () => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
      onClick();
    }, 300);
  };

  return (
    <Card 
      className="group relative overflow-hidden card-hover animate-fade-in-up hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:shadow-2xl backdrop-blur-sm flex flex-col h-full"
      style={{ animationDelay: `${index * 150}ms` }}
      role="article"
      aria-labelledby={`type-card-title-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-4 -right-4 w-8 h-8 ${color} rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-150`}></div>
        <div className={`absolute -bottom-4 -left-4 w-6 h-6 ${color} rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-150`}></div>
      </div>

      {/* Shimmer effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

      <CardHeader className="relative z-10 p-6 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden`}>
            <div className="group-hover:rotate-12 transition-transform duration-300 relative z-10">
              {icon}
            </div>
            {/* Icon background glow */}
            <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}></div>
          </div>
          {stats && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm text-gray-500 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-semibold">{stats.rating}</span>
              </div>
            </div>
          )}
        </div>
        
        <CardTitle 
          id={`type-card-title-${index}`}
          className="text-xl font-bold mb-2 group-hover:text-tech-blue transition-colors duration-300"
        >
          {title}
        </CardTitle>
        
        <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 p-6 pt-0 flex-shrink-0">
        {stats && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="font-medium">{stats.duration}</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="relative z-10 p-6 pt-0 mt-auto">
        <Button 
          className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-purple hover:to-tech-blue text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          onClick={handleClick}
          disabled={isLoading}
          aria-label={`View complete ${title} learning path`}
        >
          {/* Button background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {isLoading ? (
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Loading...</span>
            </div>
          ) : (
            <>
              <span className="relative z-10">Explore Path</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </>
          )}
        </Button>
      </CardFooter>

      {/* Hover effect overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
    </Card>
  );
});

TypeCard.displayName = 'TypeCard';

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
        <Badge className={`${badgeClass} badge-responsive`}>{levelTitle}</Badge>
        {level === 'beginner' && <span className="text-xs text-gray-500 ml-2">(0-3 Months)</span>}
        {level === 'intermediate' && <span className="text-xs text-gray-500 ml-2">(3-9 Months)</span>}
        {level === 'advanced' && <span className="text-xs text-gray-500 ml-2">(9+ Months)</span>}
      </div>
      <div className="pl-1 border-l-2" style={{ borderColor: domainColor }}>
        <div className="mb-2">
          <span className="text-sm font-medium">Core concepts:</span>
          <span className="text-sm text-gray-600 ml-1">
            {levelData.concepts.join(', ')}
          </span>
        </div>
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
  return (
    <Card className="h-full card-responsive hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 text-white ${color}`}>
          {icon}
        </div>
        <CardTitle className="responsive-subheading">{title}</CardTitle>
        <CardDescription className="responsive-text">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full btn-responsive" onClick={onClick}>
          View Complete Path
        </Button>
      </CardFooter>
    </Card>
  );
};

// Modal for Learning Path Details
const LearningPathModal = ({
  open,
  onClose,
  domainMeta,
  path
}: {
  open: boolean;
  onClose: () => void;
  path: any;
  domainMeta: any;
}) => {
  const [expandedLevel, setExpandedLevel] = useState<'beginner' | 'intermediate' | 'advanced' | null>('beginner');

  if (!open || !path || !domainMeta) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'border-green-500 bg-green-50';
      case 'intermediate':
        return 'border-blue-500 bg-blue-50';
      case 'advanced':
        return 'border-purple-500 bg-purple-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelTimeframe = (level: string) => {
    switch (level) {
      case 'beginner':
        return '0-3 Months';
      case 'intermediate':
        return '3-9 Months';
      case 'advanced':
        return '9+ Months';
      default:
        return '';
    }
  };

  const renderLevelContent = (level: 'beginner' | 'intermediate' | 'advanced') => {
    const levelData = path[level];
    if (!levelData) return null;

    const getLevelIcon = (level: string) => {
      switch (level) {
        case 'beginner':
          return <GraduationCap className="h-4 w-4" />;
        case 'intermediate':
          return <Zap className="h-4 w-4" />;
        case 'advanced':
          return <Target className="h-4 w-4" />;
        default:
          return <Lightbulb className="h-4 w-4" />;
      }
    };

    const getLevelIconColor = (level: string) => {
      switch (level) {
        case 'beginner':
          return 'text-green-500';
        case 'intermediate':
          return 'text-blue-500';
        case 'advanced':
          return 'text-purple-500';
        default:
          return 'text-gray-500';
      }
    };

    return (
      <div className={`border-l-2 ${getLevelColor(level)} pl-4 ml-4 relative`}>
        {/* Level indicator with icon */}
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-full bg-white shadow-sm mr-3 ${getLevelIconColor(level)}`}>
            {getLevelIcon(level)}
          </div>
          <div className="flex items-center">
            <Badge className={getLevelBadgeColor(level)}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Badge>
            <span className="text-xs text-gray-500 ml-2">({getLevelTimeframe(level)})</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Core Concepts */}
          {levelData.concepts && levelData.concepts.length > 0 && (
            <div className="bg-white rounded-lg p-3 shadow-sm border">
              <h4 className="text-sm font-medium flex items-center gap-2 text-gray-800 mb-2">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <Code className="h-4 w-4 text-blue-600" />
                </div>
                Core concepts:
              </h4>
              <p className="text-sm text-gray-600 ml-8">
                {Array.isArray(levelData.concepts) ? levelData.concepts.join(', ') : levelData.concepts}
              </p>
            </div>
          )}

          {/* Tools */}
          {levelData.tools && levelData.tools.length > 0 && (
            <div className="bg-white rounded-lg p-3 shadow-sm border">
              <h4 className="text-sm font-medium flex items-center gap-2 text-gray-800 mb-2">
                <div className="p-1.5 bg-green-100 rounded-lg">
                  <Settings className="h-4 w-4 text-green-600" />
                </div>
                Tools:
              </h4>
              <p className="text-sm text-gray-600 ml-8">
                {Array.isArray(levelData.tools) ? levelData.tools.join(', ') : levelData.tools}
              </p>
            </div>
          )}

          {/* Frameworks */}
          {levelData.frameworks && levelData.frameworks.length > 0 && (
            <div className="bg-white rounded-lg p-3 shadow-sm border">
              <h4 className="text-sm font-medium flex items-center gap-2 text-gray-800 mb-2">
                <div className="p-1.5 bg-purple-100 rounded-lg">
                  <Layers className="h-4 w-4 text-purple-600" />
                </div>
                Frameworks:
              </h4>
              <p className="text-sm text-gray-600 ml-8">
                {Array.isArray(levelData.frameworks) ? levelData.frameworks.join(', ') : levelData.frameworks}
              </p>
            </div>
          )}

          {/* Resources */}
          {levelData.resources && levelData.resources.length > 0 && (
            <div className="bg-white rounded-lg p-3 shadow-sm border">
              <h4 className="text-sm font-medium flex items-center gap-2 text-gray-800 mb-2">
                <div className="p-1.5 bg-yellow-100 rounded-lg">
                  <Book className="h-4 w-4 text-yellow-600" />
                </div>
                Resources:
              </h4>
              <div className="ml-8">
                {Array.isArray(levelData.resources) ? (
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    {levelData.resources.map((resource: any, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span>{typeof resource === 'string' ? resource : resource.name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600">{levelData.resources}</p>
                )}
              </div>
            </div>
          )}

          {/* Projects */}
          {levelData.projects && levelData.projects.length > 0 && (
            <div className="bg-white rounded-lg p-3 shadow-sm border">
              <h4 className="text-sm font-medium flex items-center gap-2 text-gray-800 mb-2">
                <div className="p-1.5 bg-orange-100 rounded-lg">
                  <FileCode className="h-4 w-4 text-orange-600" />
                </div>
                Projects:
              </h4>
              <p className="text-sm text-gray-600 ml-8">
                {Array.isArray(levelData.projects) ? levelData.projects.join(', ') : levelData.projects}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-tech-blue to-tech-purple rounded-xl text-white shadow-lg">
              {domainMeta?.id === 'web' && <Code className="h-6 w-6" />}
              {domainMeta?.id === 'programming' && <Terminal className="h-6 w-6" />}
              {domainMeta?.id === 'design' && <Palette className="h-6 w-6" />}
              {domainMeta?.id === 'data' && <Database className="h-6 w-6" />}
              {domainMeta?.id === 'devops' && <Settings className="h-6 w-6" />}
              {domainMeta?.id === 'mobile' && <Phone className="h-6 w-6" />}
              {domainMeta?.id === 'cybersecurity' && <Shield className="h-6 w-6" />}
              {domainMeta?.id === 'game' && <Gamepad2 className="h-6 w-6" />}
              {domainMeta?.id === 'aiml' && <Brain className="h-6 w-6" />}
              {domainMeta?.id === 'blockchain' && <Bitcoin className="h-6 w-6" />}
              {!['web', 'programming', 'design', 'data', 'devops', 'mobile', 'cybersecurity', 'game', 'aiml', 'blockchain'].includes(domainMeta?.id) && <BookOpen className="h-6 w-6" />}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold">{domainMeta?.title || path?.title}</DialogTitle>
              <DialogDescription className="text-base text-gray-600 mt-1">
                {domainMeta?.description || path?.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <div className="space-y-4">
            {/* Beginner Level */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-gradient-to-r from-green-50 to-emerald-50">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedLevel(expandedLevel === 'beginner' ? null : 'beginner')}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <GraduationCap className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <Badge className={getLevelBadgeColor('beginner')}>
                      Beginner
                    </Badge>
                    <span className="text-xs text-gray-500 ml-2">({getLevelTimeframe('beginner')})</span>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedLevel === 'beginner' ? 'rotate-180' : ''}`} />
              </div>
              {expandedLevel === 'beginner' && (
                <div className="mt-4 pt-4 border-t border-green-200">
                  {renderLevelContent('beginner')}
                </div>
              )}
            </div>

            {/* Intermediate Level */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-gradient-to-r from-blue-50 to-cyan-50">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedLevel(expandedLevel === 'intermediate' ? null : 'intermediate')}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <Badge className={getLevelBadgeColor('intermediate')}>
                      Intermediate
                    </Badge>
                    <span className="text-xs text-gray-500 ml-2">({getLevelTimeframe('intermediate')})</span>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedLevel === 'intermediate' ? 'rotate-180' : ''}`} />
              </div>
              {expandedLevel === 'intermediate' && (
                <div className="mt-4 pt-4 border-t border-blue-200">
                  {renderLevelContent('intermediate')}
                </div>
              )}
            </div>

            {/* Advanced Level */}
            <div className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-gradient-to-r from-purple-50 to-pink-50">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedLevel(expandedLevel === 'advanced' ? null : 'advanced')}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Target className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <Badge className={getLevelBadgeColor('advanced')}>
                      Advanced
                    </Badge>
                    <span className="text-xs text-gray-500 ml-2">({getLevelTimeframe('advanced')})</span>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedLevel === 'advanced' ? 'rotate-180' : ''}`} />
              </div>
              {expandedLevel === 'advanced' && (
                <div className="mt-4 pt-4 border-t border-purple-200">
                  {renderLevelContent('advanced')}
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const LearningPaths = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<LearningPathCategory | 'all'>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPath, setModalPath] = useState<any>(null);
  const [modalDomain, setModalDomain] = useState<any>(null);

  // Memoize filtered domains for better performance
  const filteredDomains = useMemo(() => {
    return domainCategories.filter((domain) => {
      const matchesSearch =
        domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        domain.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab = activeTab === 'all' ? true : domain.id === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  // When a card is clicked, open modal with detailed info
  const handlePathSelect = (category: LearningPathCategory) => {
    // Pass all levels' data for the modal
    const pathData = learningPathsData[category];
    setModalPath(pathData);
    setModalDomain(domainCategories.find((d) => d.id === category));
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-blue to-tech-indigo text-white py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 sm:top-20 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-cyan-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 left-1/4 sm:bottom-10 sm:left-1/4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-blue-800 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-white/20 text-white mb-4 badge-responsive animate-fade-in-up">Step-by-Step Guides</Badge>
          <h1 className="responsive-heading font-bold mb-4 animate-fade-in-up delay-200">Learning Paths</h1>
          <p className="responsive-text max-w-2xl mx-auto mb-6 text-blue-100 animate-fade-in-up delay-400">
            Structured roadmaps to help you master different areas of technology, designed for beginners.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 sm:py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="relative w-full sm:w-80 md:w-96 mx-auto">
            <Search className="absolute top-3 left-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            <Input
              placeholder="Search learning paths..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 input-responsive bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-tech-blue focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Learning Paths Tabs */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value as LearningPathCategory | 'all')}>
            <TabsContent value="all" className="mt-0">
              {filteredDomains.length > 0 ? (
                <div className="card-grid-responsive">
                  {filteredDomains.map((domain, index) => (
                    <TypeCard
                      key={domain.id}
                      category={domain.id}
                      title={domain.title}
                      description={domain.description}
                      icon={domain.icon}
                      color={domain.color}
                      stats={domain.stats}
                      onClick={() => handlePathSelect(domain.id)}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No learning paths found</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      className="btn-responsive"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveTab('all');
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Path Progression */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <Badge className="mb-2 badge-responsive">Your Learning Journey</Badge>
            <h2 className="responsive-heading font-bold mb-4 gradient-text">
              How Our Learning Paths Work
            </h2>
            <p className="responsive-text text-gray-600">
              Our structured approach guides you from basics to mastery with clear milestones
            </p>
          </div>

          <div className="card-grid-responsive">
            <Card className="card-responsive">
              <CardContent className="pt-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 text-tech-blue flex items-center justify-center text-lg sm:text-xl font-bold mb-4">1</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Start with Fundamentals</h3>
                <p className="text-gray-600 responsive-text">
                  Begin with core concepts and build a strong foundation with beginner-friendly resources
                </p>
              </CardContent>
            </Card>

            <Card className="card-responsive">
              <CardContent className="pt-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-purple-100 text-tech-purple flex items-center justify-center text-lg sm:text-xl font-bold mb-4">2</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Practice with Projects</h3>
                <p className="text-gray-600 responsive-text">
                  Apply your knowledge by working on guided projects designed to reinforce your learning
                </p>
              </CardContent>
            </Card>

            <Card className="card-responsive">
              <CardContent className="pt-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg sm:text-xl font-bold mb-4">3</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Advance to Mastery</h3>
                <p className="text-gray-600 responsive-text">
                  Move to advanced topics and specialize in your area of interest with confidence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-xl p-6 sm:p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 lg:pr-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Can't find what you're looking for?</h3>
                <p className="text-blue-100 responsive-text">
                  Request a custom learning path or get personalized guidance from our team.
                </p>
              </div>
              <div className="btn-group-responsive">
                <a href="/about#contact" className="flex items-center gap-2">
                  <Button className="bg-white text-tech-indigo hover:bg-blue-50 btn-responsive">
                    Request Path
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <LearningPathModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        path={modalPath}
        domainMeta={modalDomain}
      />
    </div>
  );
};

export default LearningPaths;

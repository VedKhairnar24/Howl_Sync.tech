import React, { useState, useRef, useEffect, memo, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Search, Filter, BookOpen, Code, Database, Layers, PenTool, Terminal, X, ShieldCheck, ArrowRight, Clock, Users, Star, TrendingUp } from 'lucide-react';
import { LearningPathCategory, learningPathsData } from '@/data/learningPathsData';
import { Link } from 'react-router-dom';

// Chart.js will be loaded via CDN in index.html

const domainCategories: { id: LearningPathCategory; title: string; icon: React.ReactNode; description: string; color: string; stats?: { students: number; rating: number; duration: string } }[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Build dynamic, responsive websites and web applications',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-blue-500',
    stats: { students: 15420, rating: 4.8, duration: '6-12 months' }
  },
  // {
  //   id: 'programming',
  //   title: 'Programming',
  //   description: 'Learn to write efficient, scalable code and solve computational problems',
  //   icon: <Terminal className="h-6 w-6" />,
  //   color: 'bg-green-500'
  // },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Design intuitive, user-centered interfaces and experiences',
    icon: <PenTool className="h-6 w-6" />,
    color: 'bg-purple-500',
    stats: { students: 8920, rating: 4.7, duration: '4-8 months' }
  },
  {
    id: 'data',
    title: 'Data Science',
    description: 'Analyze data to derive insights and build predictive models',
    icon: <Database className="h-6 w-6" />,
    color: 'bg-yellow-500',
    stats: { students: 12340, rating: 4.9, duration: '8-15 months' }
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Automate and manage infrastructure for scalable applications',
    icon: <Layers className="h-6 w-6" />,
    color: 'bg-red-500',
    stats: { students: 6780, rating: 4.6, duration: '6-10 months' }
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Build cross-platform mobile apps with Flutter or React Native',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-pink-500',
    stats: { students: 9450, rating: 4.8, duration: '5-9 months' }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems and data through security best practices',
    icon: <ShieldCheck className="h-6 w-6" />,
    color: 'bg-gray-700',
    stats: { students: 5670, rating: 4.7, duration: '7-12 months' }
  },
  {
    id: 'game',
    title: 'Game Development',
    description: 'Create interactive games using Unity, Unreal, and more',
    icon: <Layers className="h-6 w-6" />,
    color: 'bg-orange-500',
    stats: { students: 7890, rating: 4.5, duration: '8-14 months' }
  },
  {
    id: 'aiml',
    title: 'AI/ML Engineering',
    description: 'Build intelligent systems and machine learning models',
    icon: <Database className="h-6 w-6" />,
    color: 'bg-indigo-500',
    stats: { students: 11230, rating: 4.9, duration: '10-18 months' }
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Develop decentralized apps and smart contracts',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-emerald-600',
    stats: { students: 4560, rating: 4.4, duration: '6-12 months' }
  }
];

// Enhanced TypeCard Component
interface TypeCardProps {
  category: LearningPathCategory;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats?: { students: number; rating: number; duration: string };
  onClick: () => void;
  index: number;
}

const TypeCard = memo(({ category, title, description, icon, color, stats, onClick, index }: TypeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

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
      className="group relative overflow-hidden card-hover animate-fade-in-up hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:shadow-2xl backdrop-blur-sm"
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

      <CardHeader className="relative z-10 p-6">
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

      <CardContent className="relative z-10 p-6 pt-0">
        {stats && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <Users className="h-4 w-4 text-blue-500" />
              <span className="font-medium">{formatNumber(stats.students)} students</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              <Clock className="h-4 w-4 text-green-500" />
              <span className="font-medium">{stats.duration}</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-500">Popular path</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative z-10 p-6 pt-0">
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
  if (!open || !path) return null;

  const domainDetails: Record<string, React.ReactNode> = {
    web: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), DOM manipulation, basic Git.</li>
          <li><b>Tools:</b> VS Code, Chrome DevTools, GitHub, npm.</li>
          <li><b>Projects:</b> Personal portfolio, static landing page, simple to-do list.</li>
          <li><b>Resources:</b> freeCodeCamp, MDN Web Docs, The Odin Project, W3Schools.</li>
          <li><b>Learning Goals:</b> Understand web structure, styling, and basic interactivity.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> React or Vue.js, TypeScript, REST APIs, Node.js, Express, SQL (PostgreSQL), MongoDB, basic testing (Jest).</li>
          <li><b>Tools:</b> Postman, Webpack, Vercel, MongoDB Compass.</li>
          <li><b>Projects:</b> Blog with user authentication, e-commerce site with API integration, real-time chat app.</li>
          <li><b>Resources:</b> Full Stack Open, Scrimba, Udemy (MERN Stack), Frontend Masters.</li>
          <li><b>Learning Goals:</b> Build dynamic, database-driven applications.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> GraphQL, microservices, serverless architecture, CI/CD, cloud platforms (AWS, Azure), performance optimization.</li>
          <li><b>Tools:</b> Docker, Kubernetes, Next.js, Firebase, Jenkins.</li>
          <li><b>Projects:</b> Scalable SaaS platform, multi-user collaborative app, full-stack app with payment integration (Stripe).</li>
          <li><b>Resources:</b> Advanced React (Wes Bos), AWS Certified Developer, Pluralsight.</li>
          <li><b>Learning Goals:</b> Deploy production-ready, scalable applications.</li>
        </ul>
      </div>
    ),
    design: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Design principles (color, typography, hierarchy), user research, wireframing, prototyping basics.</li>
          <li><b>Tools:</b> Figma, Adobe XD, Balsamiq, Canva.</li>
          <li><b>Projects:</b> Wireframe for a mobile app, landing page mockup, user persona creation.</li>
          <li><b>Resources:</b> Google UX Design Certificate (Coursera), Interaction Design Foundation, YouTube (DesignCourse).</li>
          <li><b>Learning Goals:</b> Understand user-centered design and basic prototyping.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Usability testing, interaction design, basic HTML/CSS, design systems, A/B testing.</li>
          <li><b>Tools:</b> Sketch, InVision, Zeplin, FigJam.</li>
          <li><b>Projects:</b> Interactive app prototype, website redesign with user testing, design system for a brand.</li>
          <li><b>Resources:</b> UX Design Institute, Nielsen Norman Group, Udemy (UI/UX Bootcamp).</li>
          <li><b>Learning Goals:</b> Create functional, user-tested designs and collaborate with developers.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Accessibility (WCAG), advanced user psychology, motion design, cross-platform design, design ops.</li>
          <li><b>Tools:</b> Axure RP, Framer, Adobe After Effects, advanced Figma plugins.</li>
          <li><b>Projects:</b> End-to-end UX case study, accessible enterprise app, animated UI components.</li>
          <li><b>Resources:</b> Coursera (Advanced UX), Smashing Magazine, Awwwards.</li>
          <li><b>Learning Goals:</b> Lead design projects and optimize for inclusivity and scalability.</li>
        </ul>
      </div>
    ),
    graphic: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Color theory, typography, composition, raster/vector graphics, branding basics.</li>
          <li><b>Tools:</b> Adobe Photoshop, Illustrator, Canva, Procreate.</li>
          <li><b>Projects:</b> Logo, business card, social media graphics, simple poster.</li>
          <li><b>Resources:</b> Canva Design School, Coursera (Graphic Design Specialization), Skillshare.</li>
          <li><b>Learning Goals:</b> Create visually appealing static designs.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Advanced branding, illustration, basic motion graphics, print design.</li>
          <li><b>Tools:</b> Adobe InDesign, After Effects, Affinity Designer.</li>
          <li><b>Projects:</b> Brand style guide, animated ad, magazine layout.</li>
          <li><b>Resources:</b> Domestika, Udemy (Graphic Design Masterclass), Behance.</li>
          <li><b>Learning Goals:</b> Develop cohesive brand identities and dynamic visuals.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> 3D design, advanced motion graphics, UI asset creation, packaging design.</li>
          <li><b>Tools:</b> Blender, Cinema 4D, Adobe Premiere, Dimension.</li>
          <li><b>Projects:</b> 3D product mockup, animated marketing campaign, interactive infographic.</li>
          <li><b>Resources:</b> Lynda (Advanced Graphic Design), Dribbble, ArtStation.</li>
          <li><b>Learning Goals:</b> Produce professional, multi-format visual content.</li>
        </ul>
      </div>
    ),
    devops: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Linux (bash, shell scripting), Git, networking basics (TCP/IP, DNS), cloud intro (AWS Free Tier).</li>
          <li><b>Tools:</b> GitHub, VirtualBox, AWS CLI, DigitalOcean.</li>
          <li><b>Projects:</b> Deploy a static site, set up a Git workflow, basic server setup.</li>
          <li><b>Resources:</b> Learn Linux TV, Codecademy (Command Line), AWS Training.</li>
          <li><b>Learning Goals:</b> Understand system administration and version control.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Docker, Kubernetes, CI/CD pipelines, basic scripting (Python/Bash), cloud services (EC2, S3).</li>
          <li><b>Tools:</b> Jenkins, Terraform, Prometheus, Ansible.</li>
          <li><b>Projects:</b> Containerized web app, automated CI/CD pipeline, monitoring dashboard.</li>
          <li><b>Resources:</b> Udemy (Docker & Kubernetes), A Cloud Guru, Linux Academy.</li>
          <li><b>Learning Goals:</b> Automate deployments and manage containerized environments.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Infrastructure as Code (IaC), advanced Kubernetes, monitoring/alerting, security best practices.</li>
          <li><b>Tools:</b> Helm, Grafana, Vault, AWS CDK, GitLab CI.</li>
          <li><b>Projects:</b> Scalable microservices architecture, zero-downtime deployment, automated disaster recovery.</li>
          <li><b>Resources:</b> Pluralsight (Advanced DevOps), Kubernetes.io, AWS Certified DevOps Engineer.</li>
          <li><b>Learning Goals:</b> Optimize and secure large-scale infrastructure.</li>
        </ul>
      </div>
    ),
    data: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Python (NumPy, Pandas), basic statistics (mean, median, probability), data visualization, Excel.</li>
          <li><b>Tools:</b> Jupyter Notebook, Matplotlib, Seaborn, Google Sheets.</li>
          <li><b>Projects:</b> Analyze a Kaggle dataset (e.g., Titanic), create bar/pie charts.</li>
          <li><b>Resources:</b> Kaggle Learn, DataCamp, Coursera (Data Science Fundamentals).</li>
          <li><b>Learning Goals:</b> Clean, analyze, and visualize data.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Machine learning (scikit-learn), SQL, intermediate statistics, data preprocessing, feature engineering.</li>
          <li><b>Tools:</b> Tableau, PostgreSQL, Google Colab, Power BI.</li>
          <li><b>Projects:</b> Predictive model (e.g., customer churn), interactive dashboard.</li>
          <li><b>Resources:</b> Fast.ai, Coursera (Machine Learning by Stanford), Kaggle Competitions.</li>
          <li><b>Learning Goals:</b> Build and evaluate ML models.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Deep learning (TensorFlow, PyTorch), big data (Hadoop, Spark), MLOps, time-series analysis.</li>
          <li><b>Tools:</b> AWS SageMaker, Airflow, FastAPI, Dask.</li>
          <li><b>Projects:</b> Deployed neural network model, real-time data pipeline, A/B testing framework.</li>
          <li><b>Resources:</b> DeepLearning.AI, Udemy (MLOps), Kaggle (Advanced Notebooks).</li>
          <li><b>Learning Goals:</b> Deploy scalable, production-ready data solutions.</li>
        </ul>
      </div>
    ),
    mobile: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Dart (Flutter) or JavaScript (React Native), basic UI design, mobile app lifecycle.</li>
          <li><b>Tools:</b> Flutter SDK, Android Studio, Xcode, VS Code.</li>
          <li><b>Projects:</b> To-do app, weather app, simple calculator.</li>
          <li><b>Resources:</b> Flutter.dev, Udemy (Flutter & Dart), Codecademy.</li>
          <li><b>Learning Goals:</b> Build cross-platform mobile apps.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> State management (Provider, Redux), REST APIs, native modules (Swift/Kotlin).</li>
          <li><b>Tools:</b> Firebase, Postman, React Native CLI.</li>
          <li><b>Projects:</b> E-commerce app, social media feed, location-based app.</li>
          <li><b>Resources:</b> React Native Docs, Udemy (React Native Advanced), Flutter Awesome.</li>
          <li><b>Learning Goals:</b> Integrate APIs and manage app state.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Performance optimization, CI/CD for mobile, AR/VR integration, native development (Swift, Kotlin).</li>
          <li><b>Tools:</b> Fastlane, Bitrise, ARKit, Jetpack Compose.</li>
          <li><b>Projects:</b> Scalable app with push notifications, AR-based shopping app.</li>
          <li><b>Resources:</b> Ray Wenderlich, WWDC (Apple), Android Developer Docs.</li>
          <li><b>Learning Goals:</b> Build and deploy production-grade mobile apps.</li>
        </ul>
      </div>
    ),
    cybersecurity: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Networking (TCP/IP, DNS), Linux basics, ethical hacking, basic cryptography.</li>
          <li><b>Tools:</b> Wireshark, VirtualBox, Kali Linux, Nmap.</li>
          <li><b>Projects:</b> Set up a home lab, scan a network with Nmap.</li>
          <li><b>Resources:</b> TryHackMe, Cybrary, Hacker101.</li>
          <li><b>Learning Goals:</b> Understand security fundamentals and tools.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Penetration testing, web app security, scripting (Python), firewall management.</li>
          <li><b>Tools:</b> Metasploit, Burp Suite, OWASP ZAP.</li>
          <li><b>Projects:</b> Conduct a vulnerability assessment, simulate a phishing attack.</li>
          <li><b>Resources:</b> Hack The Box, Offensive Security, Udemy (Ethical Hacking).</li>
          <li><b>Learning Goals:</b> Identify and exploit vulnerabilities.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Reverse engineering, cloud security, incident response, advanced cryptography.</li>
          <li><b>Tools:</b> Ghidra, Splunk, AWS Security Hub, Nessus.</li>
          <li><b>Projects:</b> Red team exercise, secure cloud infrastructure, malware analysis.</li>
          <li><b>Resources:</b> SANS Institute, Certified Ethical Hacker (CEH), Cybrary (Advanced).</li>
          <li><b>Learning Goals:</b> Lead security operations and audits.</li>
        </ul>
      </div>
    ),
    game: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> C# (Unity) or C++ (Unreal), game design basics, 2D/3D concepts.</li>
          <li><b>Tools:</b> Unity, Godot, Blender, Visual Studio.</li>
          <li><b>Projects:</b> 2D platformer, simple puzzle game.</li>
          <li><b>Resources:</b> Unity Learn, Brackeys (YouTube), Godot Docs.</li>
          <li><b>Learning Goals:</b> Create basic games with simple mechanics.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Physics-based programming, shaders, multiplayer basics, asset creation.</li>
          <li><b>Tools:</b> Unreal Engine, Maya, Substance Painter.</li>
          <li><b>Projects:</b> 3D shooter, multiplayer card game.</li>
          <li><b>Resources:</b> Udemy (Unity Game Dev), Unreal Engine Tutorials, GDC Talks.</li>
          <li><b>Learning Goals:</b> Build complex games with polished visuals.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Advanced AI, VR/AR development, game optimization, cross-platform deployment.</li>
          <li><b>Tools:</b> Oculus SDK, SteamVR, Photon (multiplayer), Houdini.</li>
          <li><b>Projects:</b> VR adventure game, optimized multiplayer RPG.</li>
          <li><b>Resources:</b> Gamasutra, Epic Games Tutorials, Advanced Unity Courses.</li>
          <li><b>Learning Goals:</b> Develop professional, scalable games.</li>
        </ul>
      </div>
    ),
    aiml: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Python, linear algebra, basic ML (regression, classification), data preprocessing.</li>
          <li><b>Tools:</b> Jupyter Notebook, scikit-learn, NumPy, Pandas.</li>
          <li><b>Projects:</b> Sentiment analysis, image classification (MNIST).</li>
          <li><b>Resources:</b> Fast.ai, Coursera (AI for Everyone), Kaggle Learn.</li>
          <li><b>Learning Goals:</b> Understand ML foundations and basic models.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Deep learning (CNNs, RNNs), TensorFlow/PyTorch, NLP basics, model evaluation.</li>
          <li><b>Tools:</b> Google Colab, Keras, Hugging Face.</li>
          <li><b>Projects:</b> Chatbot, object detection model, recommendation system.</li>
          <li><b>Resources:</b> DeepLearning.AI, Udemy (Deep Learning), Stanford Online.</li>
          <li><b>Learning Goals:</b> Build and fine-tune neural networks.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Reinforcement learning, generative AI (GANs), MLOps, distributed training.</li>
          <li><b>Tools:</b> Ray, Kubeflow, AWS SageMaker, ONNX.</li>
          <li><b>Projects:</b> Autonomous agent, production-ready NLP model, real-time inference system.</li>
          <li><b>Resources:</b> Reinforcement Learning (DeepMind), Advanced AI (Udacity).</li>
          <li><b>Learning Goals:</b> Deploy scalable AI solutions.</li>
        </ul>
      </div>
    ),
    blockchain: (
      <div className="space-responsive">
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Blockchain basics, Solidity, smart contracts, basic cryptography.</li>
          <li><b>Tools:</b> Remix IDE, MetaMask, Truffle.</li>
          <li><b>Projects:</b> Simple smart contract (e.g., voting system), ERC-20 token.</li>
          <li><b>Resources:</b> CryptoZombies, Dapp University, freeCodeCamp (Blockchain).</li>
          <li><b>Learning Goals:</b> Understand blockchain and smart contract basics.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Ethereum, decentralized apps (DApps), Web3.js, IPFS.</li>
          <li><b>Tools:</b> Hardhat, Ganache, Infura.</li>
          <li><b>Projects:</b> Decentralized marketplace, NFT minting app.</li>
          <li><b>Resources:</b> ConsenSys Academy, Udemy (Blockchain Development).</li>
          <li><b>Learning Goals:</b> Build and deploy DApps.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li><b>Skills:</b> Layer 2 solutions (Polygon), cross-chain bridges, DeFi protocols, security auditing.</li>
          <li><b>Tools:</b> Foundry, Chainlink, OpenZeppelin.</li>
          <li><b>Projects:</b> DeFi yield farming platform, cross-chain NFT marketplace.</li>
          <li><b>Resources:</b> Ethereum.org, Alchemy University, CertiK Audit Courses.</li>
          <li><b>Learning Goals:</b> Develop secure, scalable blockchain solutions.</li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-10 animate-fade-in overflow-y-auto max-h-[90vh] modal-responsive">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-tech-blue transition-colors p-2"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
          {domainMeta?.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 responsive-text">{domainMeta?.description}</p>
        {/* Show the detailed learning path info */}
        {domainDetails[domainMeta?.id] || (
          <div className="text-gray-500">Detailed path coming soon.</div>
        )}
        <div className="flex justify-end gap-3 mt-6">
          <Button className="bg-tech-blue hover:bg-tech-indigo text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md btn-responsive" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
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

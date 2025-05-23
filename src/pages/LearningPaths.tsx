import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Search, Filter, BookOpen, Code, Database, Layers, PenTool, Terminal, X, ShieldCheck } from 'lucide-react';
import { LearningPathCategory, learningPathsData } from '@/data/learningPathsData';
import { Link } from 'react-router-dom';

// Chart.js will be loaded via CDN in index.html

const domainCategories: { id: LearningPathCategory; title: string; icon: React.ReactNode; description: string; color: string }[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Build dynamic, responsive websites and web applications',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-blue-500'
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
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Build cross-platform mobile apps with Flutter or React Native',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-pink-500'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems and data through security best practices',
    icon: <ShieldCheck className="h-6 w-6" />,
    color: 'bg-gray-700'
  },
  {
    id: 'game',
    title: 'Game Development',
    description: 'Create interactive games using Unity, Unreal, and more',
    icon: <Layers className="h-6 w-6" />,
    color: 'bg-orange-500'
  },
  {
    id: 'aiml',
    title: 'AI/ML Engineering',
    description: 'Build intelligent systems and machine learning models',
    icon: <Database className="h-6 w-6" />,
    color: 'bg-indigo-500'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Develop decentralized apps and smart contracts',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-emerald-600'
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
    <Card className="h-full">
      <CardHeader>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white ${color}`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={onClick}>
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
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), DOM manipulation, basic Git.</li>
          <li><b>Tools:</b> VS Code, Chrome DevTools, GitHub, npm.</li>
          <li><b>Projects:</b> Personal portfolio, static landing page, simple to-do list.</li>
          <li><b>Resources:</b> freeCodeCamp, MDN Web Docs, The Odin Project, W3Schools.</li>
          <li><b>Learning Goals:</b> Understand web structure, styling, and basic interactivity.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> React or Vue.js, TypeScript, REST APIs, Node.js, Express, SQL (PostgreSQL), MongoDB, basic testing (Jest).</li>
          <li><b>Tools:</b> Postman, Webpack, Vercel, MongoDB Compass.</li>
          <li><b>Projects:</b> Blog with user authentication, e-commerce site with API integration, real-time chat app.</li>
          <li><b>Resources:</b> Full Stack Open, Scrimba, Udemy (MERN Stack), Frontend Masters.</li>
          <li><b>Learning Goals:</b> Build dynamic, database-driven applications.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> GraphQL, microservices, serverless architecture, CI/CD, cloud platforms (AWS, Azure), performance optimization.</li>
          <li><b>Tools:</b> Docker, Kubernetes, Next.js, Firebase, Jenkins.</li>
          <li><b>Projects:</b> Scalable SaaS platform, multi-user collaborative app, full-stack app with payment integration (Stripe).</li>
          <li><b>Resources:</b> Advanced React (Wes Bos), AWS Certified Developer, Pluralsight.</li>
          <li><b>Learning Goals:</b> Deploy production-ready, scalable applications.</li>
        </ul>
      </div>
    ),
    design: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Design principles (color, typography, hierarchy), user research, wireframing, prototyping basics.</li>
          <li><b>Tools:</b> Figma, Adobe XD, Balsamiq, Canva.</li>
          <li><b>Projects:</b> Wireframe for a mobile app, landing page mockup, user persona creation.</li>
          <li><b>Resources:</b> Google UX Design Certificate (Coursera), Interaction Design Foundation, YouTube (DesignCourse).</li>
          <li><b>Learning Goals:</b> Understand user-centered design and basic prototyping.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Usability testing, interaction design, basic HTML/CSS, design systems, A/B testing.</li>
          <li><b>Tools:</b> Sketch, InVision, Zeplin, FigJam.</li>
          <li><b>Projects:</b> Interactive app prototype, website redesign with user testing, design system for a brand.</li>
          <li><b>Resources:</b> UX Design Institute, Nielsen Norman Group, Udemy (UI/UX Bootcamp).</li>
          <li><b>Learning Goals:</b> Create functional, user-tested designs and collaborate with developers.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Accessibility (WCAG), advanced user psychology, motion design, cross-platform design, design ops.</li>
          <li><b>Tools:</b> Axure RP, Framer, Adobe After Effects, advanced Figma plugins.</li>
          <li><b>Projects:</b> End-to-end UX case study, accessible enterprise app, animated UI components.</li>
          <li><b>Resources:</b> Coursera (Advanced UX), Smashing Magazine, Awwwards.</li>
          <li><b>Learning Goals:</b> Lead design projects and optimize for inclusivity and scalability.</li>
        </ul>
      </div>
    ),
    graphic: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Color theory, typography, composition, raster/vector graphics, branding basics.</li>
          <li><b>Tools:</b> Adobe Photoshop, Illustrator, Canva, Procreate.</li>
          <li><b>Projects:</b> Logo, business card, social media graphics, simple poster.</li>
          <li><b>Resources:</b> Canva Design School, Coursera (Graphic Design Specialization), Skillshare.</li>
          <li><b>Learning Goals:</b> Create visually appealing static designs.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Advanced branding, illustration, basic motion graphics, print design.</li>
          <li><b>Tools:</b> Adobe InDesign, After Effects, Affinity Designer.</li>
          <li><b>Projects:</b> Brand style guide, animated ad, magazine layout.</li>
          <li><b>Resources:</b> Domestika, Udemy (Graphic Design Masterclass), Behance.</li>
          <li><b>Learning Goals:</b> Develop cohesive brand identities and dynamic visuals.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> 3D design, advanced motion graphics, UI asset creation, packaging design.</li>
          <li><b>Tools:</b> Blender, Cinema 4D, Adobe Premiere, Dimension.</li>
          <li><b>Projects:</b> 3D product mockup, animated marketing campaign, interactive infographic.</li>
          <li><b>Resources:</b> Lynda (Advanced Graphic Design), Dribbble, ArtStation.</li>
          <li><b>Learning Goals:</b> Produce professional, multi-format visual content.</li>
        </ul>
      </div>
    ),
    devops: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Linux (bash, shell scripting), Git, networking basics (TCP/IP, DNS), cloud intro (AWS Free Tier).</li>
          <li><b>Tools:</b> GitHub, VirtualBox, AWS CLI, DigitalOcean.</li>
          <li><b>Projects:</b> Deploy a static site, set up a Git workflow, basic server setup.</li>
          <li><b>Resources:</b> Learn Linux TV, Codecademy (Command Line), AWS Training.</li>
          <li><b>Learning Goals:</b> Understand system administration and version control.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Docker, Kubernetes, CI/CD pipelines, basic scripting (Python/Bash), cloud services (EC2, S3).</li>
          <li><b>Tools:</b> Jenkins, Terraform, Prometheus, Ansible.</li>
          <li><b>Projects:</b> Containerized web app, automated CI/CD pipeline, monitoring dashboard.</li>
          <li><b>Resources:</b> Udemy (Docker & Kubernetes), A Cloud Guru, Linux Academy.</li>
          <li><b>Learning Goals:</b> Automate deployments and manage containerized environments.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Infrastructure as Code (IaC), advanced Kubernetes, monitoring/alerting, security best practices.</li>
          <li><b>Tools:</b> Helm, Grafana, Vault, AWS CDK, GitLab CI.</li>
          <li><b>Projects:</b> Scalable microservices architecture, zero-downtime deployment, automated disaster recovery.</li>
          <li><b>Resources:</b> Pluralsight (Advanced DevOps), Kubernetes.io, AWS Certified DevOps Engineer.</li>
          <li><b>Learning Goals:</b> Optimize and secure large-scale infrastructure.</li>
        </ul>
      </div>
    ),
    data: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Python (NumPy, Pandas), basic statistics (mean, median, probability), data visualization, Excel.</li>
          <li><b>Tools:</b> Jupyter Notebook, Matplotlib, Seaborn, Google Sheets.</li>
          <li><b>Projects:</b> Analyze a Kaggle dataset (e.g., Titanic), create bar/pie charts.</li>
          <li><b>Resources:</b> Kaggle Learn, DataCamp, Coursera (Data Science Fundamentals).</li>
          <li><b>Learning Goals:</b> Clean, analyze, and visualize data.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Machine learning (scikit-learn), SQL, intermediate statistics, data preprocessing, feature engineering.</li>
          <li><b>Tools:</b> Tableau, PostgreSQL, Google Colab, Power BI.</li>
          <li><b>Projects:</b> Predictive model (e.g., customer churn), interactive dashboard.</li>
          <li><b>Resources:</b> Fast.ai, Coursera (Machine Learning by Stanford), Kaggle Competitions.</li>
          <li><b>Learning Goals:</b> Build and evaluate ML models.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Deep learning (TensorFlow, PyTorch), big data (Hadoop, Spark), MLOps, time-series analysis.</li>
          <li><b>Tools:</b> AWS SageMaker, Airflow, FastAPI, Dask.</li>
          <li><b>Projects:</b> Deployed neural network model, real-time data pipeline, A/B testing framework.</li>
          <li><b>Resources:</b> DeepLearning.AI, Udemy (MLOps), Kaggle (Advanced Notebooks).</li>
          <li><b>Learning Goals:</b> Deploy scalable, production-ready data solutions.</li>
        </ul>
      </div>
    ),
    mobile: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Dart (Flutter) or JavaScript (React Native), basic UI design, mobile app lifecycle.</li>
          <li><b>Tools:</b> Flutter SDK, Android Studio, Xcode, VS Code.</li>
          <li><b>Projects:</b> To-do app, weather app, simple calculator.</li>
          <li><b>Resources:</b> Flutter.dev, Udemy (Flutter & Dart), Codecademy.</li>
          <li><b>Learning Goals:</b> Build cross-platform mobile apps.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> State management (Provider, Redux), REST APIs, native modules (Swift/Kotlin).</li>
          <li><b>Tools:</b> Firebase, Postman, React Native CLI.</li>
          <li><b>Projects:</b> E-commerce app, social media feed, location-based app.</li>
          <li><b>Resources:</b> React Native Docs, Udemy (React Native Advanced), Flutter Awesome.</li>
          <li><b>Learning Goals:</b> Integrate APIs and manage app state.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Performance optimization, CI/CD for mobile, AR/VR integration, native development (Swift, Kotlin).</li>
          <li><b>Tools:</b> Fastlane, Bitrise, ARKit, Jetpack Compose.</li>
          <li><b>Projects:</b> Scalable app with push notifications, AR-based shopping app.</li>
          <li><b>Resources:</b> Ray Wenderlich, WWDC (Apple), Android Developer Docs.</li>
          <li><b>Learning Goals:</b> Build and deploy production-grade mobile apps.</li>
        </ul>
      </div>
    ),
    cybersecurity: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Networking (TCP/IP, DNS), Linux basics, ethical hacking, basic cryptography.</li>
          <li><b>Tools:</b> Wireshark, VirtualBox, Kali Linux, Nmap.</li>
          <li><b>Projects:</b> Set up a home lab, scan a network with Nmap.</li>
          <li><b>Resources:</b> TryHackMe, Cybrary, Hacker101.</li>
          <li><b>Learning Goals:</b> Understand security fundamentals and tools.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Penetration testing, web app security, scripting (Python), firewall management.</li>
          <li><b>Tools:</b> Metasploit, Burp Suite, OWASP ZAP.</li>
          <li><b>Projects:</b> Conduct a vulnerability assessment, simulate a phishing attack.</li>
          <li><b>Resources:</b> Hack The Box, Offensive Security, Udemy (Ethical Hacking).</li>
          <li><b>Learning Goals:</b> Identify and exploit vulnerabilities.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Reverse engineering, cloud security, incident response, advanced cryptography.</li>
          <li><b>Tools:</b> Ghidra, Splunk, AWS Security Hub, Nessus.</li>
          <li><b>Projects:</b> Red team exercise, secure cloud infrastructure, malware analysis.</li>
          <li><b>Resources:</b> SANS Institute, Certified Ethical Hacker (CEH), Cybrary (Advanced).</li>
          <li><b>Learning Goals:</b> Lead security operations and audits.</li>
        </ul>
      </div>
    ),
    game: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> C# (Unity) or C++ (Unreal), game design basics, 2D/3D concepts.</li>
          <li><b>Tools:</b> Unity, Godot, Blender, Visual Studio.</li>
          <li><b>Projects:</b> 2D platformer, simple puzzle game.</li>
          <li><b>Resources:</b> Unity Learn, Brackeys (YouTube), Godot Docs.</li>
          <li><b>Learning Goals:</b> Create basic games with simple mechanics.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Physics-based programming, shaders, multiplayer basics, asset creation.</li>
          <li><b>Tools:</b> Unreal Engine, Maya, Substance Painter.</li>
          <li><b>Projects:</b> 3D shooter, multiplayer card game.</li>
          <li><b>Resources:</b> Udemy (Unity Game Dev), Unreal Engine Tutorials, GDC Talks.</li>
          <li><b>Learning Goals:</b> Build complex games with polished visuals.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Advanced AI, VR/AR development, game optimization, cross-platform deployment.</li>
          <li><b>Tools:</b> Oculus SDK, SteamVR, Photon (multiplayer), Houdini.</li>
          <li><b>Projects:</b> VR adventure game, optimized multiplayer RPG.</li>
          <li><b>Resources:</b> Gamasutra, Epic Games Tutorials, Advanced Unity Courses.</li>
          <li><b>Learning Goals:</b> Develop professional, scalable games.</li>
        </ul>
      </div>
    ),
    aiml: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Python, linear algebra, basic ML (regression, classification), data preprocessing.</li>
          <li><b>Tools:</b> Jupyter Notebook, scikit-learn, NumPy, Pandas.</li>
          <li><b>Projects:</b> Sentiment analysis, image classification (MNIST).</li>
          <li><b>Resources:</b> Fast.ai, Coursera (AI for Everyone), Kaggle Learn.</li>
          <li><b>Learning Goals:</b> Understand ML foundations and basic models.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Deep learning (CNNs, RNNs), TensorFlow/PyTorch, NLP basics, model evaluation.</li>
          <li><b>Tools:</b> Google Colab, Keras, Hugging Face.</li>
          <li><b>Projects:</b> Chatbot, object detection model, recommendation system.</li>
          <li><b>Resources:</b> DeepLearning.AI, Udemy (Deep Learning), Stanford Online.</li>
          <li><b>Learning Goals:</b> Build and fine-tune neural networks.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Reinforcement learning, generative AI (GANs), MLOps, distributed training.</li>
          <li><b>Tools:</b> Ray, Kubeflow, AWS SageMaker, ONNX.</li>
          <li><b>Projects:</b> Autonomous agent, production-ready NLP model, real-time inference system.</li>
          <li><b>Resources:</b> Reinforcement Learning (DeepMind), Advanced AI (Udacity).</li>
          <li><b>Learning Goals:</b> Deploy scalable AI solutions.</li>
        </ul>
      </div>
    ),
    blockchain: (
      <div>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Beginner (0–6 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Blockchain basics, Solidity, smart contracts, basic cryptography.</li>
          <li><b>Tools:</b> Remix IDE, MetaMask, Truffle.</li>
          <li><b>Projects:</b> Simple smart contract (e.g., voting system), ERC-20 token.</li>
          <li><b>Resources:</b> CryptoZombies, Dapp University, freeCodeCamp (Blockchain).</li>
          <li><b>Learning Goals:</b> Understand blockchain and smart contract basics.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Intermediate (6–12 Months)</h3>
        <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><b>Skills:</b> Ethereum, decentralized apps (DApps), Web3.js, IPFS.</li>
          <li><b>Tools:</b> Hardhat, Ganache, Infura.</li>
          <li><b>Projects:</b> Decentralized marketplace, NFT minting app.</li>
          <li><b>Resources:</b> ConsenSys Academy, Udemy (Blockchain Development).</li>
          <li><b>Learning Goals:</b> Build and deploy DApps.</li>
        </ul>
        <h3 className="text-lg font-bold mb-2 text-tech-blue">Advanced (1–2 Years)</h3>
        <ul className="mb-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl mx-4 p-6 md:p-10 animate-fade-in overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-tech-blue transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
          {domainMeta?.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{domainMeta?.description}</p>
        {/* Show the detailed learning path info */}
        {domainDetails[domainMeta?.id] || (
          <div className="text-gray-500">Detailed path coming soon.</div>
        )}
        <div className="flex justify-end gap-3 mt-6">
          <Button className="bg-tech-blue hover:bg-tech-indigo text-white font-semibold px-6 py-2 rounded-md" onClick={onClose}>
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

  // Filter domains based on search and tab
  const filteredDomains = domainCategories.filter((domain) => {
    const matchesSearch =
      domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === 'all' ? true : domain.id === activeTab;

    return matchesSearch && matchesTab;
  });

  // When a card is clicked, open modal with detailed info
  const handlePathSelect = (category: LearningPathCategory) => {
    // Pass all levels' data for the modal
    const pathData = learningPathsData[category];
    setModalPath(pathData);
    setModalDomain(domainCategories.find((d) => d.id === category));
    setModalOpen(true);
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
            {/* <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Paths</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="design">UI/UX Design</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>
            </div> */}

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
            {/* <TabsContent value="web" className="mt-0"></TabsContent>
            <TabsContent value="programming" className="mt-0"></TabsContent>
            <TabsContent value="design" className="mt-0"></TabsContent>
            <TabsContent value="data" className="mt-0"></TabsContent>
            <TabsContent value="devops" className="mt-0"></TabsContent> */}
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
                <a href="/about#contact" className="flex items-center gap-2">
                  <Button className="bg-white text-tech-indigo hover:bg-blue-50">
                    Request Path
                  </Button>
                </a>
                <a href="/about#contact" className="flex items-center gap-2">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Mentor
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

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Code, GitBranch, Terminal, Bot, Brain, Wand } from 'lucide-react';
import ResourceCard from '@/components/ResourceCard';

// Development Tools
const tools = [
  {
    title: 'Visual Studio Code (VS Code)',
    description: 'A lightweight, open-source code editor by Microsoft with powerful features for web development including IntelliSense, debugging, and Git integration.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Microsoft',
    category: 'tools',
    tags: ['IDE', 'Code Editor', 'Web Development', 'JavaScript', 'React'],
    url: 'https://code.visualstudio.com/',
    isPremium: false,
    platform: 'Microsoft',
    note: 'Free and open-source. Perfect for beginners and professionals alike.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
  },
  {
    title: 'WebStorm',
    description: 'A powerful IDE by JetBrains specifically designed for JavaScript and web development with advanced code completion and debugging tools.',
    type: 'Tool' as const,
    rating: 5,
    author: 'JetBrains',
    category: 'tools',
    tags: ['IDE', 'JavaScript', 'React', 'Professional Development'],
    url: 'https://www.jetbrains.com/webstorm/',
    isPremium: true,
    platform: 'JetBrains',
    note: 'Premium IDE with built-in testing and Git/GitHub integration.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    logoUrl: 'https://resources.jetbrains.com/storage/products/webstorm/img/meta/webstorm_logo_300x300.png'
  },
  {
    title: 'IntelliJ IDEA (Community Edition)',
    description: 'A versatile IDE supporting multiple languages with robust features for code navigation, refactoring, and Git integration.',
    type: 'Tool' as const,
    rating: 4,
    author: 'JetBrains',
    category: 'tools',
    tags: ['IDE', 'Multi-language', 'Web Development', 'Java'],
    url: 'https://www.jetbrains.com/idea/',
    isPremium: false,
    platform: 'JetBrains',
    note: 'Free Community Edition available. Strong web development capabilities via plugins.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    logoUrl: 'https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png'
  },
  {
    title: 'CodePen',
    description: 'An online playground for front-end developers to prototype, experiment, and share HTML, CSS, and JavaScript code in real-time.',
    type: 'Tool' as const,
    rating: 5,
    author: 'CodePen Team',
    category: 'tools',
    tags: ['Online IDE', 'Front-end', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://codepen.io/',
    isPremium: false,
    platform: 'Web',
    note: 'Free to use with basic features. Great for quick prototyping.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    logoUrl: 'https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg'
  },
  {
    title: 'Git',
    description: 'A distributed version control system essential for tracking code changes and collaborating on software development projects.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Linus Torvalds & Git Community',
    category: 'tools',
    tags: ['Version Control', 'Collaboration', 'Command Line'],
    url: 'https://git-scm.com/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Essential for collaborative development.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
    logoUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
  },
  {
    title: 'GitHub',
    description: 'A cloud-based platform for Git repositories that enables collaboration, pull requests, code reviews, and CI/CD workflows.',
    type: 'Tool' as const,
    rating: 5,
    author: 'GitHub, Inc. (Microsoft)',
    category: 'tools',
    tags: ['Git', 'Code Hosting', 'Collaboration', 'Open Source'],
    url: 'https://github.com/',
    isPremium: false,
    platform: 'Web',
    note: 'Free for public repositories. Industry standard for open source.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
    logoUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  },
  {
    title: 'Chrome DevTools',
    description: 'Built-in browser tools for debugging, inspecting elements, analyzing performance, and optimizing web applications.',
    type: 'Tool' as const,
    rating: 4,
    author: 'Google Developers',
    category: 'tools',
    tags: ['Debugging', 'Performance', 'Web Development'],
    url: 'https://developer.chrome.com/docs/devtools/',
    isPremium: false,
    platform: 'Chrome Browser',
    note: 'Free and accessible via F12 or right-click > Inspect.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef',
    logoUrl: 'https://developer.chrome.com/static/images/chrome-logo-m100.svg'
  },
  {
    title: 'Node.js',
    description: 'A JavaScript runtime environment that executes code outside a web browser, enabling server-side scripting and command-line tools.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Node.js Foundation',
    category: 'tools',
    tags: ['JavaScript', 'Runtime', 'Backend', 'React Development'],
    url: 'https://nodejs.org/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Powers modern JavaScript development.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560800245-eae5049e1320',
    logoUrl: 'https://nodejs.org/static/images/logo.svg'
  },
  {
    title: 'ESLint',
    description: 'A static code analysis tool that identifies and fixes problems in JavaScript code, ensuring consistency and preventing errors.',
    type: 'Tool' as const,
    rating: 4,
    author: 'ESLint Team',
    category: 'tools',
    tags: ['Code Quality', 'JavaScript', 'React', 'Linting'],
    url: 'https://eslint.org/',
    isPremium: false,
    platform: 'Node.js Package',
    note: 'Free and integrates with most editors and IDEs.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    logoUrl: 'https://eslint.org/assets/img/favicon.512x512.png'
  },
  {
    title: 'Prettier',
    description: 'An opinionated code formatter that enforces consistent style across your codebase, supporting many languages and integrating with editors.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Prettier Team',
    category: 'tools',
    tags: ['Code Formatting', 'JavaScript', 'React', 'CSS', 'HTML'],
    url: 'https://prettier.io/',
    isPremium: false,
    platform: 'Node.js Package',
    note: 'Free and works as an extension for most popular editors.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    logoUrl: 'https://prettier.io/icon.png'
  }
];

// AI Research and Development Tools
const aiTools = [
  {
    title: 'OpenAI GPT-4o',
    description: 'Advanced large language model with multimodal capabilities. Ideal for natural language processing, code generation, and content creation.',
    type: 'Tool' as const,
    rating: 5,
    author: 'OpenAI',
    category: 'ai',
    tags: ['AI', 'LLM', 'Natural Language Processing', 'Code Generation'],
    url: 'https://openai.com/gpt-4o',
    isPremium: true,
    platform: 'API & Web',
    note: 'Premium API with usage-based pricing. Powers many AI applications.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1677442135126-21d0d0e8e292',
    logoUrl: 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png'
  },
  {
    title: 'Hugging Face Transformers',
    description: 'Open-source library providing thousands of pre-trained models for NLP, computer vision, speech processing, and more.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Hugging Face',
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'Open Source', 'NLP', 'Computer Vision'],
    url: 'https://huggingface.co/docs/transformers',
    isPremium: false,
    platform: 'JavaScript, Python',
    note: 'Free open-source library. Extensive documentation and community support.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1655720033654-a4239dd42d10',
    logoUrl: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'
  },
  {
    title: 'TensorFlow.js',
    description: 'JavaScript library for training and deploying machine learning models in the browser and Node.js.',
    type: 'Tool' as const,
    rating: 4,
    author: 'Google',
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'JavaScript', 'Browser ML'],
    url: 'https://www.tensorflow.org/js',
    isPremium: false,
    platform: 'JavaScript',
    note: 'Free and open-source. Enables ML directly in web applications.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
    logoUrl: 'https://www.tensorflow.org/static/site-assets/images/project-logos/tensorflow-js-logo-social.png'
  },
  {
    title: 'Perplexity AI',
    description: 'AI-powered search engine that provides answers by analyzing multiple sources and generating comprehensive responses.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Perplexity AI',
    category: 'ai',
    tags: ['AI', 'Research', 'Search Engine', 'Information Retrieval'],
    url: 'https://www.perplexity.ai/',
    isPremium: false,
    platform: 'Web & API',
    note: 'Free with premium options. Great for research and fact-checking.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28',
    logoUrl: 'https://assets-global.website-files.com/64760069e93084646c9ee428/64cbaecf601ec37f3434ff8b_Icon%20(bloated)%20(1).png'
  },
  {
    title: 'Claude',
    description: 'Advanced AI assistant with strong reasoning capabilities, extensive context handling, and careful output filtering.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Anthropic',
    category: 'ai',
    tags: ['AI', 'LLM', 'Assistant', 'Research'],
    url: 'https://www.anthropic.com/claude',
    isPremium: true,
    platform: 'API & Web',
    note: 'Free tier with premium options. Excellent for complex reasoning tasks.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1673002084129-3148452f9e44',
    logoUrl: 'https://images.ctfassets.net/x7nx2r7d3pz4/7pnilxn2iAy5NSFli2Q8BC/a5cc8a8615e39e11b106398222480943/claude-logo.png'
  },
  {
    title: 'LangChain',
    description: 'Framework for developing applications powered by language models through composable components that integrate with other tools.',
    type: 'Tool' as const,
    rating: 4,
    author: 'LangChain',
    category: 'ai',
    tags: ['AI', 'LLM', 'Framework', 'Development'],
    url: 'https://langchain.com/',
    isPremium: false,
    platform: 'JavaScript, Python',
    note: 'Open-source framework for building LLM-powered applications.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1675271591211-626f278fb1c1',
    logoUrl: 'https://avatars.githubusercontent.com/u/126733545'
  },
  {
    title: 'Midjourney',
    description: 'AI image generation tool that creates stunning visuals from text descriptions using advanced diffusion techniques.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Midjourney',
    category: 'ai',
    tags: ['AI', 'Image Generation', 'Diffusion Models', 'Creative Tools'],
    url: 'https://www.midjourney.com/',
    isPremium: true,
    platform: 'Discord & Web',
    note: 'Subscription-based service. Excellent for design and creative work.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1686826658744-84e0988c4dca',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png'
  },
  {
    title: 'Stable Diffusion',
    description: 'Open-source AI model that generates detailed images from text descriptions, deployable on local hardware.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Stability AI',
    category: 'ai',
    tags: ['AI', 'Image Generation', 'Open Source', 'Self-hosting'],
    url: 'https://stability.ai/stable-diffusion',
    isPremium: false,
    platform: 'Python, Web',
    note: 'Free and open-source. Can be self-hosted for privacy.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1678749985115-634dd376e16e',
    logoUrl: 'https://avatars.githubusercontent.com/u/100950301'
  }
];

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter tools based on search only
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Filter AI tools based on search only
  const filteredAiTools = aiTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Modified ResourceCard component specific for tools with logo
  const ToolCard = ({ tool }: { tool: typeof tools[0] }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-200">
      <div className="p-6 flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img 
            src={tool.logoUrl} 
            alt={`${tool.title} logo`} 
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <Badge className={tool.isPremium ? 'bg-amber-100 text-amber-800' : 'bg-orange-100 text-orange-800'}>
              {tool.isPremium ? 'Premium' : 'Free'}
            </Badge>
            <div className="flex items-center text-amber-500">
              {Array(5).fill(0).map((_, i) => (
                <svg 
                  key={i} 
                  className={`h-4 w-4 ${i < tool.rating ? 'fill-current' : 'stroke-current fill-none'}`}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
          <h3 className="text-lg font-medium mt-2">
            <a 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline transition-colors"
            >
              {tool.title}
            </a>
          </h3>
          <p className="text-gray-500 text-sm mt-1">{tool.author}</p>
          <p className="text-gray-700 mt-2">{tool.description}</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {tool.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs cursor-pointer hover:bg-gray-100"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-sm text-gray-500">{tool.platform}</span>
            <Button asChild size="sm" variant="outline" className="text-blue-600">
              <a href={tool.url} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-indigo to-tech-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">Development & AI Tools</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Essential Tools for Developers</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 text-blue-100">
            Discover the best development and AI tools to enhance your workflow, productivity, and innovation.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search tools..." 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                className="pl-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="flex-nowrap">
                <TabsTrigger value="all" className="flex items-center gap-1">
                  <Code className="h-4 w-4" /> All Tools
                </TabsTrigger>
                <TabsTrigger value="ide" className="flex items-center gap-1">
                  <Terminal className="h-4 w-4" /> IDEs & Editors
                </TabsTrigger>
                <TabsTrigger value="git" className="flex items-center gap-1">
                  <GitBranch className="h-4 w-4" /> Version Control
                </TabsTrigger>
                <TabsTrigger value="quality" className="flex items-center gap-1">
                  <Code className="h-4 w-4" /> Code Quality
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex items-center gap-1">
                  <Brain className="h-4 w-4" /> AI Tools
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-xl text-gray-500">No tools found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4" 
                      onClick={() => {
                        setSearchQuery('');
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="ide" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTools
                  .filter(tool => ['IDE', 'Code Editor'].some(tag => tool.tags.includes(tag)))
                  .map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="git" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTools
                  .filter(tool => ['Git', 'Version Control', 'GitHub'].some(tag => tool.tags.includes(tag)))
                  .map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="quality" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTools
                  .filter(tool => ['Code Quality', 'Code Formatting', 'Linting'].some(tag => tool.tags.includes(tag)))
                  .map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredAiTools
                  .filter(tool => ['AI', 'LLM', 'Machine Learning'].some(tag => tool.tags.includes(tag)))
                  .map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tech-blue to-tech-lightblue text-white rounded-xl p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Enhance your workflow with AI</h3>
                <p className="text-blue-100">
                  Leverage powerful AI tools to boost your productivity and unlock new possibilities in your development projects.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Button className="bg-white text-tech-blue hover:bg-blue-50">
                  Explore AI Guides
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;

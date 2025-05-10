
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Code, GitBranch, Terminal } from 'lucide-react';
import ResourceCard from '@/components/ResourceCard';

// Development Tools
const tools = [
  {
    title: 'Visual Studio Code (VS Code)',
    description: 'A lightweight, open-source code editor by Microsoft, ideal for web development. It supports HTML, CSS, JavaScript, React, and more with extensions like ESLint, Prettier, and React Snippets.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Microsoft',
    category: 'tools',
    tags: ['IDE', 'Code Editor', 'Web Development', 'JavaScript', 'React'],
    url: 'https://code.visualstudio.com/',
    isPremium: false,
    platform: 'Microsoft',
    note: 'Free and open-source. Features include IntelliSense, debugging, Git integration, and a built-in terminal.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159'
  },
  {
    title: 'WebStorm',
    description: 'A powerful IDE by JetBrains tailored for JavaScript, React, and web development. It offers advanced code completion, refactoring, and debugging for HTML, CSS, and JavaScript.',
    type: 'Tool' as const,
    rating: 5,
    author: 'JetBrains',
    category: 'tools',
    tags: ['IDE', 'JavaScript', 'React', 'Professional Development'],
    url: 'https://www.jetbrains.com/webstorm/',
    isPremium: true,
    platform: 'JetBrains',
    note: 'Premium IDE with built-in tools for testing and Git/GitHub integration.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3'
  },
  {
    title: 'IntelliJ IDEA (Community Edition)',
    description: 'A versatile, open-source IDE by JetBrains supporting JavaScript, HTML, CSS, and React via plugins. It provides robust code navigation, refactoring, and Git integration.',
    type: 'Tool' as const,
    rating: 4,
    author: 'JetBrains',
    category: 'tools',
    tags: ['IDE', 'Multi-language', 'Web Development', 'Java'],
    url: 'https://www.jetbrains.com/idea/',
    isPremium: false,
    platform: 'JetBrains',
    note: 'Free Community Edition available. Primarily for Java but strong web development capabilities via plugins.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
  },
  {
    title: 'CodePen',
    description: 'A web-based IDE for front-end development, focusing on HTML, CSS, and JavaScript. It allows real-time code editing and previewing, making it ideal for prototyping and learning.',
    type: 'Tool' as const,
    rating: 5,
    author: 'CodePen Team',
    category: 'tools',
    tags: ['Online IDE', 'Front-end', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://codepen.io/',
    isPremium: false,
    platform: 'Web',
    note: 'Free to use with basic features. Pro plans available for additional features.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713'
  },
  {
    title: 'Git',
    description: 'A distributed version control system for tracking code changes, essential for collaborative projects. It\'s the backbone of GitHub workflows.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Linus Torvalds & Git Community',
    category: 'tools',
    tags: ['Version Control', 'Collaboration', 'Command Line'],
    url: 'https://git-scm.com/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Commands like commit, push, and pull streamline teamwork.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb'
  },
  {
    title: 'GitHub',
    description: 'A platform for hosting and collaborating on Git repositories. It integrates with IDEs like VS Code and WebStorm, supporting pull requests, code reviews, and CI/CD pipelines.',
    type: 'Tool' as const,
    rating: 5,
    author: 'GitHub, Inc. (Microsoft)',
    category: 'tools',
    tags: ['Git', 'Code Hosting', 'Collaboration', 'Open Source'],
    url: 'https://github.com/',
    isPremium: false,
    platform: 'Web',
    note: 'Free for public repositories. Pro plans available for private repositories and additional features.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb'
  },
  {
    title: 'Chrome DevTools',
    description: 'Built-in browser tools for debugging and optimizing web applications. Features include inspecting HTML/CSS, analyzing JavaScript performance, and simulating mobile devices.',
    type: 'Tool' as const,
    rating: 4,
    author: 'Google Developers',
    category: 'tools',
    tags: ['Debugging', 'Performance', 'Web Development'],
    url: 'https://developer.chrome.com/docs/devtools/',
    isPremium: false,
    platform: 'Chrome Browser',
    note: 'Free and built into Chrome browser. Accessible via F12 or right-click > Inspect.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef'
  },
  {
    title: 'Node.js',
    description: 'A runtime for executing JavaScript outside the browser, crucial for React development and server-side scripting. It powers tools like Create React App and supports package management via npm.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Node.js Foundation',
    category: 'tools',
    tags: ['JavaScript', 'Runtime', 'Backend', 'React Development'],
    url: 'https://nodejs.org/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Essential for modern JavaScript and React development.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560800245-eae5049e1320'
  },
  {
    title: 'ESLint',
    description: 'A linting tool for identifying and fixing JavaScript and React code issues. It enforces coding standards, improving code quality in projects.',
    type: 'Tool' as const,
    rating: 4,
    author: 'ESLint Team',
    category: 'tools',
    tags: ['Code Quality', 'JavaScript', 'React', 'Linting'],
    url: 'https://eslint.org/',
    isPremium: false,
    platform: 'Node.js Package',
    note: 'Free and open-source. Integrates seamlessly with VS Code and other IDEs.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea'
  },
  {
    title: 'Prettier',
    description: 'An opinionated code formatter for HTML, CSS, JavaScript, and React. It ensures consistent code style across projects, complementing tutorials like "JavaScript for Absolute Beginners."',
    type: 'Tool' as const,
    rating: 5,
    author: 'Prettier Team',
    category: 'tools',
    tags: ['Code Formatting', 'JavaScript', 'React', 'CSS', 'HTML'],
    url: 'https://prettier.io/',
    isPremium: false,
    platform: 'Node.js Package',
    note: 'Free and open-source. Works as a VS Code extension for automatic formatting.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
  }
];

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  
  // Extract unique tags from tools
  const allTags = Array.from(new Set(tools.flatMap(tool => tool.tags)));
  
  // Filter tools based on search and tag
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = tagFilter ? tool.tags.includes(tagFilter) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-indigo to-tech-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">Developer Tools</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Essential Development Tools</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 text-blue-100">
            Discover the best tools to enhance your coding workflow and productivity.
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
                placeholder="Search tools..." 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                className="pl-10" 
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">Filter by tag:</span>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={tagFilter === null ? 'secondary' : 'outline'} 
                  size="sm" 
                  onClick={() => setTagFilter(null)}
                >
                  All
                </Button>
                {allTags.slice(0, 8).map(tag => (
                  <Button 
                    key={tag} 
                    variant={tagFilter === tag ? 'secondary' : 'outline'} 
                    size="sm" 
                    onClick={() => setTagFilter(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
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
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool, index) => (
                    <ResourceCard 
                      key={index}
                      title={tool.title}
                      description={tool.description}
                      type={tool.type}
                      rating={tool.rating}
                      author={tool.author}
                      url={tool.url}
                      isPremium={tool.isPremium}
                      platform={tool.platform}
                      note={tool.note}
                      thumbnailUrl={tool.thumbnailUrl}
                    />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-xl text-gray-500">No tools found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4" 
                      onClick={() => {
                        setSearchQuery('');
                        setTagFilter(null);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="ide" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools
                  .filter(tool => ['IDE', 'Code Editor'].some(tag => tool.tags.includes(tag)))
                  .map((tool, index) => (
                    <ResourceCard 
                      key={index}
                      title={tool.title}
                      description={tool.description}
                      type={tool.type}
                      rating={tool.rating}
                      author={tool.author}
                      url={tool.url}
                      isPremium={tool.isPremium}
                      platform={tool.platform}
                      note={tool.note}
                      thumbnailUrl={tool.thumbnailUrl}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="git" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools
                  .filter(tool => ['Git', 'Version Control', 'GitHub'].some(tag => tool.tags.includes(tag)))
                  .map((tool, index) => (
                    <ResourceCard 
                      key={index}
                      title={tool.title}
                      description={tool.description}
                      type={tool.type}
                      rating={tool.rating}
                      author={tool.author}
                      url={tool.url}
                      isPremium={tool.isPremium}
                      platform={tool.platform}
                      note={tool.note}
                      thumbnailUrl={tool.thumbnailUrl}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="quality" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools
                  .filter(tool => ['Code Quality', 'Code Formatting', 'Linting'].some(tag => tool.tags.includes(tag)))
                  .map((tool, index) => (
                    <ResourceCard 
                      key={index}
                      title={tool.title}
                      description={tool.description}
                      type={tool.type}
                      rating={tool.rating}
                      author={tool.author}
                      url={tool.url}
                      isPremium={tool.isPremium}
                      platform={tool.platform}
                      note={tool.note}
                      thumbnailUrl={tool.thumbnailUrl}
                    />
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
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Set up your development environment</h3>
                <p className="text-blue-100">
                  Get started quickly with our recommended tools. Follow our setup guides to create an optimal coding environment for web development.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Button className="bg-white text-tech-blue hover:bg-blue-50">
                  View Setup Guides
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

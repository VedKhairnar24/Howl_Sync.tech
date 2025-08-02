
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
    title: 'Sublime Text',
    description: 'A sophisticated, lightweight code editor with a sleek interface and powerful features including split editing, multiple selections, and a command palette.',
    type: 'Tool' as const,
    rating: 4,
    author: 'Sublime HQ',
    category: 'tools',
    tags: ['Code Editor', 'Text Editor', 'Cross-platform', 'Fast'],
    url: 'https://www.sublimetext.com/',
    isPremium: true,
    platform: 'Cross-platform',
    note: 'Free to try with perpetual license available. Known for speed and performance.',
    thumbnailUrl: '//upload.wikimedia.org/wikipedia/en/thumb/d/d2/Sublime_Text_3_logo.png/250px-Sublime_Text_3_logo.png',
    logoUrl: '//upload.wikimedia.org/wikipedia/en/thumb/d/d2/Sublime_Text_3_logo.png/250px-Sublime_Text_3_logo.png'
  },
  {
    title: 'Atom',
    description: 'A hackable text editor built with web technologies, offering easy customization and a rich ecosystem of packages and themes.',
    type: 'Tool' as const,
    rating: 4,
    author: 'GitHub (Microsoft)',
    category: 'tools',
    tags: ['Code Editor', 'Text Editor', 'Open Source', 'Customizable'],
    url: 'https://atom.io/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Great for customization with JavaScript/CSS.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Atom_editor_logo.svg/1200px-Atom_editor_logo.svg.png'
  },
  {
    title: 'Vim',
    description: 'A highly configurable, efficient text editor for programming built to enable fast text editing through keyboard commands.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Bram Moolenaar',
    category: 'tools',
    tags: ['Text Editor', 'Terminal', 'Command Line', 'Advanced'],
    url: 'https://www.vim.org/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Steep learning curve but extremely powerful once mastered.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544654803-b69140b285a1',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1200px-Vimlogo.svg.png'
  },
  {
    title: 'Neovim',
    description: 'A hyperextensible Vim-based text editor that improves on Vim with better defaults, built-in terminal emulator, and a focus on extensibility.',
    type: 'Tool' as const,
    rating: 5,
    author: 'Neovim Team',
    category: 'tools',
    tags: ['Text Editor', 'Terminal', 'Lua', 'Advanced'],
    url: 'https://neovim.io/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Modern alternative to Vim with enhanced features.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544654803-b69140b285a1',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Neovim-logo.svg/1200px-Neovim-logo.svg.png'
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
    thumbnailUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/3/32/CodePen_Logo.svg/250px-CodePen_Logo.svg.png',
    logoUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/3/32/CodePen_Logo.svg/250px-CodePen_Logo.svg.png'
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
    thumbnailUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/120px-Google_Chrome_icon_%28February_2022%29.svg.png',
    logoUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/120px-Google_Chrome_icon_%28February_2022%29.svg.png'
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
    thumbnailUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/250px-Node.js_logo.svg.png',
    logoUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/250px-Node.js_logo.svg.png'
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
    thumbnailUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/250px-ESLint_logo.svg.png',
    logoUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/250px-ESLint_logo.svg.png'
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
      title: "OpenAI GPT-4o",
      description: "Advanced large language model with multimodal capabilities. Ideal for natural language processing, code generation, and content creation.",
      type: "Tool",
      rating: 5,
      author: "OpenAI",
      category: "ai",
      tags: ["AI", "LLM", "Natural Language Processing", "Code Generation"],
      url: "https://openai.com/gpt-4o",
      isPremium: true,
      platform: "API & Web",
      note: "Premium API with usage-based pricing. Powers many AI applications.",
      thumbnailUrl: "https://images.unsplash.com/photo-1677442135126-21d0d0e8e292",
      logoUrl: "https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"
    },
    {
      title: "Grok 3",
      description: "A powerful AI model designed for real-time data analysis, advanced reasoning, and image generation. Integrates with X for live insights and excels in math, science, and coding tasks.",
      type: "Tool",
      rating: 4.9,
      author: "xAI",
      category: "ai",
      tags: ["AI", "LLM", "Real-Time Data", "Code Generation", "Image Generation"],
      url: "https://x.ai/grok",
      isPremium: true,
      platform: "Web, iOS, Android, X",
      note: "Available with X Premium+ ($16-$22/month) or SuperGrok ($30/month). Free limited access on X platform.",
      thumbnailUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e175b",
      logoUrl: "data:image/png;base64,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"
    },
    {
      title: "DeepSeek R1",
      description: "An open-source AI model specializing in advanced reasoning, particularly for STEM tasks like mathematical problem-solving and code generation. Offers cost-effective solutions for developers.",
      type: "Tool",
      rating: 4.8,
      author: "DeepSeek",
      category: "ai",
      tags: ["AI", "LLM", "Open-Source", "Code Generation", "Mathematical Reasoning"],
      url: "https://www.deepseek.com/",
      isPremium: false,
      platform: "Web, API",
      note: "Free web app and API trials. Paid API at $0.0008 per 1,000 tokens. Ideal for cost-sensitive applications.",
      thumbnailUrl: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d",
      logoUrl: "data:image/png;base64,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"
    },
    {
      title: "Claude 3.7",
      description: "A versatile AI model excelling in long-form content creation, coding, and conversational tasks. Known for its safe and context-aware responses, ideal for enterprise use.",
      type: "Tool",
      rating: 4.8,
      author: "Anthropic",
      category: "ai",
      tags: ["AI", "LLM", "Content Creation", "Code Generation", "Conversational AI"],
      url: "https://www.anthropic.com/claude",
      isPremium: true,
      platform: "Web, API",
      note: "Available via Anthropic’s API or Claude Pro ($20/month). Strong for document analysis and customer service.",
      thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      logoUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/330px-Claude_AI_logo.svg.png'
    },
    {
      title: "Google Gemini 2.0",
      description: "A multimodal AI model integrated with Google’s ecosystem, excelling in text, image, audio, and video processing. Ideal for productivity tools and complex problem-solving.",
      type: "Tool",
      rating: 4.7,
      author: "Google",
      category: "ai",
      tags: ["AI", "LLM", "Multimodal", "Code Generation", "Productivity"],
      url: "https://deepmind.google/technologies/gemini/",
      isPremium: true,
      platform: "Web, API, Google Services",
      note: "Available via Google’s Bard and Vertex AI. Free preview tiers, with API pricing expected to be competitive.",
      thumbnailUrl: "https://images.unsplash.com/photo-1618773928121-c3222922b9f3",
      logoUrl: "https://st1.techlusive.in/wp-content/uploads/2024/09/Gemini.jpg?impolicy=Medium_Widthonly&w=400"
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
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Perplexity_AI_logo.svg/500px-Perplexity_AI_logo.svg.png'
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
    logoUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/330px-Claude_AI_logo.svg.png'
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
  },
   {
    title: "Brain.js",
    description: "A lightweight JavaScript library for building and training neural networks in the browser or Node.js, with a simple API for tasks like pattern recognition.",
    type: 'Tool' as const,
    rating: 4,
    author: "Brain.js Community",
    category: "ai",
    tags: ["AI", "Machine Learning", "Neural Networks", "JavaScript", "Browser ML"],
    url: "https://brain.js.org/",
    isPremium: false,
    platform: "Browser & Node.js",
    note: "Open-source and free. Great for small-scale ML projects.",
    thumbnailUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
    logoUrl: "https://brain.js.org/favicon.ico"
  },
  {
    title: "V0 by Vercel",
    description: "An AI-powered tool for generating UI components and layouts from text prompts, ideal for React and Next.js development.",
    type: 'Tool' as const,
    rating: 5,
    author: "Vercel",
    category: "ai",
    tags: ["AI", "UI Generation", "JavaScript", "React", "Creative Tools"],
    url: "https://v0.dev/",
    isPremium: true,
    platform: "Web",
    note: "Free tier with 100,000 tokens daily; premium for unlimited use. Perfect for rapid UI prototyping.",
    thumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAXVBMVEUAAAD///84ODjx8fG4uLhhYWH39/dGRkaVlZVDQ0PGxsbl5eUgICAxMTFQUFB7e3sTExPW1tafn59zc3OKioqqqqrd3d0oKCiwsLDNzc1tbW2Dg4O/v79bW1s9PT1CnBjoAAABYUlEQVRoge3YW3aCQBCEYUsQVBCCRlFz2f8yTaKTcJOZaHfzUv8GvuM5lDMwmzHGGGOMMcYYY4yxsdLlRHCM1SRuAawngSsAiwnc3ZeLbAI4+obxau4uf1wk1m6OW3tjOHYwNqZu8evi3RSu/mDTSZUNFwc7N4+asOGkti0XUW3krpI2jKMRvEa3wsRd9FycTOBDH8bZwH0bcE1Oqe6TdU3/FrQfdAFtt77jqk+qPyVXquoOTMmlO6mhKbl2iu7glFzZi5pbR2Ow4qTuTelWonULSsddvVvQyQfjQ8U9e11UKnDmh1EquMsAF5G8mw+fSt224vAxyAWk/0U2gS5iYbjyk7dkL367YFd4UiFTcklOKmhKriwXc+fjp1I3uUnFfqxZIvX5q/Bb7aROqfApuWTe1Us/1E3mxeJ/T9Y1iXf1rZ/pJ/D5q44eKXl+Uvnn/KGe/8mMMcYYY4wxxhhjYl0ANZcLq5Ha9CYAAAAASUVORK5CYII="
  },
  {
    title: "DeepCode",
    description: "An AI-powered code review tool that analyzes JavaScript codebases to suggest improvements and detect vulnerabilities.",
    type: 'Tool' as const,
    rating: 4,
    author: "DeepCode",
    category: "ai",
    tags: ["AI", "Code Review", "JavaScript", "Security", "Developer Tools"],
    url: "https://www.deepcode.ai/",
    isPremium: true,
    platform: "Web, GitHub, IDEs",
    note: "Free for open-source projects; premium for private repos. Ensures secure JavaScript code.",
    thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-ffd91a31e4e8",
    logoUrl: "https://snyk.io/_next/static/media/default-blog.f4eb278b.svg"
  }
]

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
      <section className="bg-gradient-to-r from-tech-indigo to-tech-purple text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4 badge-responsive">Development & AI Tools</Badge>
          <h1 className="responsive-heading font-bold mb-4">Essential Tools for Developers</h1>
          <p className="responsive-text max-w-2xl mx-auto mb-6 text-blue-100">
            Discover the best development and AI tools to enhance your workflow, productivity, and innovation.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="relative w-full sm:w-80 md:w-96 search-responsive">
              <Search className="absolute top-3 left-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input 
                placeholder="Search tools..." 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                className="pl-10 input-responsive" 
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
                <a href="https://youtu.be/yHk7Vavmc7Q?si=MWVSCiRH-uXv9MP-" className="flex items-center gap-2">
                  <Button className="bg-white text-tech-blue hover:bg-blue-50">
                    Explore AI Guides
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;

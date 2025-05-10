
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, BookOpen, Video, Code, Download, GitBranch, Youtube } from 'lucide-react';
import ResourceCard from '@/components/ResourceCard';
const resources = [
// Tutorials
{
  title: 'HTML & CSS Crash Course',
  description: 'A beginner-friendly guide to building your first webpage with HTML and CSS.',
  type: 'Tutorial' as const,
  rating: 5,
  author: 'Web Dev Simplified',
  category: 'tutorials',
  tags: ['HTML', 'CSS', 'Web Development'],
  url: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
  isPremium: false,
  platform: 'YouTube',
  note: 'Free tutorial series.'
}, {
  title: 'JavaScript for Absolute Beginners',
  description: 'Start your JavaScript journey with this easy-to-follow tutorial series.',
  type: 'Tutorial' as const,
  rating: 4,
  author: 'Programming with Mosh',
  category: 'tutorials',
  tags: ['JavaScript', 'Web Development', 'Beginner'],
  url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
  isPremium: false,
  platform: 'YouTube',
  note: 'Free; premium versions at https://codewithmosh.com/.'
}, {
  title: 'Python in 100 Days',
  description: 'A comprehensive tutorial series to master Python programming from zero to hero.',
  type: 'Tutorial' as const,
  rating: 5,
  author: 'Angela Yu',
  category: 'tutorials',
  tags: ['Python', 'Programming', 'Complete Guide'],
  url: 'https://www.udemy.com/course/100-days-of-code/',
  isPremium: true,
  platform: 'Udemy',
  note: 'Premium course, requires purchase.'
},
// Videos
{
  title: 'React Crash Course 2024',
  description: 'Learn React.js fundamentals in this in-depth video tutorial for beginners.',
  type: 'Video' as const,
  rating: 5,
  author: 'Traversy Media',
  category: 'videos',
  tags: ['React', 'JavaScript', 'Frontend'],
  url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
  isPremium: false,
  platform: 'YouTube',
  note: 'Free; check for 2024 updates on Traversy Media\'s channel.'
}, {
  title: 'Git & GitHub - The Complete Guide',
  description: 'Master version control with Git and GitHub in this comprehensive video course.',
  type: 'Video' as const,
  rating: 4,
  author: 'FreeCodeCamp',
  category: 'videos',
  tags: ['Git', 'GitHub', 'Version Control'],
  url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
  isPremium: false,
  platform: 'YouTube',
  note: 'Free resource.'
},
// YouTube Playlists - New Section
{
  title: 'HTML & CSS Crash Course Playlist',
  description: 'A beginner-friendly guide to building your first webpage with HTML and CSS. This playlist covers the essentials of HTML structure and CSS styling, perfect for those starting their web development journey.',
  type: 'Playlist' as const,
  rating: 5,
  author: 'Web Dev Simplified',
  category: 'playlists',
  tags: ['HTML', 'CSS', 'Web Development', 'Playlist'],
  url: 'https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8SV8jiOr6pvm37QnOZdG9W',
  isPremium: false,
  platform: 'YouTube',
  note: 'This playlist includes tutorials like "Learn HTML & CSS – Full Course for Beginners" and related videos from Web Dev Simplified\'s channel.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
}, {
  title: 'JavaScript for Absolute Beginners Playlist',
  description: 'Start your JavaScript journey with this easy-to-follow tutorial series. Designed for beginners, it covers core JavaScript concepts like variables, functions, and DOM manipulation in a clear, engaging way.',
  type: 'Playlist' as const,
  rating: 4,
  author: 'Programming with Mosh',
  category: 'playlists',
  tags: ['JavaScript', 'Web Development', 'Beginner', 'Playlist'],
  url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlz3_FPXwbHvo0KzKo9Wz0dW',
  isPremium: false,
  platform: 'YouTube',
  note: 'Includes Mosh\'s free JavaScript tutorials, such as "JavaScript Tutorial for Beginners." Additional premium content may be available on his website.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
}, {
  title: 'React Crash Course 2024 Playlist',
  description: 'Learn React.js fundamentals in this in-depth video tutorial series for beginners. Covers components, props, state, and hooks to build dynamic user interfaces.',
  type: 'Playlist' as const,
  rating: 5,
  author: 'Traversy Media',
  category: 'playlists',
  tags: ['React', 'JavaScript', 'Frontend', 'Playlist'],
  url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbYeckUaD1S8e0emc4r9r_al',
  isPremium: false,
  platform: 'YouTube',
  note: 'Traversy Media\'s React tutorials, including the 2024 crash course, are free on YouTube. Check for the latest videos in the playlist for updates.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
}, {
  title: 'Git & GitHub - The Complete Guide Playlist',
  description: 'Master version control with Git and GitHub in this comprehensive video course. Learn branching, merging, pull requests, and collaboration workflows for real-world projects.',
  type: 'Playlist' as const,
  rating: 5,
  author: 'FreeCodeCamp',
  category: 'playlists',
  tags: ['Git', 'GitHub', 'Version Control', 'Playlist'],
  url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbkzvvpY12jH4BxNEjP7B4U3',
  isPremium: false,
  platform: 'YouTube',
  note: 'FreeCodeCamp\'s Git and GitHub tutorials are free and include the popular "Git and GitHub for Beginners" crash course.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
}, {
  title: 'VS Code for Beginners Playlist',
  description: 'Set up and customize Visual Studio Code for an optimal coding experience. This series covers extensions, debugging, and productivity tips for beginners.',
  type: 'Playlist' as const,
  rating: 5,
  author: 'Microsoft Dev Team',
  category: 'playlists',
  tags: ['VS Code', 'IDE', 'Productivity', 'Playlist'],
  url: 'https://www.youtube.com/playlist?list=PLlrxD0HtieHje-_8OLUGM3Y3jT3h2wfwK',
  isPremium: false,
  platform: 'YouTube',
  note: 'Microsoft\'s official YouTube channel offers free VS Code tutorials. This playlist includes beginner-friendly content from the Microsoft Developer team.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
}, {
  title: 'Chrome DevTools Deep Dive Playlist',
  description: 'Learn how to leverage Chrome DevTools for debugging and optimizing web applications. Covers inspecting elements, analyzing network activity, and improving performance.',
  type: 'Playlist' as const,
  rating: 4,
  author: 'Google Developers',
  category: 'playlists',
  tags: ['DevTools', 'Debugging', 'Web Development', 'Playlist'],
  url: 'https://www.youtube.com/playlist?list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9',
  isPremium: false,
  platform: 'YouTube',
  note: 'Google Chrome Developers\' YouTube channel provides free DevTools tutorials, including deep dives into debugging and performance tools.',
  thumbnailUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
},
// Tools - IDEs
{
  title: 'VS Code for Beginners',
  description: 'Set up and customize Visual Studio Code for optimal coding experience.',
  type: 'Tool' as const,
  rating: 5,
  author: 'Microsoft Dev Team',
  category: 'tools',
  tags: ['VS Code', 'IDE', 'Productivity'],
  url: 'https://learn.microsoft.com/en-us/training/paths/get-started-vscode/',
  isPremium: false,
  platform: 'Microsoft Learn',
  note: 'Free learning path.'
}, {
  title: 'Chrome DevTools Deep Dive',
  description: 'Learn how to leverage browser developer tools for debugging and optimization.',
  type: 'Tool' as const,
  rating: 4,
  author: 'Google Developers',
  category: 'tools',
  tags: ['DevTools', 'Debugging', 'Web Development'],
  url: 'https://developer.chrome.com/docs/devtools/',
  isPremium: false,
  platform: 'Google Developers',
  note: 'Free; video tutorials at https://www.youtube.com/c/GoogleChromeDevelopers.'
},
// Newly Added IDE Tools
{
  title: 'JetBrains WebStorm',
  description: 'A powerful JavaScript IDE with intelligent code assistance and debugging tools.',
  type: 'Tool' as const,
  rating: 5,
  author: 'JetBrains',
  category: 'tools',
  tags: ['IDE', 'JavaScript', 'Web Development'],
  url: 'https://www.jetbrains.com/webstorm/',
  isPremium: true,
  platform: 'JetBrains',
  note: 'Free trial available; student licenses free.'
}, {
  title: 'Sublime Text',
  description: 'A sophisticated text editor for code with a fast and customizable interface.',
  type: 'Tool' as const,
  rating: 4,
  author: 'Sublime HQ',
  category: 'tools',
  tags: ['Text Editor', 'Code Editor', 'Productivity'],
  url: 'https://www.sublimetext.com/',
  isPremium: true,
  platform: 'Sublime HQ',
  note: 'Free evaluation; license purchase required for continued use.'
}, {
  title: 'Atom',
  description: 'A hackable text editor for the 21st century with integrated package management.',
  type: 'Tool' as const,
  rating: 4,
  author: 'GitHub',
  category: 'tools',
  tags: ['Text Editor', 'Open Source', 'GitHub'],
  url: 'https://atom.io/',
  isPremium: false,
  platform: 'GitHub',
  note: 'Free and open-source.'
},
// Newly Added Git & GitHub Tools
{
  title: 'GitHub Desktop',
  description: 'Simplify your Git workflow with a visual interface for common Git operations.',
  type: 'Tool' as const,
  rating: 5,
  author: 'GitHub',
  category: 'tools',
  tags: ['Git', 'GitHub', 'Version Control'],
  url: 'https://desktop.github.com/',
  isPremium: false,
  platform: 'GitHub',
  note: 'Free tool for all platforms.'
}, {
  title: 'GitKraken',
  description: 'A powerful Git GUI client for Windows, Mac & Linux with intuitive visualization.',
  type: 'Tool' as const,
  rating: 4,
  author: 'Axosoft',
  category: 'tools',
  tags: ['Git', 'GUI', 'Version Control'],
  url: 'https://www.gitkraken.com/',
  isPremium: true,
  platform: 'Axosoft',
  note: 'Free version available; Pro features require subscription.'
}, {
  title: 'Sourcetree',
  description: 'A free Git client for Windows and Mac with a simple visual interface.',
  type: 'Tool' as const,
  rating: 4,
  author: 'Atlassian',
  category: 'tools',
  tags: ['Git', 'GUI', 'Atlassian'],
  url: 'https://www.sourcetreeapp.com/',
  isPremium: false,
  platform: 'Atlassian',
  note: 'Free Git client from Atlassian.'
},
// New IDE Tools
{
  title: 'Visual Studio Code',
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
// Development Tools
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
},
// Cheatsheets
{
  title: 'Ultimate HTML Cheat Sheet',
  description: 'A comprehensive reference guide for HTML tags, attributes, and best practices.',
  type: 'Cheatsheet' as const,
  rating: 5,
  author: 'WebDevHub',
  category: 'cheatsheets',
  tags: ['HTML', 'Reference', 'Web Development'],
  url: 'https://www.geeksforgeeks.org/html-cheat-sheet-a-basic-guide-to-html/',
  isPremium: false,
  platform: 'GeeksforGeeks',
  note: 'Free; original WebDevHub sheet may require searching their site.'
}, {
  title: 'CSS Flexbox & Grid Cheatsheet',
  description: 'Visual guide to CSS layout techniques with Flexbox and Grid properties.',
  type: 'Cheatsheet' as const,
  rating: 5,
  author: 'CSS Tricks',
  category: 'cheatsheets',
  tags: ['CSS', 'Flexbox', 'Grid', 'Layout'],
  url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
  isPremium: false,
  platform: 'CSS Tricks',
  note: 'Free resources. Grid guide: https://css-tricks.com/snippets/css/complete-guide-grid/'
},
// Git & GitHub Cheatsheets
{
  title: 'Git Command Line Cheatsheet',
  description: 'Quick reference for common Git command line operations and workflows.',
  type: 'Cheatsheet' as const,
  rating: 5,
  author: 'GitHub',
  category: 'cheatsheets',
  tags: ['Git', 'Command Line', 'Version Control'],
  url: 'https://education.github.com/git-cheat-sheet-education.pdf',
  isPremium: false,
  platform: 'GitHub Education',
  note: 'Free downloadable PDF.'
},
// Courses
{
  title: 'The Complete Web Development Bootcamp',
  description: 'Comprehensive course covering frontend, backend, databases, and deployment.',
  type: 'Course' as const,
  rating: 5,
  author: 'Dr. Angela Yu',
  category: 'courses',
  tags: ['Full Stack', 'Web Development', 'MERN'],
  url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
  isPremium: true,
  platform: 'Udemy',
  note: 'Premium course, requires purchase.'
}, {
  title: 'Data Structures & Algorithms Masterclass',
  description: 'Learn essential computer science concepts with practical coding exercises.',
  type: 'Course' as const,
  rating: 4,
  author: 'Colt Steele',
  category: 'courses',
  tags: ['Algorithms', 'Data Structures', 'Computer Science'],
  url: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
  isPremium: true,
  platform: 'Udemy',
  note: 'Premium course, requires purchase.'
}];
const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);

  // Extract unique tags from resources
  const allTags = Array.from(new Set(resources.flatMap(resource => resource.tags)));

  // Filter resources based on search, tag, and type
  const filteredResources = resources.filter(resource => {
    // Search filter
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || resource.description.toLowerCase().includes(searchQuery.toLowerCase()) || resource.author.toLowerCase().includes(searchQuery.toLowerCase());

    // Tag filter
    const matchesTag = tagFilter ? resource.tags.includes(tagFilter) : true;

    // Type filter (based on tab)
    const matchesType = typeFilter ? resource.type === typeFilter : true;
    return matchesSearch && matchesTag && matchesType;
  });
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-blue to-tech-lightblue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">Learning Materials</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Resources Library</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 text-blue-100">
            Discover free learning materials to accelerate your tech journey.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Search resources..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">Filter by tag:</span>
              <div className="flex flex-wrap gap-2">
                <Button variant={tagFilter === null ? 'secondary' : 'outline'} size="sm" onClick={() => setTagFilter(null)}>
                  All
                </Button>
                {allTags.slice(0, 6).map(tag => <Button key={tag} variant={tagFilter === tag ? 'secondary' : 'outline'} size="sm" onClick={() => setTagFilter(tag)}>
                    {tag}
                  </Button>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={value => setTypeFilter(value === 'all' ? null : value as any)}>
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="flex-nowrap">
                <TabsTrigger value="all" className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" /> All Resources
                </TabsTrigger>
                <TabsTrigger value="Tutorial" className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" /> Tutorials
                </TabsTrigger>
                <TabsTrigger value="Video" className="flex items-center gap-1">
                  <Video className="h-4 w-4" /> Videos
                </TabsTrigger>
                <TabsTrigger value="Playlist" className="flex items-center gap-1">
                  <Youtube className="h-4 w-4" /> Playlists
                </TabsTrigger>
                <TabsTrigger value="Tool" className="flex items-center gap-1">
                  <Code className="h-4 w-4" /> Development Tools
                </TabsTrigger>
                <TabsTrigger value="Cheatsheet" className="flex items-center gap-1">
                  <Download className="h-4 w-4" /> Cheat Sheets
                </TabsTrigger>
                <TabsTrigger value="Course" className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" /> Courses
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.length > 0 ? filteredResources.map((resource, index) => <ResourceCard key={index} title={resource.title} description={resource.description} type={resource.type} rating={resource.rating} author={resource.author} url={resource.url} isPremium={resource.isPremium} platform={resource.platform} note={resource.note} thumbnailUrl={resource.thumbnailUrl} />) : <div className="col-span-3 text-center py-12">
                    <p className="text-xl text-gray-500">No resources found matching your criteria.</p>
                    <Button variant="outline" className="mt-4" onClick={() => {
                  setSearchQuery('');
                  setTagFilter(null);
                  setTypeFilter(null);
                }}>
                      Reset Filters
                    </Button>
                  </div>}
              </div>
            </TabsContent>

            {/* Other tabs work through the filtering logic above */}
            <TabsContent value="Tutorial" className="mt-0"></TabsContent>
            <TabsContent value="Video" className="mt-0"></TabsContent>
            <TabsContent value="Playlist" className="mt-0"></TabsContent>
            <TabsContent value="Tool" className="mt-0"></TabsContent>
            <TabsContent value="Cheatsheet" className="mt-0"></TabsContent>
            <TabsContent value="Course" className="mt-0"></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tech-indigo to-tech-purple text-white rounded-xl p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Have a resource to share?</h3>
                <p className="text-blue-100">
                  Contribute to our resources library and help others on their learning journey. 
                  Submit tutorials, videos, tools, or any other valuable learning materials.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Button className="bg-white text-tech-indigo hover:bg-blue-50">
                  Submit a Resource
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Resources;

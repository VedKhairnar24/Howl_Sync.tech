import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, BookOpen, Video, Code, Download, GitBranch } from 'lucide-react';
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);

  // Extract unique tags from resources
  const allTags = Array.from(
    new Set(resources.flatMap((resource) => resource.tags))
  );

  // Filter resources based on search, tag, and type
  const filteredResources = resources.filter((resource) => {
    // Search filter
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase());

    // Tag filter
    const matchesTag = tagFilter
      ? resource.tags.includes(tagFilter)
      : true;
    
    // Type filter (based on tab)
    const matchesType = typeFilter
      ? resource.type === typeFilter
      : true;
    
    return matchesSearch && matchesTag && matchesType;
  });

  return (
    <div>
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
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                {allTags.slice(0, 6).map((tag) => (
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

      {/* Resources Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={(value) => setTypeFilter(value === 'all' ? null : value as any)}>
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
                <TabsTrigger value="Tool" className="flex items-center gap-1">
                  <Code className="h-4 w-4" /> Tools & IDEs
                </TabsTrigger>
                <TabsTrigger value="Cheatsheet" className="flex items-center gap-1">
                  <Download className="h-4 w-4" /> Cheat Sheets
                </TabsTrigger>
                <TabsTrigger value="Course" className="flex items-center gap-1">
                  <Code className="h-4 w-4" /> Courses
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource, index) => (
                    <ResourceCard
                      key={index}
                      title={resource.title}
                      description={resource.description}
                      type={resource.type}
                      rating={resource.rating}
                      author={resource.author}
                      url={resource.url}
                      isPremium={resource.isPremium}
                      platform={resource.platform}
                      note={resource.note}
                    />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-xl text-gray-500">No resources found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery('');
                        setTagFilter(null);
                        setTypeFilter(null);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Other tabs work through the filtering logic above */}
            <TabsContent value="Tutorial" className="mt-0"></TabsContent>
            <TabsContent value="Video" className="mt-0"></TabsContent>
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
    </div>
  );
};

export default Resources;

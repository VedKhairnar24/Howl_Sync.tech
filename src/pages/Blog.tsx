
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Users } from "lucide-react";
import TeamMember from "../components/TeamMember";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React: A Beginner's Guide",
    excerpt: "Learn the fundamentals of React, the popular JavaScript library for building user interfaces. This guide covers the core concepts every beginner should know.",
    author: "Sarah Johnson",
    date: "May 8, 2025",
    readTime: "8 min read",
    category: "Frontend Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "The Complete Guide to CSS Grid Layout",
    excerpt: "Master CSS Grid Layout with this comprehensive guide. Learn how to create complex web layouts with ease using this powerful CSS feature.",
    author: "Michael Chen",
    date: "May 2, 2025",
    readTime: "10 min read",
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8",
    tags: ["CSS", "Web Design", "Layout"]
  },
  {
    id: 3,
    title: "Understanding Asynchronous JavaScript",
    excerpt: "Dive deep into asynchronous JavaScript. Learn about Promises, async/await, and how to handle asynchronous operations effectively.",
    author: "Emily Rodriguez",
    date: "April 27, 2025",
    readTime: "12 min read",
    category: "JavaScript",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    tags: ["JavaScript", "Async", "Promises"]
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to create web applications that are accessible to everyone. Discover best practices, tools, and techniques for implementing web accessibility.",
    author: "David Williams",
    date: "April 20, 2025",
    readTime: "9 min read", 
    category: "Accessibility",
    imageUrl: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec",
    tags: ["Accessibility", "Web Development", "Inclusive Design"]
  },
  {
    id: 5,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "Transition from JavaScript to TypeScript with this comprehensive introduction. Learn how TypeScript enhances your development workflow.",
    author: "Alex Turner",
    date: "April 15, 2025",
    readTime: "11 min read",
    category: "TypeScript",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["TypeScript", "JavaScript", "Web Development"]
  },
  {
    id: 6,
    title: "Optimizing React Performance",
    excerpt: "Discover techniques and best practices for optimizing the performance of your React applications. Make your apps faster and more efficient.",
    author: "Sophia Martinez",
    date: "April 8, 2025",
    readTime: "14 min read",
    category: "React",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
    tags: ["React", "Performance", "Optimization"]
  }
];

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'posts' | 'about'>('posts');
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">TechJourney Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Insights, tutorials, and resources to help you on your tech journey. Explore our latest articles below.
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mt-8 mb-4 border-b">
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'posts' ? 'text-tech-blue border-b-2 border-tech-blue' : 'text-gray-500'}`}
            onClick={() => setActiveTab('posts')}
          >
            Articles
          </button>
          <button 
            className={`px-6 py-3 font-medium flex items-center gap-2 ${activeTab === 'about' ? 'text-tech-blue border-b-2 border-tech-blue' : 'text-gray-500'}`}
            onClick={() => setActiveTab('about')}
          >
            <Users size={18} />
            About Us
          </button>
        </div>
      </div>

      {activeTab === 'posts' ? (
        <>
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative flex items-center">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-2"
                  onClick={() => setSearchQuery('')}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card key={post.id} className="card-hover overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{post.category}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-tech-blue transition-colors">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <span className="text-sm text-gray-600">By {post.author}</span>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                <h3 className="text-lg font-medium text-gray-700">No articles found matching your search.</h3>
                <p className="text-gray-500 mt-2">Try a different search term or browse all articles.</p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => setSearchQuery('')}
                >
                  View all articles
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <div className="animate-fade-in">
          {/* About Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-4 rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
                    alt="Syntax Squad Logo" 
                    className="h-24 w-24 object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Syntax Squad</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are a dynamic duo of passionate developers driven by innovation and a shared commitment to building impactful, user-centric digital solutions. With expertise spanning full-stack web development and core programming, our team blends creativity with technical precision.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <TeamMember 
              name="Alex Morgan"
              role="Full Stack Developer"
              bio="An innovative web developer proficient in Java, C, Data Structures, HTML, CSS, JavaScript, PHP, and MySQL—skilled at crafting clean, scalable code and delivering seamless digital experiences."
              imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              socials={{
                github: "https://github.com",
                twitter: "https://twitter.com",
                linkedin: "https://linkedin.com"
              }}
            />
            <TeamMember 
              name="Jordan Taylor"
              role="Python Developer"
              bio="A Python developer with strong problem-solving skills, capable of designing efficient algorithms and backend systems that power intelligent applications."
              imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              socials={{
                github: "https://github.com",
                linkedin: "https://linkedin.com"
              }}
            />
          </div>

          {/* Team Description */}
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-4">
              Together, we bring a balanced mix of frontend design, backend logic, and algorithmic thinking—ready to tackle any challenge with a focus on clean code, performance, and user experience.
            </p>
            <p className="text-gray-700">
              Adaptable, curious, and solution-oriented, we thrive in collaborative environments and are excited to innovate under pressure.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

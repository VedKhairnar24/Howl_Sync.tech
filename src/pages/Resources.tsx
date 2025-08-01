import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, BookOpen, Video, Code, Download, GitBranch, Youtube } from 'lucide-react';
import ResourceCard from '@/components/ResourceCard';
const resources: Array<{
  title: string;
  description: string;
  type:'Article' | 'Video' | 'Tutorial' | 'Tool' | 'Cheatsheet' | 'Course' | 'Playlist';
  rating: number;
  author: string;
  category: string;
  tags: string[];
  url: string;
  isPremium: boolean;
  platform: string;
  note: string;
  thumbnailUrl?: string;
}> = [
  // Tutorials
  {
    title: "Git and GitHub for Beginners - Crash Course",
    description: "A beginner-friendly playlist covering the essentials of Git and GitHub, including setup, commits, branching, and collaboration on projects.",
    type: "Playlist",
    rating: 4.9,
    author: "freeCodeCamp.org",
    category: "playlists",
    tags: ["Git", "GitHub", "Version Control", "Beginner", "Playlist"],
    url: "https://youtu.be/RGOj5yH7evk?si=3kQzY7pL2zY8vW3",
    isPremium: false,
    platform: "YouTube",
    note: "Free crash course by freeCodeCamp, ideal for beginners learning version control.",
    thumbnailUrl: "https://i.ytimg.com/vi/RGOj5yH7evk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFryq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8z3z7k3z5z7w8X9kQzY7pL2zY8vW3"
  },
  {
    title: 'JavaScript for Absolute Beginners Playlist',
    description: 'Start your JavaScript journey with this easy-to-follow tutorial series. Designed for beginners, it covers core JavaScript concepts like variables, functions, and DOM manipulation in a clear, engaging way.',
    type: 'Playlist',
    rating: 4,
    author: 'Programming with Mosh',
    category: 'playlists',
    tags: ['JavaScript', 'Web Development', 'Beginner', 'Playlist'],
    url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlz3_FPXwbHvo0KzKo9Wz0dW',
    isPremium: false,
    platform: 'YouTube',
    note: 'Includes Mosh\'s free JavaScript tutorials, such as "JavaScript Tutorial for Beginners." Additional premium content may be available on his website.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  },
  {
    title: 'React Crash Course 2024 Playlist',
    description: 'Learn React.js fundamentals in this in-depth video tutorial series for beginners. Covers components, props, state, and hooks to build dynamic user interfaces.',
    type: 'Playlist',
    rating: 5,
    author: 'Traversy Media',
    category: 'playlists',
    tags: ['React', 'JavaScript', 'Frontend', 'Playlist'],
    url: 'https://youtu.be/LDB4uaJ87e0?si=yfvTTPyJy_W45pY3',
    isPremium: false,
    platform: 'YouTube',
    note: 'Traversy Media\'s React tutorials, including the 2024 crash course, are free on YouTube. Check for the latest videos in the playlist for updates.',
    thumbnailUrl: 'https://i.ytimg.com/vi/LDB4uaJ87e0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBV7kUBo-v5J9CmhIcgwpw1LNDplQ'
  },
  {
      title: "Git & GitHub - The Complete Guide Playlist",
      description: "Master version control with Git and GitHub in this comprehensive video course. Learn branching, merging, pull requests, and collaboration workflows for real-world projects.",
      type: "Playlist",
      rating: 5,
      author: "Apna College",
      category: "playlists",
      tags: ["Git", "GitHub", "Version Control", "Playlist"],
      url: "https://youtu.be/Ez8F0nW6S-w?si=5oE6_p2rvkMv9Q4i",
      isPremium: false,
      platform: "YouTube",
      note: "FreeCodeCamp's Git and GitHub tutorials are free and include the popular 'Git and GitHub for Beginners' crash course.",
      thumbnailUrl: "https://i.ytimg.com/vi/Ez8F0nW6S-w/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA6fPCgrA7WtxyXnkmP8p92K569Vw"
    },
  {
    title: "Git for Professionals Tutorial - Tools & Concepts",
    description: "A detailed playlist diving into advanced Git concepts like branching strategies, rebasing, and collaborative workflows on GitHub for professional development.",
    type: "Playlist",
    rating: 4.7,
    author: "freeCodeCamp.org",
    category: "playlists",
    tags: ["Git", "GitHub", "Version Control", "Advanced", "Playlist"],
    url: "https://youtu.be/Uszj_k0DGsg?si=O2e5yK3z5z7w8X9",
    isPremium: false,
    platform: "YouTube",
    note: "Free playlist for developers looking to go beyond the basics of Git and GitHub.",
    thumbnailUrl: "https://i.ytimg.com/vi/Uszj_k0DGsg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFryq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8z3z7k3z5z7w8X9kQzY7pL2zY8vW3"
  },
  {
    title: "Git & GitHub Crash Course For Beginners",
    description: "A concise playlist teaching the fundamentals of Git and GitHub, including commits, branches, and pull requests, with hands-on examples.",
    type: "Playlist",
    rating: 4.6,
    author: "Traversy Media",
    category: "playlists",
    tags: ["Git", "GitHub", "Version Control", "Beginner", "Playlist"],
    url: "https://youtu.be/SWYqp7iY_Tc?si=9kQzX7pL2zY8vW3",
    isPremium: false,
    platform: "YouTube",
    note: "Free crash course with practical examples for quick learning.",
    thumbnailUrl: "https://i.ytimg.com/vi/SWYqp7iY_Tc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFryq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8z3z7k3z5z7w8X9kQzY7pL2zY8vW3"
  },
  {
    title: 'HTML & CSS Crash Course',
    description: 'Start your web development career with HTML/CSS! This beginner-friendly tutorial covers the essentials..',
    type: 'Tutorial',
    rating: 5,
    author: 'Programming with Mosh',
    category: 'tutorials',
    tags: ['HTML', 'CSS', 'Web Development', 'Beginner'],
    url: 'https://youtu.be/qz0aGYrrlhU?si=irFRyNngUFxNW7Of',
    isPremium: false,
    platform: 'YouTube',
    note: 'Free tutorial series.'
  },
  {
    title: 'JavaScript for Absolute Beginners',
    description: 'Start your JavaScript journey with this easy-to-follow tutorial series.',
    type: 'Tutorial',
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
    type: 'Tutorial',
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
    type: 'Video',
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
    type: 'Video',
    rating: 4,
    author: 'FreeCodeCamp',
    category: 'videos',
    tags: ['Git', 'GitHub', 'Version Control'],
    url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    isPremium: false,
    platform: 'YouTube',
    note: 'Free resource.'
  },
  // YouTube Playlists
  {
    title: 'HTML & CSS Crash Course Playlist',
    description: 'A beginner-friendly guide to building your first webpage with HTML and CSS. This playlist covers the essentials of HTML structure and CSS styling, perfect for those starting their web development journey.',
    type: 'Playlist',
    rating: 5,
    author: 'Web Dev Simplified',
    category: 'playlists',
    tags: ['HTML', 'CSS', 'Web Development', 'Playlist'],
    url: 'https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8SV8jiOr6pvm37QnOZdG9W',
    isPremium: false,
    platform: 'YouTube',
    note: 'This playlist includes tutorials like "Learn HTML & CSS – Full Course for Beginners" and related videos from Web Dev Simplified\'s channel.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb'
  },
  {
      title: "HTML & CSS Crash Course",
      description: "Start your web development career with HTML/CSS! This beginner-friendly tutorial covers the essentials.",
      type: "Tutorial",
      rating: 5,
      author: "Programming with Mosh",
      category: "tutorials",
      tags: ["HTML", "CSS", "Web Development", "Beginner"],
      url: "https://youtu.be/qz0aGYrrlhU?si=irFRyNngUFxNW7Of",
      isPremium: false,
      platform: "YouTube",
      note: "Free tutorial series."
    },
    {
      title: "HTML & CSS Full Course - Beginner to Pro",
      description: "A comprehensive course covering HTML and CSS from scratch, including layouts, responsive design, and modern techniques like Flexbox and CSS Grid.",
      type: "Tutorial",
      rating: 4.8,
      author: "SuperSimpleDev",
      category: "tutorials",
      tags: ["HTML", "CSS", "Web Development", "Beginner", "Responsive Design"],
      url: "https://youtu.be/G3e-cpL7ofc?si=2h0QzB7Z8V7lXz9g",
      isPremium: false,
      platform: "YouTube",
      note: "Free course with certificate of completion available."
    },
    {
      title: "CSS Tutorial – Full Course for Beginners",
      description: "In-depth course covering all key features of CSS, including selectors, layouts, and advanced styling techniques, perfect for beginners.",
      type: "Tutorial",
      rating: 4.9,
      author: "freeCodeCamp.org",
      category: "tutorials",
      tags: ["CSS", "Web Development", "Beginner", "Styling"],
      url: "https://youtu.be/OXO132Q04Y?si=7k5gYpL8zXz7k1z",
      isPremium: false,
      platform: "YouTube",
      note: "Free comprehensive CSS course by a non-profit organization."
    },
    {
      title: "HTML Full Course - Build a Website Tutorial",
      description: "Learn HTML5 basics and build a website from scratch in this beginner-friendly course, covering structure, elements, and more.",
      type: "Tutorial",
      rating: 4.7,
      author: "freeCodeCamp.org",
      category: "tutorials",
      tags: ["HTML", "Web Development", "Beginner", "Website Building"],
      url: "https://youtu.be/pQN-pnXPaVg?si=3m9zYvX1z2qW8l0",
      isPremium: false,
      platform: "YouTube",
      note: "Free course with hands-on website-building project."
    },
    {
      title: "HTML and CSS Tutorial - Create a Website for Beginners",
      description: "A complete tutorial to learn HTML and CSS by building a band website, focusing on modern design and practical application.",
      type: "Tutorial",
      rating: 4.6,
      author: "Traversy Media",
      category: "tutorials",
      tags: ["HTML", "CSS", "Web Development", "Beginner", "Project-Based"],
      url: "https://youtu.be/Wm6CUkswMCA?si=O2e5yK3z5z7w8X9",
      isPremium: false,
      platform: "YouTube",
      note: "Free project-based tutorial series."
    },
    {
      title: "Learn HTML5 and CSS3 From Scratch - Full Course",
      description: "A beginner-friendly course covering HTML5 and CSS3 essentials, with step-by-step guidance to create responsive websites.",
      type: "Tutorial",
      rating: 4.8,
      author: "Academind",
      category: "tutorials",
      tags: ["HTML5", "CSS3", "Web Development", "Beginner", "Responsive Design"],
      url: "https://youtu.be/mU6anWqZJcc?si=9kQzX7pL2zY8vW3",
      isPremium: false,
      platform: "YouTube",
      note: "Free course with practical examples and responsive design focus."
    },
    
    {
    title: 'VS Code for Beginners Playlist',
    description: 'Set up and customize Visual Studio Code for an optimal coding experience. This series covers extensions, debugging, and productivity tips for beginners.',
    type: 'Playlist',
    rating: 5,
    author: 'Microsoft Dev Team',
    category: 'playlists',
    tags: ['VS Code', 'IDE', 'Productivity', 'Playlist'],
    url: 'https://www.youtube.com/playlist?list=PLlrxD0HtieHje-_8OLUGM3Y3jT3h2wfwK',
    isPremium: false,
    platform: 'YouTube',
    note: 'Microsoft\'s official YouTube channel offers free VS Code tutorials. This playlist includes beginner-friendly content from the Microsoft Developer team.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159'
  },
  {
    title: 'Chrome DevTools Deep Dive Playlist',
    description: 'Learn how to leverage Chrome DevTools for debugging and optimizing web applications. Covers inspecting elements, analyzing network activity, and improving performance.',
    type: 'Playlist',
    rating: 4,
    author: 'Google Developers',
    category: 'playlists',
    tags: ['DevTools', 'Debugging', 'Web Development', 'Playlist'],
    url: 'https://youtu.be/x4q86IjJFag?si=UL_fFto1JPIjHa3F',
    isPremium: false,
    platform: 'YouTube',
    note: 'Google Chrome Developers\' YouTube channel provides free DevTools tutorials, including deep dives into debugging and performance tools.',
    thumbnailUrl: 'https://i.ytimg.com/vi/x4q86IjJFag/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDsINl9tW6sBYqYWRDiiAkL6qNi-A'
  },
  // Tools - IDEs
  {
    title: 'VS Code for Beginners',
    description: 'Set up and customize Visual Studio Code for optimal coding experience.',
    type: 'Tool',
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
    type: 'Tool',
    rating: 4,
    author: 'Google Developers',
    category: 'tools',
    tags: ['DevTools', 'Debugging', 'Web Development'],
    url: 'https://developer.chrome.com/docs/devtools/',
    isPremium: false,
    platform: 'Google Developers',
    note: 'Free; video tutorials at https://www.youtube.com/c/GoogleChromeDevelopers.'
  },
  {
    title: 'JetBrains WebStorm',
    description: 'A powerful JavaScript IDE with intelligent code assistance and debugging tools.',
    type: 'Tool',
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
    type: 'Tool',
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
    type: 'Tool',
    rating: 4,
    author: 'GitHub',
    category: 'tools',
    tags: ['Text Editor', 'Open Source', 'GitHub'],
    url: 'https://atom.io/',
    isPremium: false,
    platform: 'GitHub',
    note: 'Free and open-source.'
  },
  // Git & GitHub Tools
  {
    title: 'GitHub Desktop',
    description: 'Simplify your Git workflow with a visual interface for common Git operations.',
    type: 'Tool',
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
    type: 'Tool',
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
    type: 'Tool',
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
    type: 'Tool',
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
    type: 'Tool',
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
    type: 'Tool',
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
    type: 'Tool',
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
    type: 'Tool',
    rating: 5,
    author: 'Linus Torvalds & Git Community',
    category: 'tools',
    tags: ['Version Control', 'Collaboration', 'Command Line'],
    url: 'https://git-scm.com/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Commands like commit, push, and pull streamline teamwork.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png'
  },
  {
    title: 'GitHub',
    description: 'A platform for hosting and collaborating on Git repositories. It integrates with IDEs like VS Code and WebStorm, supporting pull requests, code reviews, and CI/CD pipelines.',
    type: 'Tool',
    rating: 5,
    author: 'GitHub, Inc. (Microsoft)',
    category: 'tools',
    tags: ['Git', 'Code Hosting', 'Collaboration', 'Open Source'],
    url: 'https://github.com/',
    isPremium: false,
    platform: 'Web',
    note: 'Free for public repositories. Pro plans available for private repositories and additional features.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'
  },
  {
    title: 'Node.js',
    description: 'A runtime for executing JavaScript outside the browser, crucial for React development and server-side scripting. It powers tools like Create React App and supports package management via npm.',
    type: 'Tool',
    rating: 5,
    author: 'Node.js Foundation',
    category: 'tools',
    tags: ['JavaScript', 'Runtime', 'Backend', 'React Development'],
    url: 'https://nodejs.org/',
    isPremium: false,
    platform: 'Cross-platform',
    note: 'Free and open-source. Essential for modern JavaScript and React development.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png'
  },
  {
    title: 'ESLint',
    description: 'A linting tool for identifying and fixing JavaScript and React code issues. It enforces coding standards, improving code quality in projects.',
    type: 'Tool',
    rating: 4,
    author: 'ESLint Team',
    category: 'tools',
    tags: ['Code Quality', 'JavaScript', 'React', 'Linting'],
    url: 'https://eslint.org/',
    isPremium: false,
    platform: 'Node.js Package',
    note: 'Free and open-source. Integrates seamlessly with VS Code and other IDEs.',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/512px-ESLint_logo.svg.png'
  },
  {
    title: 'Prettier',
    description: 'An opinionated code formatter for HTML, CSS, JavaScript, and React. It ensures consistent code style across projects, complementing tutorials like "JavaScript for Absolute Beginners."',
    type: 'Tool',
    rating: 5,
    author: 'Prettier Team',
    category: 'tools',
    tags: ['Code Formatting', 'JavaScript', 'React', 'CSS', 'HTML'],
    url: 'https://prettier.io/',
    isPremium: false,
    platform: 'Node.js Package',
    note: 'Free and open-source. Works as a VS Code extension for automatic formatting.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509967416402-6f41a5c00298'
  },
  // Cheatsheets
  {
    title: 'Ultimate HTML Cheat Sheet',
    description: 'A comprehensive reference guide for HTML tags, attributes, and best practices.',
    type: 'Cheatsheet',
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
    type: 'Cheatsheet',
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
    type: 'Cheatsheet',
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
    type: 'Course',
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
    type: 'Course',
    rating: 4,
    author: 'Colt Steele',
    category: 'courses',
    tags: ['Algorithms', 'Data Structures', 'Computer Science'],
    url: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
    isPremium: true,
    platform: 'Udemy',
    note: 'Premium course, requires purchase.'
  }
];
const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<'Tutorial' | 'Video' | 'Playlist' | 'Tool' | 'Cheatsheet' | 'Course' | null>(null);

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
      <section className="bg-gradient-to-r from-tech-blue to-tech-lightblue text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4 badge-responsive">Learning Materials</Badge>
          <h1 className="responsive-heading font-bold mb-4">Resources Library</h1>
          <p className="responsive-text max-w-2xl mx-auto mb-6 text-blue-100">
            Discover free learning materials to accelerate your tech journey.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96 search-responsive">
              <Search className="absolute top-3 left-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input placeholder="Search resources..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 input-responsive" />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
              <span className="text-sm font-medium">Filter by tag:</span>
              <div className="flex flex-wrap gap-2">
                <Button variant={tagFilter === null ? 'secondary' : 'outline'} size="sm" onClick={() => setTagFilter(null)} className="badge-responsive">
                  All
                </Button>
                {allTags.slice(0, 6).map(tag => <Button key={tag} variant={tagFilter === tag ? 'secondary' : 'outline'} size="sm" onClick={() => setTagFilter(tag)} className="badge-responsive">
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
          <Tabs defaultValue="all" onValueChange={value => setTypeFilter(value === 'all' ? null : value as 'Tutorial' | 'Video' | 'Playlist' | 'Tool' | 'Cheatsheet' | 'Course')}>
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
                  <Code className="h-4 w-4" /> Tools
                </TabsTrigger>
                <TabsTrigger value="Cheatsheet" className="flex items-center gap-1">
                  <Download className="h-4 w-4" /> Cheatsheets
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
               <a href="/about#contact" className="flex items-center gap-2">
                 <Button className="bg-white text-tech-indigo hover:bg-blue-50">
                   Submit a Resource
                 </Button>
               </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Resources;
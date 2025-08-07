
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Filter, HelpCircle } from 'lucide-react';
import ProblemSolutionCard from '@/components/ProblemSolutionCard';

const commonProblems = [
  {
    title: 'How to fix "Uncaught TypeError: Cannot read property of undefined"',
    description: 'I keep getting this error in my JavaScript code and I don\'t understand what it means or how to fix it.',
    categories: ['JavaScript', 'Error Handling', 'Debugging'],
    solution: `This error occurs when you're trying to access a property of an undefined value. For example:

const user = undefined;
console.log(user.name); // Error: Cannot read property 'name' of undefined

To fix this issue:

1. Check if the variable exists before accessing its properties:

if (user) {
  console.log(user.name);
}

2. Use optional chaining (modern JavaScript):

console.log(user?.name);

3. Use a default value with nullish coalescing:

const userName = user?.name ?? 'Unknown';

Always make sure your variables are defined before accessing their properties.`,
    likes: 47,
    comments: 12,
    author: 'JavaScript Mentor',
  },
  {
    title: 'Why won\'t my CSS flexbox center properly?',
    description: 'I\'m trying to center a div inside another div using flexbox, but it\'s not working as expected.',
    categories: ['CSS', 'Flexbox', 'Layout'],
    solution: `To center an element both horizontally and vertically inside a container using flexbox:

.container {
  display: flex;
  justify-content: center; /* horizontal centering */
  align-items: center; /* vertical centering */
  min-height: 300px; /* make sure the container has height */
}

Common mistakes:
1. Not providing a height to the container
2. Using align-content instead of align-items
3. Having conflicting positioning or margin settings

If your flex container is a column, you'll need to swap justify-content and align-items:

.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* horizontal centering */
  justify-content: center; /* vertical centering */
}`,
    likes: 35,
    comments: 8,
    author: 'CSS Expert',
  },
  {
    title: 'How to fix Python "IndentationError"',
    description: 'My Python code keeps showing an IndentationError and I don\'t understand what\'s wrong with my indentation.',
    categories: ['Python', 'Syntax', 'Error Handling'],
    solution: `IndentationError in Python occurs because Python uses indentation to define code blocks instead of curly braces or keywords.

Common causes:
1. Mixing tabs and spaces (most common issue)
2. Inconsistent indentation levels
3. Incorrect indentation after loop or conditional statements

Solutions:
1. Configure your editor to use consistent indentation (preferably 4 spaces)
2. Convert all tabs to spaces or vice versa
3. Make sure every code block has the same indentation level

Example of correct indentation:

def my_function():
    if True:
        print("This is indented correctly")
        if True:
            print("Another level of indentation")
    print("Back to the first level")

Most code editors have a "show whitespace" option that can help identify tab vs. space issues.`,
    likes: 52,
    comments: 15,
    author: 'Python Tutor',
  }
];

const debuggingGuides = [
  {
    title: 'Debugging JavaScript in the Browser',
    description: 'Learn how to use browser developer tools to find and fix JavaScript errors.',
    categories: ['JavaScript', 'Debugging', 'Browser Tools'],
    solution: `# Debugging JavaScript in the Browser

## Using Chrome DevTools

1. Open DevTools: Press F12 or right-click > Inspect
2. Go to the Console tab to see errors
3. Set breakpoints in the Sources panel:
   - Click on the line number where you want to pause execution
   - Or use debugger; statement in your code

## Effective Debugging Techniques

### Console Methods
- console.log() - Basic logging
- console.table() - Display objects in table format
- console.group() - Group related logs
- console.trace() - Show the call stack

### Breakpoints
1. Add a breakpoint
2. When code execution stops, examine:
   - Variables in the Scope panel
   - Call stack
   - Step through code with controls (step over, step into)

### Performance Issues
- Use Performance tab to record and analyze execution
- Look for long-running tasks

Remember: Always check the Console for error messages first, they often point directly to the issue!`,
    likes: 67,
    comments: 23,
    author: 'Frontend Developer',
  },
  {
    title: 'Solving Common Git Problems',
    description: 'A guide to troubleshoot common Git issues that beginners face.',
    categories: ['Git', 'Version Control', 'Tools'],
    solution: `# Common Git Problems and Solutions

## 1. Merge Conflicts

When Git can't automatically merge changes:

\`\`\`
<<<<<<< HEAD
Your changes
=======
Other changes
>>>>>>> branch-name
\`\`\`

Solution:
1. Edit the file to resolve conflicts (remove markers and keep desired code)
2. Add resolved files: git add <filename>
3. Complete the merge: git commit

## 2. Accidental Commits to Wrong Branch

If you committed to main instead of a feature branch:

\`\`\`
git branch new-branch
git reset HEAD~1 --hard
git checkout new-branch
\`\`\`

## 3. Undoing Changes

- Discard changes in working directory: git checkout -- <file>
- Undo last commit (keeping changes): git reset --soft HEAD~1
- Remove last commit completely: git reset --hard HEAD~1

## 4. Detached HEAD State

When you checkout a specific commit:

1. Create a branch from there: git checkout -b new-branch
2. Or go back to a branch: git checkout main

## Git Command Cheat Sheet

- Check status: git status
- View history: git log --oneline
- Compare changes: git diff branch1..branch2

Remember to pull before pushing to avoid unnecessary merge conflicts!`,
    likes: 42,
    comments: 18,
    author: 'Git Master',
  }
];

const ProblemSolving = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [problemTitle, setProblemTitle] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    'JavaScript', 'Python', 'CSS', 'HTML', 'React', 
    'Git', 'Database', 'Error Handling', 'Debugging'
  ];
  
  // Combine both arrays
  const allProblems = [...commonProblems, ...debuggingGuides];
  
  // Filter problems based on search and category
  const filteredProblems = allProblems.filter((problem) => {
    // Search filter
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = categoryFilter
      ? problem.categories.includes(categoryFilter)
      : true;
    
    return matchesSearch && matchesCategory;
  });

  const handleSubmitProblem = () => {
    // Here you would typically send the problem to your backend
    // For now, just show a success message and reset the form
    alert('Your problem has been submitted! Our community will help solve it soon.');
    setProblemTitle('');
    setProblemDescription('');
    setIsDialogOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-purple to-tech-indigo text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4 badge-responsive">Get Unstuck</Badge>
          <h1 className="responsive-heading font-bold mb-4">Problem-Solving Hub</h1>
          <p className="responsive-text max-w-2xl mx-auto mb-6 text-blue-100">
            Find solutions to common challenges faced by beginners in programming and technology.
          </p>
          <div className="btn-group-responsive">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <a href="/about#contact" className="flex items-center gap-2">
                  <Button className="bg-white text-tech-indigo hover:bg-blue-50 btn-responsive">
                    Ask a Question
                  </Button>
                </a>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Submit Your Question</DialogTitle>
                  <DialogDescription>
                    Describe your problem in detail to get the best help from our community.
                  </DialogDescription>
                </DialogHeader>
                {/* <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Problem Title</h4>
                    <Input
                      placeholder="E.g., How to fix React state not updating?"
                      value={problemTitle}
                      onChange={(e) => setProblemTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Problem Description</h4>
                    <Textarea
                      placeholder="Describe your problem in detail. Include code snippets, error messages, and what you've tried so far."
                      value={problemDescription}
                      onChange={(e) => setProblemDescription(e.target.value)}
                      rows={5}
                    />
                  </div>
                </div> */}
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleSubmitProblem}>Submit Question</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" className="border-white text-white hover:bg-white/10 btn-responsive">
              Browse FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96 search-responsive">
              <Search className="absolute top-3 left-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <Input
                placeholder="Search problems and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 input-responsive"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-2" />
              <span className="text-sm font-medium mr-2">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={categoryFilter === null ? 'secondary' : 'outline'} 
                  size="sm"
                  onClick={() => setCategoryFilter(null)}
                  className="badge-responsive"
                >
                  All
                </Button>
                {categories.slice(0, 5).map((category) => (
                  <Button
                    key={category}
                    variant={categoryFilter === category ? 'secondary' : 'outline'} 
                    size="sm"
                    onClick={() => setCategoryFilter(category)}
                    className="badge-responsive"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems and Solutions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="common">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="common">Common Problems</TabsTrigger>
                <TabsTrigger value="debugging">Debugging Guides</TabsTrigger>
                <TabsTrigger value="community">Community Solutions</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Common Problems Tab */}
            <TabsContent value="common" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredProblems.filter(p => commonProblems.includes(p)).map((problem, index) => (
                  <ProblemSolutionCard
                    key={index}
                    title={problem.title}
                    description={problem.description}
                    categories={problem.categories}
                    solution={problem.solution}
                    likes={problem.likes}
                    comments={problem.comments}
                    author={problem.author}
                  />
                ))}
                {filteredProblems.filter(p => commonProblems.includes(p)).length === 0 && (
                  <div className="text-center py-12">
                    <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500">No problems found matching your search.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery('');
                        setCategoryFilter(null);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Debugging Guides Tab */}
            <TabsContent value="debugging" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredProblems.filter(p => debuggingGuides.includes(p)).map((guide, index) => (
                  <ProblemSolutionCard
                    key={index}
                    title={guide.title}
                    description={guide.description}
                    categories={guide.categories}
                    solution={guide.solution}
                    likes={guide.likes}
                    comments={guide.comments}
                    author={guide.author}
                  />
                ))}
                {filteredProblems.filter(p => debuggingGuides.includes(p)).length === 0 && (
                  <div className="text-center py-12">
                    <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500">No debugging guides found matching your search.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery('');
                        setCategoryFilter(null);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Community Solutions Tab */}
            <TabsContent value="community" className="mt-0">
              <div className="text-center py-20">
                <Card className="max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>Community Solutions</CardTitle>
                    <CardDescription>Share your knowledge and help fellow learners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Join our community to share your solutions and learn from others. 
                      You can contribute by answering questions or sharing your problem-solving experiences.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button className="tech-btn-primary">Join Community</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tips for Problem Solving */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-2">Expert Tips</Badge>
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Problem-Solving Strategies
            </h2>
            <p className="text-lg text-gray-600">
              Apply these techniques when you face a challenging problem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-blue-100 text-tech-blue flex items-center justify-center text-sm font-bold mr-2">1</span>
                  Break It Down
                </h3>
                <p className="text-gray-600">
                  Divide complex problems into smaller, more manageable parts that you can solve individually.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 text-tech-purple flex items-center justify-center text-sm font-bold mr-2">2</span>
                  Read Error Messages
                </h3>
                <p className="text-gray-600">
                  Error messages often contain valuable clues. Learn to understand what they're telling you about your code.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-2">3</span>
                  Use Print Statements
                </h3>
                <p className="text-gray-600">
                  Add console.log() or print() statements to track variable values and program flow as it runs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tech-indigo to-tech-blue text-white rounded-xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Need more help?</h3>
                <p className="text-blue-100">
                  Connect with our community of fellow learners for personalized assistance.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="/community" className="flex items-center gap-2">
                  <Button className="bg-white text-tech-indigo hover:bg-blue-50">
                    Join Community
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

export default ProblemSolving;

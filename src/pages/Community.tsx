
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Calendar, MessageSquare, Users } from 'lucide-react';

const Community = () => {
  const upcomingEvents = [
    {
      title: 'Web Development Q&A Session',
      date: 'May 15, 2025',
      time: '7:00 PM EST',
      host: 'Frontend Mentor',
      attendees: 45,
    },
    {
      title: 'Python Coding Challenge',
      date: 'May 18, 2025',
      time: '5:30 PM EST',
      host: 'Python Enthusiasts',
      attendees: 32,
    },
    {
      title: 'Getting Started with Git Workshop',
      date: 'May 22, 2025',
      time: '6:00 PM EST',
      host: 'Version Control Pro',
      attendees: 28,
    },
  ];

  const studyGroups = [
    {
      name: 'JavaScript Beginners',
      members: 124,
      description: 'A friendly group for those just starting with JavaScript. Weekly challenges and discussions.',
      category: 'Web Development',
    },
    {
      name: 'Python Coders',
      members: 87,
      description: 'Learn Python together through projects, code reviews, and collaborative coding.',
      category: 'Programming',
    },
    {
      name: 'Web Design Showcase',
      members: 65,
      description: 'Share your designs, get feedback, and discuss latest web design trends and tools.',
      category: 'Web Design',
    },
    {
      name: 'Data Science Explorers',
      members: 93,
      description: 'Analyze datasets together and learn data science concepts and tools as a group.',
      category: 'Data Science',
    },
  ];

  const mentors = [
    {
      name: 'Alex Johnson',
      role: 'Senior Software Engineer',
      specialties: ['React', 'JavaScript', 'Web Development'],
      experience: '8+ years',
      availability: 'Available for 1-on-1 sessions',
    },
    {
      name: 'Sarah Williams',
      role: 'Full Stack Developer',
      specialties: ['Python', 'Django', 'Database Design'],
      experience: '6+ years',
      availability: 'Weekly group sessions',
    },
    {
      name: 'Michael Chen',
      role: 'UX Designer & Frontend Developer',
      specialties: ['UI/UX', 'CSS', 'Design Systems'],
      experience: '5+ years',
      availability: 'Project reviews and feedback',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tech-pink to-tech-purple text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4 badge-responsive">Learn Together</Badge>
          <h1 className="responsive-heading font-bold mb-4">Join Our Community</h1>
          <p className="responsive-text max-w-2xl mx-auto mb-8 text-blue-100">
            Connect with fellow learners, participate in events, join study groups, and find mentors to support your tech journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 btn-group-responsive">
            <a href="https://discord.gg/SukSvWsC" target="_blank" rel="noopener noreferrer" className="group">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-responsive flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord Community
              </Button>
            </a>
           
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="card-grid-responsive">
            <Card className="card-hover card-responsive">
              <CardHeader>
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-tech-blue mb-2" />
                <CardTitle className="responsive-subheading">2,500+ Members</CardTitle>
                <CardDescription className="responsive-text">
                  Join a growing community of learners at all stages of their tech journey
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover card-responsive">
              <CardHeader>
                <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-tech-purple mb-2" />
                <CardTitle className="responsive-subheading">Active Discussions</CardTitle>
                <CardDescription className="responsive-text">
                  Engage in meaningful conversations across various tech topics
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover card-responsive">
              <CardHeader>
                <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-tech-pink mb-2" />
                <CardTitle className="responsive-subheading">Weekly Events</CardTitle>
                <CardDescription className="responsive-text">
                  Participate in workshops, coding challenges, and Q&A sessions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="events">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                <TabsTrigger value="groups">Study Groups</TabsTrigger>
                <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Events Tab */}
            <TabsContent value="events" className="mt-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 gradient-text">Join Our Community Events</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Participate in interactive sessions, workshops, and challenges led by community mentors
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader>
                      <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100 inline-flex">Upcoming</Badge>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {event.date} • {event.time}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Hosted by: {event.host}</span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" /> {event.attendees} attending
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline">
                        Join Event
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            
            {/* Study Groups Tab */}
            <TabsContent value="groups" className="mt-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 gradient-text">Find Your Study Group</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Connect with fellow learners with similar interests and learning goals
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studyGroups.map((group, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100">{group.category}</Badge>
                          <CardTitle>{group.name}</CardTitle>
                        </div>
                        <Badge variant="outline" className="flex items-center">
                          <Users className="h-3 w-3 mr-1" /> {group.members}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{group.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Group</Button>
                      <Button>Join Group</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button className="tech-btn-primary" size="lg">
                  Create a New Study Group
                </Button>
              </div>
            </TabsContent>
            
            {/* Mentors Tab */}
            <TabsContent value="mentors" className="mt-0">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 gradient-text">Learn from Experienced Mentors</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Connect with industry professionals who volunteer their time to help beginners
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mentors.map((mentor, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader>
                      <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
                      <CardTitle className="text-center">{mentor.name}</CardTitle>
                      <CardDescription className="text-center">{mentor.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <p className="text-sm font-medium mb-1">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {mentor.specialties.map((specialty, i) => (
                            <Badge key={i} variant="outline">{specialty}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm font-medium mb-1">Experience:</p>
                        <p className="text-gray-600">{mentor.experience}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Availability:</p>
                        <p className="text-gray-600">{mentor.availability}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Request Mentorship</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-10 bg-gray-100 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-3">Want to become a mentor?</h3>
                <p className="text-gray-600 mb-5">
                  Share your knowledge and experience with the community by becoming a mentor.
                </p>
                <Button variant="outline" size="lg">Apply as Mentor</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-2">Community Guidelines</Badge>
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Values</h2>
            <p className="text-lg text-gray-600">
              We're committed to creating a welcoming environment for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-tech-blue flex items-center justify-center font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Be Kind and Respectful</h3>
                <p className="text-gray-600">
                  Treat everyone with respect and empathy. Remember that we all started somewhere,
                  and learning is a journey with different paths for each person.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-purple-100 text-tech-purple flex items-center justify-center font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Share Knowledge</h3>
                <p className="text-gray-600">
                  The best way to learn is to teach. Share what you know, ask questions when needed, 
                  and contribute to discussions in a constructive way.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Embrace Collaboration</h3>
                <p className="text-gray-600">
                  Work together on problems, share resources, and celebrate each other's 
                  achievements. Tech is better when we collaborate.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Focus on Growth</h3>
                <p className="text-gray-600">
                  Embrace challenges, learn from mistakes, and focus on continuous improvement.
                  Every expert was once a beginner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Join CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tech-blue via-tech-purple to-tech-indigo text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-300 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-200 rounded-full animate-ping"></div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">🚀 Join Now</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Ready to Accelerate Your Tech Journey?
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join 2,500+ learners, connect with mentors, and participate in exclusive events. 
                Your next breakthrough is just one click away!
              </p>
              
              {/* Enhanced Button Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href="https://discord.gg/SukSvWsC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    // Analytics tracking
                    console.log('CTA Discord clicked');
                    // You can add Google Analytics or other tracking here
                  }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join Discord Community
                  </Button>
                </a>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-tech-purple font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300"
                  onClick={() => {
                    console.log('CTA Forums clicked');
                    // Add modal or redirect functionality
                  }}
                >
                  Explore Forums
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>2,500+ Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Active Discussions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Weekly Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

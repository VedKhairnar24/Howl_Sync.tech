
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
      <section className="bg-gradient-to-r from-tech-pink to-tech-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">Learn Together</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Connect with fellow learners, participate in events, join study groups, and find mentors to support your tech journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://discord.gg/SukSvWsC" className="flex items-center gap-2">
              <Button className="bg-white text-tech-purple hover:bg-blue-50">
                Join Discord Server
              </Button>
            </a>
            {/* <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Forums
            </Button> */}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Users className="h-10 w-10 text-tech-blue mb-2" />
                <CardTitle>2,500+ Members</CardTitle>
                <CardDescription>
                  Join a growing community of learners at all stages of their tech journey
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-tech-purple mb-2" />
                <CardTitle>Active Discussions</CardTitle>
                <CardDescription>
                  Engage in meaningful conversations across various tech topics
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <Calendar className="h-10 w-10 text-tech-pink mb-2" />
                <CardTitle>Weekly Events</CardTitle>
                <CardDescription>
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

      {/* Join CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-xl p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to join our community?</h3>
              <p className="text-xl text-blue-100 mb-8">
                Connect with fellow learners, find mentors, and accelerate your tech journey together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-tech-indigo hover:bg-blue-50">
                  Join Discord Community
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Forums
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

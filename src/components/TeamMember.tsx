import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  bio, 
  imageUrl,
  socials = {} 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center p-6">
        <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-tech-blue">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback className="bg-tech-purple text-white text-xl">
            {name.split(' ').map(part => part[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <CardHeader className="text-center p-4">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <CardDescription className="text-tech-blue font-medium">{role}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 text-sm">{bio}</p>
        </CardContent>
        {(socials.github || socials.twitter || socials.linkedin || socials.instagram || socials.email) && (
          <CardFooter className="flex justify-center gap-2 pt-2">
            {socials.github && (
              <Button variant="ghost" size="icon" asChild>
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socials.twitter && (
              <Button variant="ghost" size="icon" asChild>
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socials.linkedin && (
              <Button variant="ghost" size="icon" asChild>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socials.instagram && (
              <Button variant="ghost" size="icon" asChild>
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socials.email && (
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${socials.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </div>
    </Card>
  );
};

export default TeamMember;

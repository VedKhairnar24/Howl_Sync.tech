import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Instagram, Facebook, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials?: {
    github?: string;
    facebook?:string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
    portfolio?: string;
  };
  isLead?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  bio, 
  imageUrl,
  socials = {},
  isLead = false
}) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isLead ? 'bg-gradient-to-r from-tech-blue to-tech-lightblue text-white' : ''}`}>
      <div className="flex flex-col items-center p-6">
        <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-tech-blue">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback className="bg-tech-purple text-white text-xl">
            {name.split(' ').map(part => part[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <CardHeader className="text-center p-4">
          <CardTitle className={`text-x1 font-bold ${isLead ? 'text-white' : ''}`}>{name}</CardTitle>
          <CardDescription className={`font-medium text-base underline-offset-2 ${isLead ? 'text-white' : 'text-tech-blue'}`}>{role}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className={`text-sm ${isLead ? 'text-white' : 'text-gray-600'}`}>{bio}</p>
        </CardContent>
        {(socials.github || socials.twitter || socials.linkedin || socials.instagram || socials.email) && (
          <CardFooter className="flex justify-center gap-2 pt-2">
            {socials.github && (
              <Button variant="ghost" size="icon" asChild className={isLead ? 'text-white hover:bg-white/20' : ''}>
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
           {socials.linkedin && (
              <Button variant="ghost" size="icon" asChild className={isLead ? 'text-white hover:bg-white/20' : ''}>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socials.instagram && (
              <Button variant="ghost" size="icon" asChild className={isLead ? 'text-white hover:bg-white/20' : ''}>
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            )}
             {socials.twitter && (
              <Button variant="ghost" size="icon" asChild className={isLead ? 'text-white hover:bg-white/20' : ''}>
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}
            {socials.email && (
              <Button variant="ghost" size="icon" asChild className={isLead ? 'text-white hover:bg-white/20' : ''}>
                <a href={`mailto:${socials.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            )}
          </CardFooter>
        )}
        {socials.portfolio && (
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className={`${isLead ? 'text-white border-white hover:bg-white/20' : 'border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white'}`}
            >
              <a href={socials.portfolio} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Portfolio
              </a>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TeamMember;

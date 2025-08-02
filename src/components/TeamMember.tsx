import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Instagram, Facebook, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile, useIsTablet, useIsDesktop } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 card-responsive ${isLead ? 'bg-gradient-to-r from-tech-blue to-tech-lightblue text-white' : ''}`}>
      <div className="flex flex-col items-center p-4 sm:p-6 md:p-8">
        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 border-2 border-tech-blue mb-4 sm:mb-6">
          <AvatarImage src={imageUrl} alt={name} className="object-cover" />
          <AvatarFallback className="bg-tech-purple text-white text-lg sm:text-xl md:text-2xl">
            {name.split(' ').map(part => part[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <CardHeader className="text-center p-0 pb-4 sm:pb-6">
          <CardTitle className={`text-lg sm:text-xl md:text-2xl font-bold ${isLead ? 'text-white' : 'text-gray-900'}`}>
            {name}
          </CardTitle>
          <CardDescription className={`font-medium text-sm sm:text-base md:text-lg underline-offset-2 ${isLead ? 'text-white/90' : 'text-tech-blue'}`}>
            {role}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center p-0 pb-4 sm:pb-6">
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${isLead ? 'text-white/90' : 'text-gray-600'}`}>
            {bio}
          </p>
        </CardContent>
        
        {(socials.github || socials.twitter || socials.linkedin || socials.instagram || socials.email) && (
          <CardFooter className="flex justify-center gap-1 sm:gap-2 pt-0">
            {socials.github && (
              <Button 
                variant="ghost" 
                size={isMobile ? "sm" : "default"}
                asChild 
                className={`${isLead ? 'text-white hover:bg-white/20' : 'hover:bg-gray-100'} transition-all duration-200`}
              >
                <a 
                  href={socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="p-2 sm:p-3"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            )}
            {socials.linkedin && (
              <Button 
                variant="ghost" 
                size={isMobile ? "sm" : "default"}
                asChild 
                className={`${isLead ? 'text-white hover:bg-white/20' : 'hover:bg-gray-100'} transition-all duration-200`}
              >
                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="p-2 sm:p-3"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            )}
            {socials.instagram && (
              <Button 
                variant="ghost" 
                size={isMobile ? "sm" : "default"}
                asChild 
                className={`${isLead ? 'text-white hover:bg-white/20' : 'hover:bg-gray-100'} transition-all duration-200`}
              >
                <a 
                  href={socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="p-2 sm:p-3"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            )}
            {socials.twitter && (
              <Button 
                variant="ghost" 
                size={isMobile ? "sm" : "default"}
                asChild 
                className={`${isLead ? 'text-white hover:bg-white/20' : 'hover:bg-gray-100'} transition-all duration-200`}
              >
                <a 
                  href={socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="p-2 sm:p-3"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            )}
            {socials.email && (
              <Button 
                variant="ghost" 
                size={isMobile ? "sm" : "default"}
                asChild 
                className={`${isLead ? 'text-white hover:bg-white/20' : 'hover:bg-gray-100'} transition-all duration-200`}
              >
                <a 
                  href={`mailto:${socials.email}`} 
                  aria-label="Email"
                  className="p-2 sm:p-3"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            )}
          </CardFooter>
        )}
        
        {socials.portfolio && (
          <div className="mt-4 sm:mt-6">
            <Button 
              variant="outline" 
              size={isMobile ? "sm" : "default"}
              asChild
              className={`${isLead ? 'text-white border-white hover:bg-white/20' : 'border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white'} transition-all duration-200`}
            >
              <a 
                href={socials.portfolio} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Portfolio</span>
              </a>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TeamMember;

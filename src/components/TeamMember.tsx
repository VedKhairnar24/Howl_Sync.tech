import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
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

  // Define color schemes for each team member
  const getColorScheme = () => {
    if (isLead) return 'from-tech-blue to-tech-lightblue';
    // Different colors for each team member based on name
    if (name.includes('Vedant')) return 'from-green-500 to-emerald-500';
    if (name.includes('Ved')) return 'from-blue-500 to-cyan-500';
    if (name.includes('Tejas')) return 'from-yellow-500 to-lime-500';
    return 'from-purple-500 to-pink-500';
  };

  const getBorderColor = () => {
    if (isLead) return 'border-tech-blue';
    if (name.includes('Vedant')) return 'border-green-500';
    if (name.includes('Ved')) return 'border-blue-500';
    if (name.includes('Tejas')) return 'border-yellow-500';
    return 'border-purple-500';
  };

  const getSocialColor = () => {
    if (isLead) return 'bg-tech-blue';
    if (name.includes('Vedant')) return 'bg-green-500';
    if (name.includes('Ved')) return 'bg-blue-500';
    if (name.includes('Tejas')) return 'bg-yellow-500';
    return 'bg-purple-500';
  };

  const getLineColor = () => {
    if (isLead) return 'bg-tech-blue';
    if (name.includes('Vedant')) return 'bg-green-500';
    if (name.includes('Ved')) return 'bg-blue-500';
    if (name.includes('Tejas')) return 'bg-yellow-500';
    return 'bg-purple-500';
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 card-responsive w-full min-w-[320px] sm:min-w-[380px] md:min-w-[420px] relative bg-white dark:bg-gray-800 shadow-lg`}>
      <div className="flex items-start p-6 sm:p-8 w-full relative z-10">
        {/* Profile Picture Section */}
        <div className="flex-shrink-0 mr-6 sm:mr-8">
          <Avatar className={`h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 border-4 ${getBorderColor()} shadow-lg`}>
            <AvatarImage src={imageUrl} alt={name} className="object-cover" />
            <AvatarFallback className="bg-tech-purple text-white text-lg sm:text-xl">
              {name.split(' ').map(part => part[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex flex-col items-center mr-6 sm:mr-8 relative">
          {/* Vertical line connecting social icons */}
          <div className={`w-0.5 h-full ${getLineColor()} opacity-60`}></div>
          
          {/* Social Icons */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 sm:gap-3">
            {socials.github && (
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getSocialColor()} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md`}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
            {socials.linkedin && (
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getSocialColor()} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md`}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
            {socials.instagram && (
              <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getSocialColor()} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md`}
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
            {socials.twitter && (
              <a 
                href={socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getSocialColor()} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md`}
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
            {socials.email && (
              <a 
                href={`mailto:${socials.email}`} 
                aria-label="Email"
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${getSocialColor()} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md`}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h3>
          <p className={`text-sm sm:text-base font-semibold mb-3 ${getSocialColor().replace('bg-', 'text-')}`}>
            {role}
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {bio}
          </p>
          
          {/* Portfolio Button */}
          {socials.portfolio && (
            <div className="mt-4">
              <Button 
                variant="outline" 
                size={isMobile ? "sm" : "default"}
                asChild
                className={`${getBorderColor().replace('border-', 'border-')} ${getSocialColor().replace('bg-', 'text-')} hover:${getSocialColor()} hover:text-black transition-all duration-200 hover:scale-105`}
              >
                <a 
                  href={socials.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm font-medium">Portfolio</span>
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamMember;

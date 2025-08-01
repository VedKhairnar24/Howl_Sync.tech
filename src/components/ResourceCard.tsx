
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Play, Youtube, BookOpen, Video, Code, Download, Link } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'Article'|'Video' | 'Tutorial' | 'Tool' | 'Cheatsheet' | 'Course' | 'Playlist';
  rating: number;
  author: string;
  url: string;
  isPremium?: boolean;
  platform?: string;
  note?: string;
  thumbnailUrl?: string;
}

const ResourceCard = ({
  title,
  description,
  type,
  rating,
  author,
  url,
  isPremium = false,
  platform,
  note,
  thumbnailUrl,
}: ResourceCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Article':
        return 'bg-blue-100 text-blue-800';
      case 'Video':
        return 'bg-red-100 text-red-800';
      case 'Tutorial':
        return 'bg-green-100 text-green-800';
      case 'Tool':
        return 'bg-orange-100 text-orange-800';
      case 'Cheatsheet':
        return 'bg-purple-100 text-purple-800';
      case 'Course':
        return 'bg-teal-100 text-teal-800';
      case 'Playlist':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'Article':
        return <BookOpen className="h-4 w-4" />;
      case 'Video':
        return <Video className="h-4 w-4" />;
      case 'Tutorial':
        return <BookOpen className="h-4 w-4" />;
      case 'Tool':
        return <Code className="h-4 w-4" />;
      case 'Cheatsheet':
        return <Download className="h-4 w-4" />;
      case 'Course':
        return <BookOpen className="h-4 w-4" />;
      case 'Playlist':
        return <Youtube className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      {thumbnailUrl ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-40 overflow-hidden">
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          {type === 'Playlist' && (
            <div className="absolute bottom-3 right-3 bg-black/70 p-2 rounded-full">
              <Youtube className="h-5 w-5 text-white" />
            </div>
          )}
        </a>
      ) : (
        <div className="h-12 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
          {getTypeIcon()}
        </div>
      )}
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge className={`${getTypeColor(type)}`}>
            {type}
          </Badge>
          {platform && (
            <Badge variant="outline" className="text-gray-600">
              {platform}
            </Badge>
          )}
          {isPremium && (
            <Badge className="bg-amber-100 text-amber-800 ml-auto">Premium</Badge>
          )}
        </div>
        <CardTitle>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-1"
          >
            {title}
            <ExternalLink className="h-4 w-4 inline-block opacity-70" />
          </a>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>By {author}</span>
          <div className="flex items-center ml-auto text-amber-500">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'fill-current' : 'fill-none'}`} 
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
        {note && (
          <div className="mt-3 text-sm text-muted-foreground italic">
            {note}
          </div>
        )}
        {platform && url && (
          <div className="mt-3 text-sm">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              <Link className="h-4 w-4" /> Visit on {platform}
            </a>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full" variant={type === 'Playlist' ? 'default' : 'outline'}>
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            {type === 'Playlist' ? (
              <>Watch Playlist <Play className="ml-2 h-4 w-4" /></>
            ) : (
              <>View Resource <ExternalLink className="ml-2 h-4 w-4" /></>
            )}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;

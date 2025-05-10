
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'Article' | 'Video' | 'Tutorial' | 'Tool' | 'Cheatsheet' | 'Course';
  rating: number;
  author: string;
  url: string;
  isPremium?: boolean;
  platform?: string;
  note?: string;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
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
        <CardTitle>{title}</CardTitle>
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
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full" variant="outline">
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            View Resource <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;

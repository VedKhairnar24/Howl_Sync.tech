
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ProblemSolutionCardProps {
  title: string;
  description: string;
  categories: string[];
  solution: string;
  likes: number;
  comments: number;
  author: string;
}

const ProblemSolutionCard = ({
  title,
  description,
  categories,
  solution,
  likes,
  comments,
  author,
}: ProblemSolutionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, index) => (
            <Badge key={index} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <span className="text-sm text-muted-foreground">Posted by {author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        <Collapsible
          open={isExpanded}
          onOpenChange={setIsExpanded}
          className="border rounded-md p-2 bg-gray-50"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full flex justify-between">
              <span>View Solution</span>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4">
            <div className="bg-white p-4 rounded-md border">
              <p className="whitespace-pre-wrap">{solution}</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
        </div>
        <Button variant="outline" size="sm">
          Add Comment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProblemSolutionCard;

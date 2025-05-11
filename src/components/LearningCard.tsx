
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import LearningPathModal from './LearningPathModal';
import { learningPathsData, LearningPathCategory } from '@/data/learningPathsData';

interface LearningCardProps {
  title: string;
  description: string;
  imageSrc: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  learningPath: string;
  url: string;
  category: string;
}

const LearningCard = ({
  title,
  description,
  imageSrc,
  level,
  duration,
  learningPath,
  url,
  category,
}: LearningCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStartLearning = () => {
    setIsModalOpen(true);
  };

  // Find the appropriate learning path data based on the category
  const getPathDetails = () => {
    const categoryKey = category as LearningPathCategory;
    return learningPathsData[categoryKey];
  };

  return (
    <>
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${getLevelColor(level)}`}>
              {level}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Badge variant="outline" className="mr-2">
              {learningPath}
            </Badge>
            <div className="flex items-center ml-auto">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto">
          <Button className="w-full tech-btn-primary" onClick={handleStartLearning}>
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      
      {/* Learning Path Modal */}
      <LearningPathModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathDetails={getPathDetails()}
      />
    </>
  );
};

export default LearningCard;

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import LearningPathModal from './LearningPathModal';
import { learningPathsData, LearningPathCategory } from '@/data/learningPathsData';
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';

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
  const [showPathContent, setShowPathContent] = useState(false);
  
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

  const pathDetails = getPathDetails();

  const hasPathLevels =
    pathDetails &&
    typeof pathDetails === 'object' &&
    'beginner' in pathDetails &&
    'intermediate' in pathDetails &&
    'advanced' in pathDetails;

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
        <CardFooter className="mt-auto flex flex-col gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full" variant="outline">
                View Complete Path <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
              <SheetHeader>
                <SheetTitle>{pathDetails?.title}</SheetTitle>
                <SheetDescription>{pathDetails?.description}</SheetDescription>
              </SheetHeader>
              
              <div className="py-6">
                {!showPathContent ? (
                  <div className="flex justify-center">
                    <Button onClick={() => setShowPathContent(true)} className="my-4">
                      View Path Details
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Beginner Level */}
                    <div className="border-l-2 border-green-500 pl-4">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-green-100 text-green-800">Beginner</Badge>
                        <span className="text-xs text-gray-500 ml-2">(0-3 Months)</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium">Core concepts:</h4>
                          <p className="text-sm text-gray-600">
                            {(pathDetails?.beginner?.concepts || []).join(', ') || 'No data available'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Projects:</h4>
                          <p className="text-sm text-gray-600">
                            {(pathDetails?.beginner?.projects || []).join(', ') || 'No data available'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Intermediate Level */}
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-blue-100 text-blue-800">Intermediate</Badge>
                        <span className="text-xs text-gray-500 ml-2">(3-9 Months)</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium">Core concepts:</h4>
                          <p className="text-sm text-gray-600">
                            {(pathDetails?.intermediate?.concepts || []).join(', ') || 'No data available'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Projects:</h4>
                          <p className="text-sm text-gray-600">
                            {pathDetails?.intermediate.projects.join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Advanced Level */}
                    <div className="border-l-2 border-purple-500 pl-4">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-purple-100 text-purple-800">Advanced</Badge>
                        <span className="text-xs text-gray-500 ml-2">(9+ Months)</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium">Core concepts:</h4>
                          <p className="text-sm text-gray-600">
                            {(pathDetails?.advanced?.concepts || []).join(', ') || 'No data available'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Projects:</h4>
                          <p className="text-sm text-gray-600">
                            {pathDetails?.advanced.projects.join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-end">
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
          
          <Button className="w-full tech-btn-primary" onClick={handleStartLearning}>
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      
      {/* Learning Path Modal for "Start Learning" button */}
      <LearningPathModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathDetails={getPathDetails()}
      />
    </>
  );
};

export default LearningCard;

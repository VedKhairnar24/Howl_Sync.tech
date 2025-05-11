
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Code, Book, FileCode, Terminal, Laptop } from 'lucide-react';

interface Resource {
  name: string;
  type?: string;
}

interface SkillLevel {
  concepts: string[];
  languages?: string[];
  tools?: string[];
  resources: Resource[];
  projects: string[];
  frameworks?: string[];
  skills?: string[];
}

interface LearningPathDetails {
  title: string;
  description: string;
  beginner: SkillLevel;
  intermediate: SkillLevel;
  advanced: SkillLevel;
}

interface LearningPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  pathDetails?: LearningPathDetails;
}

const LearningPathModal = ({ isOpen, onClose, pathDetails }: LearningPathModalProps) => {
  if (!pathDetails) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{pathDetails.title}</DialogTitle>
          <DialogDescription className="text-base text-gray-600 mt-2">
            {pathDetails.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Accordion type="single" collapsible defaultValue="beginner" className="w-full">
            {/* Beginner Level */}
            <AccordionItem value="beginner">
              <AccordionTrigger className="text-lg font-medium">
                <div className="flex items-center">
                  <Badge className="bg-green-100 text-green-800 mr-3">Beginner</Badge>
                  <span>0-3 Months</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SkillLevelContent level={pathDetails.beginner} />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Intermediate Level */}
            <AccordionItem value="intermediate">
              <AccordionTrigger className="text-lg font-medium">
                <div className="flex items-center">
                  <Badge className="bg-blue-100 text-blue-800 mr-3">Intermediate</Badge>
                  <span>3-9 Months</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SkillLevelContent level={pathDetails.intermediate} />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Advanced Level */}
            <AccordionItem value="advanced">
              <AccordionTrigger className="text-lg font-medium">
                <div className="flex items-center">
                  <Badge className="bg-purple-100 text-purple-800 mr-3">Advanced</Badge>
                  <span>9+ Months</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SkillLevelContent level={pathDetails.advanced} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface SkillLevelContentProps {
  level: SkillLevel;
}

const SkillLevelContent = ({ level }: SkillLevelContentProps) => {
  return (
    <>
      <div>
        <h4 className="flex items-center text-base font-semibold mb-2">
          <Code className="h-5 w-5 mr-2 text-tech-blue" /> Core Concepts
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {level.concepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>

        {level.languages && level.languages.length > 0 && (
          <div className="mt-4">
            <h4 className="flex items-center text-base font-semibold mb-2">
              <Terminal className="h-5 w-5 mr-2 text-tech-purple" /> Languages
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {level.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        )}

        {level.tools && level.tools.length > 0 && (
          <div className="mt-4">
            <h4 className="flex items-center text-base font-semibold mb-2">
              <Laptop className="h-5 w-5 mr-2 text-tech-indigo" /> Tools
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {level.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        )}

        {level.frameworks && level.frameworks.length > 0 && (
          <div className="mt-4">
            <h4 className="flex items-center text-base font-semibold mb-2">
              <FileCode className="h-5 w-5 mr-2 text-tech-pink" /> Frameworks
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {level.frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
        )}

        {level.skills && level.skills.length > 0 && (
          <div className="mt-4">
            <h4 className="flex items-center text-base font-semibold mb-2">
              <FileCode className="h-5 w-5 mr-2 text-tech-indigo" /> Skills
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {level.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <h4 className="flex items-center text-base font-semibold mb-2">
          <Book className="h-5 w-5 mr-2 text-tech-indigo" /> Resources
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {level.resources.map((resource, index) => (
            <li key={index}>{resource.name}</li>
          ))}
        </ul>

        <div className="mt-4">
          <h4 className="flex items-center text-base font-semibold mb-2">
            <FileCode className="h-5 w-5 mr-2 text-green-600" /> Projects
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {level.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LearningPathModal;

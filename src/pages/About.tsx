
import React from 'react';
import TeamMember from "../components/TeamMember";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      {/* About Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-4 rounded-full">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
                alt="Syntax Squad Logo" 
                className="h-24 w-24 object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">Syntax Squad</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We are a dynamic duo of passionate developers driven by innovation and a shared commitment to building impactful, user-centric digital solutions. With expertise spanning full-stack web development and core programming, our team blends creativity with technical precision.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <TeamMember 
          name="Ved Khairnar"
          role="Full Stack Developer"
          bio="An innovative web developer proficient in Java, C, Data Structures, HTML, CSS, JavaScript, PHP, and MySQL—skilled at crafting clean, scalable code and delivering seamless digital experiences."
          imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          socials={{
            github: "https://github.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com"
          }}
        />
        <TeamMember 
          name="Tejas Paithne"
          role="Python Developer"
          bio="A Python developer with strong problem-solving skills, capable of designing efficient algorithms and backend systems that power intelligent applications."
          imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          socials={{
            github: "https://github.com",
            linkedin: "https://linkedin.com"
          }}
        />
      </div>

      {/* Team Description */}
      <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Our Approach</h3>
        <p className="text-gray-700 mb-4">
          Together, we bring a balanced mix of frontend design, backend logic, and algorithmic thinking—ready to tackle any challenge with a focus on clean code, performance, and user experience.
        </p>
        <p className="text-gray-700">
          Adaptable, curious, and solution-oriented, we thrive in collaborative environments and are excited to innovate under pressure.
        </p>
      </div>
    </div>
  );
};

export default About;

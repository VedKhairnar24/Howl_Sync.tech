import React from 'react';
import TeamMember from "../components/TeamMember";

const About: React.FC = () => {
  return (
    <div className=" mx-auto py-8 md:py-1 animate-fade-in">
      {/* About Section */}

      <div className="py-6 bg-gradient-to-r from-tech-blue to-tech-lightblue text-white">
        <div className="text-center text-white mb-8 md:mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-2 md:p-1 rounded-full">
              <img 
                src="/src/dev-img/U_Syntax Squad.png" 
                alt="Syntax Squad Logo" 
                className="h-24 w-2 md:h-36 md:w-36 object-cover rounded-full  " // Updated border width
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 ">Syntax Squad</h1>
          <p className="text-base text-white md:text-lg text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-2 md:px-0">
            We are a dynamic duo of passionate developers driven by innovation and a shared commitment to building impactful, user-centric digital solutions. With expertise spanning full-stack web development and core programming, our team blends creativity with technical precision.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12 px-2 md:px-0">
        <TeamMember 
          name="Ved Khairnar"
          role="Java and Full Stack Developer"
          bio="An innovative web developer proficient in Java, C, Data Structures, HTML, CSS, JavaScript, PHP, and MySQL—skilled at crafting clean, scalable code and delivering seamless digital experiences."
          imageUrl="src/dev-img/ved Profile pic 2.jpg"
          socials={{
            github: "https://github.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            email: "ved.khairnar@example.com"
          }}
        />
        <TeamMember 
          name="Tejas Paithane"
          role="Python Developer"
          bio="A Python developer with strong problem-solving skills, capable of designing efficient algorithms and backend systems that power intelligent applications."
          imageUrl="src/dev-img/tejas pic.jpg"
          socials={{
            github: "https://github.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            email: "ved.khairnar@example.com"
          }}
        />
      </div>

      {/* Team Description */}
      <div className="bg-gray-50 p-6 md:p-8 rounded-lg max-w-4xl mx-auto mb-6 md:mb-0 mx-2 md:mx-auto">
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

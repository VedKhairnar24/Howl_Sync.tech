
import React from 'react';
import TeamMember from "../components/TeamMember";

const About: React.FC = () => {
  return (
    <div id="top" className="mx-auto pb-8 animate-fade-in">
      {/* About Section */}
      <div className="py-8 bg-gradient-to-r from-tech-blue to-tech-lightblue text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-200 rounded-full animate-ping"></div>
        </div>
        
        <div className="text-center mb-6 sm:mb-8 md:mb-10 max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex justify-center mb-4 sm:mb-6 relative">
            {/* Logo with enhanced effects */}
            <div className="relative bg-white border-8 border-blue-500 p-1 sm:p-2 rounded-full shadow-lg shadow-blue-500/50 animate-float">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-white-400 opacity-75 blur-sm animate-pulse"></div>
              
              {/* Smoke effect layers */}
              <div className="absolute inset-0 rounded-full overflow-hidden -z-10">
                <div className="absolute inset-0 animate-smoke-1 bg-[radial-gradient(circle,rgba(200,200,200,0.4)_20%,transparent_60%)] bg-[length:200%_200%] opacity-60"></div>
                <div className="absolute inset-0 animate-smoke-2 bg-[radial-gradient(circle,rgba(150,200,255,0.3)_30%,transparent_70%)] bg-[length:150%_150%] opacity-40"></div>
                <div className="absolute inset-0 animate-smoke-3 bg-[radial-gradient(circle,rgba(100,150,255,0.2)_40%,transparent_80%)] bg-[length:120%_120%] opacity-30"></div>
              </div>
              
              {/* Sparkle effects */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-sparkle-1"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-cyan-400 rounded-full animate-sparkle-2"></div>
              <div className="absolute top-1/2 -right-3 w-8 h-8 bg-pink-400 rounded-full animate-sparkle-3"></div>
              
              <img
                src="./imgs/Howl Sync.png"
                alt="Howl Sync Logo"
                className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 object-cover rounded-full relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Enhanced title with typing effect */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 ">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Howl Sync</span>
          </h1>
          
          {/* Enhanced description with fade-in effect */}
          <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0 animate-fade-in-up">
            We are a dynamic duo of passionate developers driven by innovation and a shared commitment to building impactful, user-centric digital solutions. With expertise spanning full-stack web development and core programming, our team blends creativity with technical precision.
          </p>
          
          {/* Floating action buttons */}
          {/* <div className="flex justify-center gap-4 mt-6 animate-fade-in-up delay-500">
            <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div> */}
        </div>
      </div>

      {/* Team Section - Unchanged */}
      <div className="my-12 bg-gray-100 dark:bg-gray-800 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-4">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Something about our team</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-8 relative">
          <div className="transform translate-y-8">
            <TeamMember 
              name="Vedant Khairnar"
              role="Developer"
              bio="Web developer skilled in Java, Python, JavaScript, PHP, SQL, HTML, and CSS—building secure, responsive web applications with real-world impact."
              imageUrl="./imgs/Dev-Vedant.jpg"
              socials={{
                github: "https://github.com/Vedantkhairnar729",
                linkedin: "https://www.linkedin.com/in/vedant-khairnar?original_referer=",
                instagram: "https://www.instagram.com/mr_vedant_24?igsh=d3h3YWFieWl2cmNv",
                email: "vedantkhairnar041@gmail.com",
                facebook: "https://i.pinimg.com/736x/e1/f7/1a/e1f71a417b9b8df4e5fd8ccf7cc02969.jpg",
                twitter: "https://media.tenor.com/d2jqZ7DnuA8AAAAM/my-honest-reaction-my-honest-reaction-meme.gif",
                portfolio: "https://vedantportfolio-bice.vercel.app/"
              }}
            />
          </div>
          <div className="transform -translate-y-10">
            <TeamMember 
              name="Ved Khairnar"
              role="Leader"
              bio="An innovative web developer proficient in Java, C, Data Structures, HTML, CSS, JavaScript, PHP, and MySQL—skilled at crafting clean, scalable code and delivering seamless digital experiences."
              imageUrl="./imgs/Dev-Ved.jpg"
              socials={{
                github: "https://github.com/VedKhairnar24",
                linkedin: "https://www.linkedin.com/in/ved-khairnar-193889355/",
                instagram: "https://www.instagram.com/mr.vedkhairnar_officials?igsh=MTRpYzJwcXZ2Y20yaQ==",
                email: "vedkhairnar4@gmail.com",
                facebook: "https://i.pinimg.com/736x/e1/f7/1a/e1f71a417b9b8df4e5fd8ccf7cc02969.jpg",
                twitter: "https://i.pinimg.com/736x/77/52/5d/77525d3bbf551a36c683d3de698ba75a.jpg",
                portfolio: "https://dev-ved-khairnar.web.app/"
              }}
              isLead={true}
            />
          </div>
          <div className="transform translate-y-8">
            <TeamMember 
              name="Tejas Paithane"
              role="Developer"
              bio="A Python developer with strong problem-solving skills, capable of designing efficient algorithms and backend systems that power intelligent applications."
              imageUrl="./imgs/Dev-Tejas.jpg"
              socials={{
                github: "https://github.com/Chetan-tp",
                linkedin: "https://www.linkedin.com/in/tejas-paithane-5634a0306/",
                instagram: "https://www.instagram.com/tejas_paithane_official?igsh=MTdrbWhlNWdxamNzNA==",
                email: "paithanetajas34@gmail.com",
                facebook: "https://i.pinimg.com/736x/8c/de/9f/8cde9fab69bfcbfa7a9649e951acef05.jpg",
                twitter: "https://i.pinimg.com/564x/e1/d4/45/e1d445cb64f3eb7ec425e0ff6b01886a.jpg",
                portfolio: "https://tejas-paithane.github.io/"
              }}
            />
          </div>
        </div>
      </div>

      {/* Team Description */}
      <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Our Approach</h3>
        <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
          We combine a dynamic blend of frontend design, backend logic, and algorithmic expertise to deliver robust, user-centric solutions. Our focus is on crafting clean, efficient code that prioritizes performance, scalability, and exceptional user experiences. Adaptable, curious, and solution-oriented, we thrive in collaborative environments, embracing challenges with creativity and precision.
          Our process is guided by a clear roadmap, ensuring every project milestone aligns with your vision and goals. We leverage cutting-edge AI tools to enhance development efficiency, from automating repetitive tasks to optimizing complex algorithms, enabling us to deliver smarter solutions faster. Our expertise spans a wide range of IDE tools, allowing us to tailor our workflow to the unique demands of each project, whether it’s rapid prototyping or intricate backend development.
          We believe in the power of questions and answers—Q&A is at the heart of our iterative process. By fostering open communication and continuous feedback, we ensure that every solution is refined, purposeful, and aligned with your needs. Excited to innovate under pressure, we’re committed to pushing boundaries and delivering results that exceed expectations.
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          Adaptable, curious, and solution-oriented, we thrive in collaborative environments and are excited to innovate under pressure.
        </p>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-tech-blue mb-2">Get In Touch</h2>
          <div className="mx-auto w-16 sm:w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full mb-4 sm:mb-6"></div>
        </div>
        <div className="max-w-lg sm:max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <div className="space-y-4 sm:space-y-6">
            <input type="hidden" name="access_key" value="5253416d-07ed-40b9-8ce3-692fe13155f0" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Enter subject"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Type your message here..."
                rows={4}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => {
                const form = document.getElementById('contactForm') as HTMLFormElement;
                if (form) form.submit();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold py-2 sm:py-2.5 rounded-md shadow-md hover:from-tech-indigo hover:to-tech-blue transition-colors text-sm sm:text-base"
            >
              <span>Send Message</span>
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes smoke-1 {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-15px) scale(1.2);
              opacity: 0.4;
            }
            100% {
              transform: translateY(-30px) scale(1.4);
              opacity: 0;
            }
          }
          
          @keyframes smoke-2 {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-12px) scale(1.15);
              opacity: 0.2;
            }
            100% {
              transform: translateY(-25px) scale(1.3);
              opacity: 0;
            }
          }
          
          @keyframes smoke-3 {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-8px) scale(1.1);
              opacity: 0.15;
            }
            100% {
              transform: translateY(-20px) scale(1.25);
              opacity: 0;
            }
          }
          
          @keyframes sparkle-1 {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
          
          @keyframes sparkle-2 {
            0%, 100% {
              opacity: 0.6;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.3);
            }
          }
          
          @keyframes sparkle-3 {
            0%, 100% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.1);
            }
          }
          
          @keyframes typewriter {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
          
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-smoke-1 {
            animation: smoke-1 4s infinite ease-in-out;
          }
          
          .animate-smoke-2 {
            animation: smoke-2 4.5s infinite ease-in-out;
          }
          
          .animate-smoke-3 {
            animation: smoke-3 5s infinite ease-in-out;
          }
          
          .animate-sparkle-1 {
            animation: sparkle-1 2s infinite ease-in-out;
          }
          
          .animate-sparkle-2 {
            animation: sparkle-2 2.5s infinite ease-in-out;
          }
          
          .animate-sparkle-3 {
            animation: sparkle-3 3s infinite ease-in-out;
          }
          
          .animate-typewriter {
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid;
            animation: typewriter 2s steps(20) 1s both;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .delay-500 {
            animation-delay: 0.5s;
          }
        `
      }} />
      </div>
  );
};
export default About;

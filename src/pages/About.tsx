import React from 'react';
import TeamMember from "../components/TeamMember";

const About: React.FC = () => {
  return (
    <div id="top" className="mx-auto py-8 md:py-1 animate-fade-in">
      {/* About Section */}

      <div className="py-6 bg-gradient-to-r from-tech-blue to-tech-lightblue text-white">
        <div className="text-center text-white mb-8 md:mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-tech-blue to-tech-purple p-2 md:p-1 rounded-full">
              <img 
                src="/src/dev-img/Howl_Sync_Ld.png" 
                alt="Howl Sync Logo" 
                className="h-36 w-36 md:h-48 md:w-48 object-cover rounded-full" // Increased size
                />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 ">Howl Sync</h1>
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
          imageUrl="public/dev-img/Dev-Ved.jpg"
          socials={{
            github: "https://github.com/VedKhairnar24",
            linkedin: "https://www.linkedin.com/in/ved-khairnar-193889355/",
            instagram: "https://www.instagram.com/mr.vedkhairnar_officials?igsh=MTRpYzJwcXZ2Y20yaQ==",
            email: "vedkhairnar4@gmail.com"
          }}
          />
        <TeamMember 
          name="Tejas Paithane"
          role="Python Developer"
          bio="A Python developer with strong problem-solving skills, capable of designing efficient algorithms and backend systems that power intelligent applications."
          imageUrl="public/dev-img/Dev-Tejas.jpg"
          socials={{
            github: "https://github.com/Chetan-tp",
            linkedin: "https://www.linkedin.com/in/tejas-paithane-5634a0306/",
            instagram: "https://www.instagram.com/tejas_paithane_official?igsh=MTdrbWhlNWdxamNzNA==",
            email: "paithanetajas34@gmail.com"
          }}
          
          />
      </div>

      {/* Team Description */}
      <div className="bg-gray-50 p-6 md:p-8 rounded-lg max-w-4xl mx-auto mb-6 md:mb-0 mx-2 md:mx-auto">
        <h3 className="text-xl font-bold mb-4">Our Approach</h3>
        <p className="text-gray-700 mb-4">We combine a dynamic blend of frontend design, backend logic, and algorithmic expertise to deliver robust, user-centric solutions. Our focus is on crafting clean, efficient code that prioritizes performance, scalability, and exceptional user experiences. Adaptable, curious, and solution-oriented, we thrive in collaborative environments, embracing challenges with creativity and precision.
 Our process is guided by a clear roadmap, ensuring every project milestone aligns with your vision and goals. We leverage cutting-edge AI tools to enhance development efficiency, from automating repetitive tasks to optimizing complex algorithms, enabling us to deliver smarter solutions faster. Our expertise spans a wide range of IDE tools, allowing us to tailor our workflow to the unique demands of each project, whether it’s rapid prototyping or intricate backend development.
 We believe in the power of questions and answers—Q&A is at the heart of our iterative process. By fostering open communication and continuous feedback, we ensure that every solution is refined, purposeful, and aligned with your needs. Excited to innovate under pressure, we’re committed to pushing boundaries and delivering results that exceed expectations.</p>
        <p className="text-gray-700">
          Adaptable, curious, and solution-oriented, we thrive in collaborative environments and are excited to innovate under pressure.
        </p>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-tech-blue mb-2">Get In Touch</h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full mb-6"></div>
        </div>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10">
          <form
            id="contactForm"
            className="space-y-6"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
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
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
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
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
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
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
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
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-tech-blue to-tech-purple text-white font-semibold py-2.5 rounded-md shadow-md hover:from-tech-indigo hover:to-tech-blue transition-colors"
            >
              <span>Send Message</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};


export default About;
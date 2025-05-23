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
          imageUrl="data:image/png;base64,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"
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
          imageUrl="data:image/png;base64,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"
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
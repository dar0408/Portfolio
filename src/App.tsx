import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
  Briefcase,
  Rocket,
} from 'lucide-react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import SkillCard from './components/SkillCard';
import StarField from './components/StarField';
import MeteorShower from './components/MeteorShower';
import HeroSection from './components/HeroSection';

function App() {
  const skills = [
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'text-[#3776AB]',
    },
    {
      name: 'Django',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      color: 'text-[#092E20]',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: 'text-[#336791]',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'text-[#4479A1]',
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'text-[#E34F26]',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'text-[#1572B6]',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'text-[#F7DF1E]',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: 'text-[#2496ED]',
    },
  ];

  return (
    <div className="min-h-screen bg-deepSpace text-white relative overflow-hidden">
      <StarField />
      <MeteorShower />

      <NavBar />
      <HeroSection />
      {/* About Section */}
<section id="about" className="py-20 px-4 relative z-10">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Profile Image */}
      <div className="w-full md:w-1/2 group">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-nebulaPink/20 to-cosmicBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80"
            alt="Profile"
            className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* About Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-starWhite/80 leading-relaxed">
          I’m a results-driven backend developer with hands-on experience in building robust RESTful APIs and scalable backend systems using Java, Spring Boot, and SQL. I also work with tools like Docker, GitHub Actions, and Jenkins to automate workflows and implement CI/CD pipelines. I enjoy turning complex requirements into clean, efficient solutions that deliver real-world impact.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="group bg-deepSpace/50 border border-nebulaPink/20 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <User className="w-6 h-6 mb-2 text-nebulaPink group-hover:animate-pulse" />
            <h3 className="font-semibold mb-1 text-starWhite group-hover:text-nebulaPink transition-colors">
              Experience
            </h3>
            <p className="text-starWhite/70">6+ Months</p>
          </div>
          <div className="group bg-deepSpace/50 border border-cosmicBlue/20 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <Briefcase className="w-6 h-6 mb-2 text-cosmicBlue group-hover:animate-pulse" />
            <h3 className="font-semibold mb-1 text-starWhite group-hover:text-cosmicBlue transition-colors">
              Projects
            </h3>
            <p className="text-starWhite/70">3 Major Projects</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Projects Section */}
<section id="projects" className="py-20 px-4 relative z-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      

      {/* Candidate Onboarding System */}
      <ProjectCard
        title="Candidate Onboarding System"
        description="An enterprise-grade backend solution that automates the onboarding process of new candidates. It includes modules for candidate data management, status tracking, resume uploads, and email notifications. The system uses asynchronous messaging with RabbitMQ for email processing, CI/CD with Jenkins, and a robust Spring Boot backend built with DTOs, JPA, and layered architecture."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
        tags={['Spring Boot', 'MySQL/Redis', 'Docker', 'Kafka','Jenkins','Swagger']}
        codeLink="https://github.com/dar0408/onBoardingSystem/tree/main/onboarding"
      />

      {/* Book Partner Portal */}
      <ProjectCard
        title="Book Partner Portal"
        description="A full-stack publishing management system designed for authors and publishers to collaboratively manage and submit book proposals. Built using Spring Boot and Thymeleaf, it offers secure authentication, role-based access (author/publisher), dynamic form handling, review workflows, and RESTful APIs. The platform streamlines book onboarding from submission to approval while maintaining clear communication between both roles."
        image="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80"
        tags={['Spring Boot', 'Thymeleaf', 'MySQL', 'JPA']}
        // liveLink="#" // Replace with live link
        codeLink="https://github.com/dar0408/book-partner-portal/tree/main/backend"
      />

    <ProjectCard
  title="AI‑Powered Book Finder"
  description="A modern full‑stack web app that allows users to search, filter, and review books using an intuitive interface. Built with the MERN stack, it includes JWT authentication, user dashboards, scalable REST APIs, and a polished React frontend."
  image="https://images.pexels.com/photos/19336409/pexels-photo-19336409.jpeg"
  tags={['MongoDB', 'Express', 'React', 'Node.js', 'JWT']}
  liveLink="https://book-shelf-pi.vercel.app/"
  codeLink="https://github.com/dar0408/book-client"
/>


    </div>
  </div>
</section>


      {/* Skills Section */}
<section id="skills" className="py-20 px-4 relative z-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
      Skills & Technologies
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        // Backend
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          color: 'text-[#f89820]',
        },
        {
          name: 'Spring Boot',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
          color: 'text-[#6DB33F]',
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          color: 'text-[#4479A1]',
        },

        // Frontend
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          color: 'text-[#61DAFB]',
        },
        {
          name: 'Thymeleaf',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
          color: 'text-[#6DB33F]',
        },
        {
          name: 'HTML5',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          color: 'text-[#E34F26]',
        },
        {
          name: 'CSS3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          color: 'text-[#1572B6]',
        },

        // DevOps & Tools
        {
          name: 'Git',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          color: 'text-[#F05032]',
        },
        {
          name: 'GitHub',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          color: 'text-[#ffffff]',
        },
        {
          name: 'Docker',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          color: 'text-[#2496ED]',
        },
        {
          name: 'Jenkins',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
          color: 'text-[#D24939]',
        },
        {
          name: 'AWS',
          icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
          color: 'text-[#FF9900]',
        },
      ].map((skill, index) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          color={skill.color}
          delay={index * 100}
        />
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="bg-deepSpace/30 backdrop-blur-lg rounded-2xl border border-starWhite/10 p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-starWhite/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-nebulaPink to-cosmicBlue text-transparent bg-clip-text mb-4">
                Darpan Salgotra
              </h3>
              <p className="text-starWhite/70 mb-4">
                Backend Developer specializing in java, spring boot, database
                optimization
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dar0408"
                  className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/darpan-salgotra-87b101210/"
                  className="text-starWhite/70 hover:text-cosmicBlue transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a
                  href="mailto:darpansalgotra2004@gmail.com"
                  className="text-starWhite/70 hover:text-emerald-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-starWhite/70 hover:text-nebulaPink transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <p className="text-starWhite/70 mb-2">
                Email: darpansalgotra2004@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-starWhite/10 pt-8 text-center">
            <p className="text-starWhite/50">
              &copy; {new Date().getFullYear()} Darpan S. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

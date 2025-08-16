import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Download,
  ExternalLink,
  Menu,
  X,
  Code2,
  Database,
  Globe,
  Server,
  MapPin,
  Calendar,
  Trophy,
  ChevronRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Contact from "./Contact.jsx";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock scroll effect for demo
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add custom CSS animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
      }
      
      .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = {
    "Programming Languages": [
      { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
      { name: "Python", icon: <Code2 className="w-6 h-6" /> },
      { name: "Java", icon: <Code2 className="w-6 h-6" /> },
      { name: "C", icon: <Code2 className="w-6 h-6" /> },
    ],
    "Web Technologies": [
      { name: "React.js", icon: <Globe className="w-6 h-6" /> },
      { name: "HTML/CSS", icon: <Globe className="w-6 h-6" /> },
      { name: "Express.js", icon: <Server className="w-6 h-6" /> },
      { name: "Socket.io", icon: <Server className="w-6 h-6" /> },
    ],
    "Databases & Tools": [
      { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
      { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
      { name: "Git", icon: <Code2 className="w-6 h-6" /> },
      { name: "RESTful APIs", icon: <Server className="w-6 h-6" /> },
    ],
  };

  const projects = [
    {
      title: "ChatApp",
      description:
        "A scalable real-time chat application supporting 50+ concurrent users with personal chat, group chat, and file sharing capabilities.",
      tech: ["React.js", "TailwindCSS", "Socket.io", "Express.js"],
      features: [
        "JWT Authentication",
        "Redux State Management",
        "Real-time Messaging",
        "File Sharing",
      ],
      github: "https://github.com/Rudransh421/broken_chat_repair",
    },
    {
      title: "Resume Enhancer",
      description:
        "Full-stack application integrating machine learning models for resume optimization with secure authentication.",
      tech: ["Express.js", "React.js", "Node.js", "ML Integration"],
      features: [
        "ML Model Integration",
        "Child Process Communication",
        "JWT Authentication",
        "Axios-CORS",
      ],
      github: "https://github.com/Rudransh421/lba",
    },
  ];

  const experience = [
    {
      company: "EventsBridge",
      role: "Software Development Engineer Intern",
      duration: "Mar 2024 - Jun 2024",
      highlights: [
        "Established authentication system and backend foundation for 3-4 member team",
        "Structured backend development in three organized phases for scalable delivery",
        "Implemented core backend services including agenda-based jobs and real-time cart functionality",
        "Contributed to full-stack development in high-paced seed-stage startup environment",
      ],
    },
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Winner",
      description:
        "Part of winning 6-member team as backend developer for project GHUMO BHARAT",
      impact:
        "Improved travel experience and reduced complaint resolution time by 40%",
    },
    {
      title: "KSP Datathon Team Lead",
      description:
        "Led 4-member team developing software for Karnataka State Police",
      impact:
        "Designed hierarchical access control preventing 50+ unauthorized access attempts",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">Rudransh Dash</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Projects",
                  "Experience",
                  "Education",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-16 min-h-screen flex items-center justify-center"
      >
        {/* Background logo */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="/logo_nobg.png" // <-- replace with your logo path
            alt="Background Logo"
            className="w-full h-full object-cover opacity-30 blur-sm pointer-events-none select-none"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
                Rudransh Dash
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 animate-fade-in-up animation-delay-200">
                Software Engineering Student & Full-Stack Developer
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
                Backend-first full-stack developer with real-world team
                experience. Passionate about building scalable, well-structured
                software solutions.
              </p>
            </div>

            {/* Buttons & social icons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
              <a
                href="/resume.pdf"
                download="Rudransh_Dash_Resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                >
                  <FaGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:rudransh7381@gmail.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
                I'm a Software Engineering student at NIST University with a
                strong focus on backend-first full-stack development. I thrive
                in team environments and have hands-on experience building
                scalable applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
                As part of the winning team at Smart India Hackathon 2023 and
                team leader at KSP DataThon, I've demonstrated my ability to
                deliver innovative solutions under pressure while working
                collaboratively with diverse teams.
              </p>
              <div className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span>Goilundi, Berhampur, Ganjam, Odisha, India</span>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-right">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                <img
                  src="/mypic.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Skills & Technologies
          </h2>
          <div className="space-y-12">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-semibold text-blue-400 text-center hover:text-blue-300 transition-colors duration-300">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {skillList.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center group hover:-translate-y-2 hover:scale-105"
                    >
                      <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-125 group-hover:text-blue-300 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] animate-fade-in-up group border border-transparent hover:border-blue-500/20"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-gray-300 text-sm flex items-center gap-2"
                          >
                            <ChevronRight className="w-4 h-4 text-blue-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-white">{exp.company}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-5 h-5" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                      <h4 className="text-xl font-bold text-blue-400">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
                    <p className="text-sm text-green-400 font-medium">
                      {achievement.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <h4 className="text-xl text-white">Computer Science</h4>
                  <p className="text-gray-400">
                    National Institute of Science and Technology University
                    (NIST), Odisha
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span>Nov 2022 - Present</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    Intermediate Education
                  </h3>
                  <p className="text-gray-400">Khalikot College, Odisha</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span>Jul 2020 - Jul 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Additional Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Languages
                </h4>
                <p className="text-gray-300">English, Hindi</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Activities
                </h4>
                <p className="text-gray-300">
                  Core Member of Club Excel - Coding Club at NIST University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm actively looking for remote or on-site internship/Job
                  opportunities where I can contribute to building scalable,
                  well-structured software while continuing to grow as a
                  developer.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <a
                    href="mailto:rudransh7381@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    rudransh7381@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">+91 9692486267</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">+91 7381668888</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">
                    Goilundi, Berhampur, Ganjam, Odisha, India
                  </span>
                </div>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                  href="mailto:rudransh7381@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
            {/* All contact me Logic here */}
            <Contact />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Rudransh Dash. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React & TailwindCSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

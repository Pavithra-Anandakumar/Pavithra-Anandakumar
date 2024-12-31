// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./index.css";

function App() {
  const [selectedSection, setSelectedSection] = useState("projects");

  const projects = [
    {
      title: "Online Reservation System",
      description:
        "A Java-based system to book, cancel, and manage reservations efficiently.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_Java_Internship.git",
    },
    {
      title: "Banking Application",
      description:
        "A Java-based system to Deposite, withdraw, cancle, and check account balance efficiently.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_Java_Internship.git",
    },
    {
      title: "Library Management System",
      description:
        "A Java-based Library Management System with the student and teachers access- Login management. Taking book and returning book.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_Java_Internship.git",
    },

    {
      title: "Sign Language Translator",
      description:
        "A hackathon project to translate sign language into spoken language using AI.",
      output: "On Process",
    },
    {
      title: "Beauty Products Landing Page",
      description:
        "A responsive web page showcasing beauty products with order placement features.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_WebDevelopment.git",
    },
    {
      title: "Online Exam Portal",
      description:
        "A Java-based system to provide a platform for the online exam and implement the online exam efficiently using timer functionalities.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_Java_Internship.git",
    },
    {
      title: "Number Gussing Game",
      description:
        "A Java-based system to generate a random number.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_Java_Internship.git",
    },
    {
      title: "Temp Converter",
      description:
        "A responsive web page to celsius to fahrenheit and fahrenheit celsius temperature converter.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_WebDevelopment.git",
    },
    {
      title: "Snake Game",
      description:
        "A Java-based Game development",
      output: "https://github.com/Pavithra-Anandakumar/Java.git",
    },
    {
      title: "TicTacToe Game",
      description:
        "A Java-based Game development.",
      output: "https://github.com/Pavithra-Anandakumar/Java.git",
    },
    {
      title: "JavaScript Calculator",
      description:
        "A responsive and dynamic Calculator",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_WebDevelopment.git",
    },
    {
      title: "Tribute Page",
      description:
        "A responsive web page to Tribute to the Favorite Celebrity",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_WebDevelopment.git",
    },
    {
      title: "Login Authendication",
      description:
        "A responsive web page for the Login Authendication and Storage features.",
      output: "https://github.com/Pavithra-Anandakumar/OIBSIP_WebDevelopment.git",
    }

  ];

  const certifications = [
    {
      title: "NPTEL Java Programming",
      image: "https://drive.google.com/file/d/1za-sUq58O02brxiWDuaXe8CS7XPtYh-N/view?usp=drive_link",
    },
    {
      title: "Core Java- Coursera",
      image: "",
    },
    {
      title: "Data Structures and algorithms- Coursera",
      image: "https://drive.google.com/file/d/1BQbqg_hzZHnCyOAfBV4PbWQ5Qpc-t6Cg/view?usp=sharing",
    },
    {
      title: "Cloud for Engineering leaders.",
      image: "",
    },
    {
      title: "Web Development",
      image: "",
    },
    {
      title: "Python Basics- GUVI",
      image: "",
    },
    {
      title: "Responsive Design",
      image: "",
    },
  ];
  const skills = [
    { title: "Java", details: "Experienced with OOP concepts and Spring Boot." },
    { title: "C++", details: "Experienced with OOP concepts." },
    { title: "SQL", details: "Experienced with the Database Connectivity." },
    { title: "DSA", details: "Experienced with Data Structures and Algorithms. " },
    { title: "JavaScript", details: "Proficient in ES6+, React." },
    { title: "C", details: "Experienced with procedural programming concepts. " },
    { title: "Python", details: "Experienced with OOPs concepts and the Basics of Python Programming." },
    { title: "Linux OS", details: "Expertise in Linux environment." },
    { title: "Web Development", details: "Expertise in HTML, CSS, and UI/UX." },
  ];


  const achievements = [
    { title: "Hackathon 2024", description: "Won 1st prize (Intercollegiate)" },
    { title: "Hasty-Minute to Win 2024", description: "Won 3rd prize (Intercollegiate)" },
    { title: "Smart India Hackathon 2023", description: "Semi-finalist" },
    { title: "DevDay24 Mentorship", description: "Mentored 20+ students during a 32-hour hackathon" },
  ];

  const experiences = [
    {
      title: "DevDay24 Hackathon",
      description:
        "Guided 20+ students during a 32-hour hackathon, focusing on open-source contributions and technical project development.",
    },
    {
      title: "Virtual Internships",
      description:
        "Completed internships with Accenture and Walmart, gaining practical skills in advanced software engineering.",
    },
    {
      title: "DevSkillHub",
      description: "Java Development Intern focusing on OOP and data structures.",
    },
    {
      title: "Oasis Infobyte (Web Dev)",
      description: "Created web apps using HTML, CSS, JavaScript, and React.",
    },
    {
      title: "Oasis Infobyte (Java Dev)",
      description: "Enhanced backend functionality in Java applications.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Pavithra Portfolio</h1>
        <div className="header-links">
          <a
            href="https://github.com/Pavithra-Anandakumar"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pavithra-anandakumar"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1VavxH1Cvo_XlvE2wc1at59Mi8l-nG1mY/view?usp=sharing"
            className="resume"
            download
          >
            Resume
          </a>
        </div>
      </header>

      {/* Avatar Section */}
      <div className="avatar-container">
        <div className="avatar"></div>
        <h2>Pavithra Anandakumar</h2>
        <p className="about">
        A passionate software developer with a strong foundation in programming and a keen eye for design. Committed to crafting innovative solutions that merge functionality with creativity. With hands-on experience in Java, web development, and modern frameworks like React, I excel at developing dynamic, user-friendly applications. My journey includes mentoring aspiring developers, leading impactful projects, and contributing to open-source communities. Eager to learn and adapt to new technologies, I strive to make a meaningful impact through my skills in coding, problem-solving, and collaboration.
        </p>
      </div>

      {/* Navigation Bar */}
      <header className="navbar">
        <h1>Pavithra Anandakumar</h1>
        <nav>
          <button onClick={() => setSelectedSection("projects")}>Projects</button>
          <button onClick={() => setSelectedSection("skills")}>Skills</button>
          <button onClick={() => setSelectedSection("achievements")}>Achievements</button>
          <button onClick={() => setSelectedSection("experience")}>Experience</button>
          <button onClick={() => setSelectedSection("certifications")}>
            Certifications
          </button>
        </nav>
      </header>
    
      {/* Main Content */}
      <main>
        {selectedSection === "projects" && (
          <section className="projects">
            <h2>Projects</h2>
            <div className="card-container">
              {projects.map((project, index) => (
                <div key={index} className="card">
                  <div className="card-front">{project.title}</div>
                  <div className="card-back">
                    <p>{project.description}</p>
                    <a href={project.output} target="_blank" rel="noopener noreferrer">
                      View Output
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedSection === "skills" && (
          <section className="skills">
            <h2>Skills</h2>
            <div className="card-container">
              {skills.map((skill, index) => (
                <div key={index} className="card">
                  <div className="card-front">{skill.title}</div>
                  <div className="card-back">
                    <p>{skill.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedSection === "achievements" && (
          <section className="achievements">
            <h2>Achievements</h2>
            <div className="card-container">
              {achievements.map((achievement, index) => (
                <div key={index} className="card">
                  <div className="card-front">{achievement.title}</div>
                  <div className="card-back">
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedSection === "experience" && (
          <section className="experience">
            <h2>Professional Experience</h2>
            <div className="card-container">
              {experiences.map((experience, index) => (
                <div key={index} className="card">
                  <div className="card-front">{experience.title}</div>
                  <div className="card-back">
                    <p>{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedSection === "certifications" && (
          <section className="certifications">
            <h2>Certifications</h2>
            <div className="card-container">
              {certifications.map((cert, index) => (
                <div key={index} className="card">
                  <div className="card-front">{cert.title}</div>
                  <div className="card-back">
                    {cert.image ? (
                      <img src={cert.image} alt={cert.title} />
                    ) : (
                      <p>Image not available</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;

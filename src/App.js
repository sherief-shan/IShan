import './App.css';
import './BinaryBackground.css';
import profileImage from './profilepic.jpeg';

const binaryColumns = [
  '0101010010110101',
  '1010101101001010',
  '0110010101101001',
  '1001101010010110',
  '1100101010101100',
];

const experience = [
  {
    company: 'Independent Consultant',
    title: 'Web & Mobile Developer',
    period: '2023 - Present',
    details: 'Delivered responsive websites and React Native apps for small businesses and product teams.',
  },
   {
    company: 'IBS Software',
    title: 'Software Engineer',
    period: '2023 - present',
    details: 'Working for 2.5 years as a software engineer in the Architecture team building features and optimizing React-Native (android) , React applications for enterprise clients.',
  },
  // {
  //   company: 'Startup Studio',
  //   title: 'Full-stack Developer',
  //   period: '2019 - 2021',
  //   details: 'Created MVPs and launched production-ready apps using React, Node.js, and cloud services.',
  // },
];

const projects = [
  {
    title: 'Online Book Rental Platform using React',
    description: '  A college project: A web application for renting books online with a user-friendly interface and seamless checkout process.',
  },
  {
    title: 'Sign language recognition system using Deep Learning',
    description: 'A machine learning project for recognizing sign language gestures using deep neural networks.',
  },
 
];

const skills = ['React', 'React Native', 'Node.js', 'TypeScript', 'Responsive Design'];

function App() {
  return (  
    <div className="portfolio-app">
      <div className="background-panel">
        <div className="binary-background" aria-hidden="true">
          {binaryColumns.map((column, index) => (
            <div key={index} className={`binary-strip binary-strip--${index + 1}`}>
              {Array.from({ length: 18 }).map((_, lineIndex) => (
                <span key={lineIndex}>{column}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <header className="header">
        <div className="header-left">
          <p className="name">SHAN S</p>
          <p className="role">Web & Mobile Developer</p>
        </div>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        <section className="section intro-section" id="about">
          <div className="intro-card">
            <img className="profile-image" src={profileImage} alt="Profile" />
            <div>
              <h2>Shan S </h2>
              <p>
                I build dependable web and mobile products using React, React Native, and Node.js. I focus
                on clean, maintainable code and efficient collaboration with design and product teams.
              </p>
              <ul className="profile-details">
                <li><strong>Location:</strong> Remote</li>
                <li><strong>Availability:</strong> Freelance & contract</li>
                <li><strong>Email:</strong> <a href="mailto:hello@shans.dev">shansherief436@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </section>

           <section className="section" id="skills">
          <div className="section-heading">
            <span>Skills</span>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span>Experience</span>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.company} className="experience-card">
                <div>
                  <p className="experience-title">{item.title}</p>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p className="experience-period">{item.period}</p>
                <p className="experience-details">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span>Selected Projects</span>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article key={project.title} className="project-row">
                <p className="project-title">{project.title}</p>
                <p className="project-description">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

     

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <span>Contact</span>
          </div>
          <div className="contact-card">
            <p className="contact-text">
              I’m available for freelance work, contract roles, and new product collaborations.
            </p>
            <a className="email-link" href="mailto:shansherief436@gmail.com">shansherief436@gmail.com</a>
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <p>© 2026 Shan S. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;

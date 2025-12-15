import WorksGrid from "../components/WorksGrid";
import cricklyticsLogo from '../assets/cricklyticsLogo.png';
import nammaCartLogo from '../assets/NammaCartLogo.png';
import firstCrick from '../assets/CricklyticsDetails/first.png'
import secondCrick from '../assets/CricklyticsDetails/second.png'
import thirdCrick from '../assets/CricklyticsDetails/third.png'
import firstNamma from '../assets/NammaCartDetails/first.jpg'
import secondNamma from '../assets/NammaCartDetails/second.png'
import thirdNamma from '../assets/NammaCartDetails/third.jpg'
import './../css/homePage.css'

function HomePage({ theme, setActivePage, setSelectedWork }) {

  const works = [
    {
      title: 'Cricklytics',
      image: cricklyticsLogo,
      desc: 'Cricket tournament management system.',
      link: 'https://cricklytics-4aed5.web.app/',
      first: firstCrick,
      second: secondCrick,
      third: thirdCrick,
      details:
        'Built Cricklytics, a cricket tournament management app using React and Firebase. Features include match scheduling, player statistics, real-time scoring, authentication, and admin dashboards.',
      sticky: 'Built a full-featured social web app using React and Firebase, featuring real-time posts, stories, likes, comments, and one-to-one messaging with notifications. Integrated Firestore, Authentication, and Cloud Functions for seamless data flow and dynamic audio generation. Designed interactive UI elements like modals, video players, and social engagement tools, and deployed the app as a Progressive Web App (PWA) for smooth mobile performance. Enhanced reliability through optimized state management, async data handling, and AI-powered chat with Google Gemini and Speech Synthesis API.'
    },
    {
      title: 'Namma Cart',
      image: nammaCartLogo,
      desc: 'E-commerce platform with React and Node.',
      first: firstNamma,
      second: secondNamma,
      third: thirdNamma,
      details:
        'Contributed to the development of an e-commerce web application using React, focusing on creating responsive and user-friendly frontend components for mobile and desktop interfaces.',
      sticky: 'Gained hands-on experience in building modular components and maintaining clean, maintainable code, supporting the overall project under direct supervision and contributing to timely feature deliveries.',
    },
  ];

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    setActivePage('works');
  };

  return (
    <>
      {/* INTRO */}
      <div className={`home-header ${theme}`}>
          <h2 className="home-title">Welcome to my corner of the web.</h2>
          <p>I’m <span>Naga Prabhu N</span>, a passionate <span>Full Stack Developer</span> skilled in building scalable, interactive, and user-focused web applications. My expertise spans <span>React, Node.js, Firebase, and PostgreSQL,</span> with strong foundations in <span>Java, JavaScript, and Python.</span></p>
          <br />
          <p>I’ve built and deployed real-world projects integrating <span>AI voice features, real-time databases, and Progressive Web Apps</span>. Through my internships, I’ve gained hands-on experience in <span>frontend performance optimization, API integration,</span> and <span>cloud-based backend development</span> using Firebase and Google Cloud Functions.</p>
          <br />
          <p>I enjoy creating seamless digital experiences that combine strong UI/UX design with efficient backend systems. I’m constantly exploring new technologies and love turning innovative ideas into impactful web solutions.</p>
        
      </div>

      {/* WORKS PREVIEW */}
      <section className={`works-section ${theme}`}>
        <div className="works-header">
          <h2 className="works-title">Selected Works</h2>
          <span className="works-year">2024–2025</span>
        </div>
        
        <WorksGrid
          works={works}
          onSelect={handleWorkClick}
          animate={false}
        />
      </section>
    </>
  );
}

export default HomePage;

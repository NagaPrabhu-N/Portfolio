import "./../css/projectPage.css";
import crickImg from "../assets/Projects/cricklyticsLogo.png";
import aiImg from "../assets/Projects/AiInterview.png";
import signImg from "../assets/Projects/SignLanguage.png";
import qrImg from "../assets/Projects/Qr.png";

function ProjectsPage({ theme }) {
  const projects = [
    {
      title: "Cricklytics Sports",
      desc: "Real-time cricket app with live scores, player stats, and match updates.",
      year: "2025",
      image: crickImg,
      link: "https://cricklytics-4aed5.web.app/",
    },
    {
      title: "AI Interview Assistant",
      desc: "Simulates interviews and analyzes responses using AI.",
      year: "2025",
      image: aiImg,
      link: "https://ai-interview-assistant-ten-kappa.vercel.app/",
    },
    {
      title: "Sign Language Interpreter Hearing Impaired",
      desc: "Converts speech into sign visuals for accessibility.",
      year: "2024",
      image: signImg,
      link: "https://github.com/NagaPrabhu-N/Sign-Language-Interpreter-Hearing-Impaired",
    },
    {
      title: "QrCodeGenerator",
      desc: "Real-time QR code generator powered by an external API.",
      year: "2024",
      image: qrImg,
      link: "https://nagaprabhu-n.github.io/QrCodeGenerator/",
    },
  ];

  return (
    <section className={`projects-section ${theme}`}>
      <h2 className="projects-title">Projects</h2>

      <p className="projects-intro">
        I’m <strong>Naga Prabhu</strong>, a full-stack developer passionate about transforming ideas into powerful digital experiences.
         With a sharp eye for design and a love for clean, efficient code,
         I build web applications that connect creativity with technology — turning concepts into seamless, interactive realities.
      </p>

      <div className="projects-list">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-link">
              <div className="project-row" key={index}>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>

                <span className="project-year">{project.year}</span>

                {/* Hover Image */}
                <div className="project-hover-img">
                  <img src={project.image} alt={project.title} />
                </div>

                {/* Mobile Image */}
                <div className="project-mobile-img">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;

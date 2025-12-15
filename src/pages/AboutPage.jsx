import { FaLinkedin, FaGithub, FaCode, FaDownload } from "react-icons/fa";
import profileImg from "../assets/profileAbout.jpg";
import "./../css/about.css";
import resume from '../../public/NagaPrabhu.pdf'

function AboutPage({ theme }) {
  return (
    <section className={`about-section ${theme}`}>
      <div className="about-wrapper">
        {/* LEFT CONTENT */}
        <div className="about-content">
          <h1 className="about-title">I’m Naga Prabhu N!</h1>
          <p>
            <strong>Dedicated Software Developer</strong> with a B.E. in Computer
            Science (VISTAS, Chennai, 2025). Experienced in building{" "}
            <strong>scalable web apps</strong> using <strong>React</strong>,{" "}
            <strong>Firebase</strong>, and <strong>Node.js</strong>.
          </p>
          <p>
            Completed an internship at <strong>Creative Ventures</strong> (Mar–Sep
            2025), developing a <strong>cricket tournament management app</strong>{" "}
            with real-time scoring and social features.
          </p>
          <p>
            Previously worked at <strong>NammaCart Solutions</strong> (Mar–Apr
            2024), creating <strong>responsive, high-performance UIs</strong> in
            React.
          </p>
          <p>
            Built projects like <strong>Cricklytics Sports Website</strong> and an{" "}
            <strong>AI Interview Assistant</strong> powered by{" "}
            <strong>Google Gemini</strong>.
          </p>
          <p>
            Proficient in <strong>Java, JavaScript, Python, and C++</strong>, with
            strong skills in <strong>full-stack development</strong>,{" "}
            <strong>state management</strong>, and{" "}
            <strong>UI optimization</strong>.
          </p>

          {/* Resume button for desktop - centered */}
          <div className="resume-wrapper-desktop">
            <a
              href={resume}
              download="NagaPrabhu.pdf"
              className="resume-btn"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE AND MOBILE/TAB BUTTON */}
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src={profileImg} alt="Naga Prabhu N" />
          </div>

          {/* Resume button for tablet & mobile - below image */}
          <a
            href={resume}
            download="NagaPrabhu.pdf"
            className="resume-btn resume-btn-mobile"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </div>

      {/* SOCIAL LINKS (Tablet & Mobile ONLY) */}
      <div className="about-socials">
        <a href="https://www.linkedin.com/in/naga-prabhu-n-800846264/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/NagaPrabhu-N/" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://leetcode.com/u/NagaPrabhuN/" target="_blank" rel="noreferrer">
          <FaCode /> LeetCode
        </a>
      </div>
    </section>
  );
}

export default AboutPage;
import { useState, useEffect } from "react";
import './../css/worksPage.css'
import cricklyticsLogo from '../assets/cricklyticsLogo.png'
import nammaCartLogo from '../assets/NammaCartLogo.png'
import { IoArrowBack } from "react-icons/io5";
import firstCrick from '../assets/CricklyticsDetails/first.png'
import secondCrick from '../assets/CricklyticsDetails/second.png'
import thirdCrick from '../assets/CricklyticsDetails/third.png'
import firstNamma from '../assets/NammaCartDetails/first.jpg'
import secondNamma from '../assets/NammaCartDetails/second.png'
import thirdNamma from '../assets/NammaCartDetails/third.jpg'
import WorksGrid from "../components/WorksGrid";

function WorksPage({ theme, selectedWork, setSelectedWork }) {
  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, [selectedWork]);


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

  return (
    <section className={`works-page works-section ${theme}`}>
      {/* HEADER */}
      <div className="works-header">
        {selectedWork ? (
          <button className="back-btn" onClick={() => setSelectedWork(null)}>
            <IoArrowBack /> Back to Works
          </button>
        ) : (
          <>
            <h2 className="works-title">Selected Works</h2>
            <span className="works-year">2024–2025</span>
          </>
        )}
      </div>

      {/* GRID VIEW */}
      {!selectedWork && (
        <WorksGrid
          works={works}
          onSelect={setSelectedWork}
          animate={true}
        />
      )}

      {/* DETAIL VIEW */}
      {selectedWork && (
        <div className="work-detail fade-in">
          <h2 className="detail-title">{selectedWork.title}</h2>
          <p className="detail-desc">{selectedWork.details}</p>

          <div className="detail-img-wrapper fade-in fade-delay-1">
            <a href={selectedWork.link}>
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="detail-img"
              />
            </a>
          </div>
          {/* SCROLL SECTION */}
          <div className="work-scroll-section">
            {/* LEFT IMAGES */}
            <div className="work-scroll-images">
              <img className="fade-in fade-delay-1" src={selectedWork.first} alt="detail-1" />
              <img className="fade-in fade-delay-2" src={selectedWork.second} alt="detail-2" />
              <img className="fade-in fade-delay-3" src={selectedWork.third} alt="detail-3" />
            </div>
            {/* RIGHT STICKY CONTENT */}
            <div className="work-scroll-content fade-in fade-delay-2">
              <p>{selectedWork.sticky}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorksPage;

import { useState, useEffect, useRef } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./../css/storiesPage.css";

import nammaImg from "../assets/NammaCartLogo.png";
import firebaseImg from "../assets/firebase.png";
import aiImg from "../assets/Projects/AiInterview.png";

function StoriesPage({ theme }) {
  const [selectedStory, setSelectedStory] = useState(null);
  const [visibleBlocks, setVisibleBlocks] = useState(1);
  const loadRef = useRef(null);

useEffect(() => {
  if (!loadRef.current || !selectedStory) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisibleBlocks((prev) =>
          Math.min(prev + 1, selectedStory.content.length)
        );
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(loadRef.current);

  return () => observer.disconnect();
}, [selectedStory, visibleBlocks]);

  const stories = [
    {
      title: "💬 1. Designing for Flow — UI That Feels Effortless",
      date: "Apr 12, 2024",
      read: "2 minutes",
      image: nammaImg,
      content: [
        "Crafting user interfaces that blend visual appeal with intuitive functionality has been a key focus during my internship at NammoCart Solutions Private Limited...",
        
        "I designed responsive desktop and mobile interfaces using React, focusing on effortless navigation and media player integration, significantly improving user experience.",
        
        "My approach involved optimizing dynamic content loading and accessibility, ensuring clean, maintainable code under tight deadlines.",
        
        "• Improved navigation and media integration for a seamless user flow.\n• Optimized code for better accessibility and reduced load times.\n• Built modular components with Tailwind CSS for scalable UI design.",
        
        "This project reflects my ability to deliver polished UIs, refined further in personal dashboard projects."
      ],
    },
    {
      title: "🧠 2. Building Real-Time Magic with Firebase",
      date: "Mar 3, 2025",
      read: "2 minutes",
      image: firebaseImg,
      content: [
        "Transforming static web pages into dynamic, real-time experiences has been a thrilling journey, leveraging Firebase Cloud Functions, Firestore, and Authentication as showcased in my work at Creative Ventures, Chennai from March 2025 to present.",
        "I developed a cricket tournament management app integrating live updates, chat systems, and voice interactions, enhancing user engagement with features like real-time match scheduling and social feeds.",
        "My role involved designing and hosting the web app on Firebase Hosting, ensuring seamless performance with progressive web app elements and state management.",
        "• Tackled deployment challenges to improve accessibility and performance.\n• Optimized Firestore error handling for high-traffic scenarios.\n• Enhanced user experience with dynamic audio generation and real-time data persistence.",
        "This experience has honed my skills in creating responsive, scalable web solutions."
      ],
    },
    {
      title: "🤖 3. When Code Meets AI: Bringing Conversations to Life",
      date: "Jul 12, 2025",
      read: "2 minutes",
      image: aiImg,
      content:[
        "Merging code with artificial intelligence to create lifelike conversations was a highlight of my internship at Creative Ventures, developing an AI chat interface using React, Firebase, and Google Gemini AI from March 2025 onwards.",
        "This project enabled voice-enabled interactions, synthesizing speech for a human touch, and integrated real-time data persistence with Firestore.",
        "Overcoming challenges like asynchronous data fetching and ensuring scalability, I delivered a robust solution enhancing user interaction.",
        "• Integrated Google Gemini AI for natural speech synthesis.\n• Managed real-time data with Firestore for consistent performance.\n• Ensured scalability through asynchronous data handling techniques.",
        "This experience, built on my B.E. foundation at Vels Institute, underscores my innovation at the AI-web intersection."
      ],
    },
  ];

  return (
    <section className={`stories-section ${theme}`}>
      {/* HEADER */}
      <div className="stories-header">
        {selectedStory ? (
          <button className="back-btn" onClick={() => setSelectedStory(null)}>
            <IoArrowBack /> Back to Stories
          </button>
        ) : (
          <>
            <h2>Insights & Notes</h2>
            <p>
              Ideas, detailed breakdowns, and behind-the-scenes perspectives from my creative process — from early concepts to finished designs,
               and everything I learn along the way.
            </p>
          </>
        )}
      </div>

      {/* GRID VIEW */}
      {!selectedStory && (
        <div className="stories-grid">
          {stories.map((story, index) => (
            <article
              key={index}
              className="story-card"
              onClick={() => setSelectedStory(story)}
            >
              <div className="story-img">
                <img src={story.image} alt={story.title} />
              </div>

              <div className="story-meta">
                <span>{story.date}</span>
                <span>•</span>
                <span>{story.read}</span>
              </div>

              <p>{story.title}</p>
            </article>
          ))}
        </div>
      )}

      {/* DETAIL VIEW */}
      {selectedStory && (
        <>
          {/* DETAIL VIEW */}
          <div className="story-detail">
            <div className="detail-img">
              <img src={selectedStory.image} alt={selectedStory.title} />
            </div>

            <div className="detail-meta">
              <span>{selectedStory.date}</span> •{" "}
              <span>{selectedStory.read}</span>
            </div>

            <h3>{selectedStory.title}</h3>

            <div className="detail-content">
              {selectedStory.content.slice(0, visibleBlocks).map((block, index) => (
                <p key={index} className="story-block">
                  {block}
                </p>
              ))}

              {/* Observer target */}
              {visibleBlocks < selectedStory.content.length && (
                <div ref={loadRef} className="scroll-loader" />
              )}
            </div>
          </div>

          {/* MORE STORIES */}
          <div className="more-stories">
            <div className="more-header">
              <span>You might also like</span>
              <button onClick={() => setSelectedStory(null)}>
                All Stories
              </button>
            </div>

            <div className="more-grid">
              {stories
                .filter((story) => story.title !== selectedStory.title)
                .slice(0, 2)
                .map((story, index) => (
                  <div
                    key={index}
                    className="more-card"
                    onClick={() => {
                      setSelectedStory(story);
                      setVisibleBlocks(1);
                    }}
                  >
                    <div className="more-img">
                      <img src={story.image} alt={story.title} />
                    </div>
                    <h4>{story.title.split("—")[0]}</h4>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default StoriesPage;

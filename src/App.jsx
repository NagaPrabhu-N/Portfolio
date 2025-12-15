import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import WorksPage from './pages/WorksPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import StoriesPage from './pages/StoriesPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || "works";
  });

  const [selectedWork, setSelectedWork] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);


  return (
    <div className={`app-container ${theme}`}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="main-content">
        {activePage === 'home' && (
          <HomePage
            theme={theme}
            setActivePage={setActivePage}
            setSelectedWork={setSelectedWork}
          />
        )}

        {activePage === 'works' && (
          <WorksPage
            theme={theme}
            selectedWork={selectedWork}
            setSelectedWork={setSelectedWork}
          />
        )}
        {activePage === 'projects' && <ProjectsPage theme={theme} />}
        {activePage === 'stories' && <StoriesPage theme={theme} />}
        {activePage === 'contact' && <ContactPage theme={theme} />}
        {activePage === 'about' && <AboutPage theme={theme} />}
      </div>
    </div>
  );
}

export default App

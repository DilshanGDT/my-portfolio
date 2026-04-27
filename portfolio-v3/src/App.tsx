import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EducationExperience from './components/EducationExperience';
import SkillsTechnologies from './components/SkillsTechnologies';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="dark:bg-[#282C33] bg-white min-h-screen font-mono transition-colors duration-300">
        {/* Fixed top navbar */}
        <Navbar />

        {/* Page sections */}
        <main>
          <Hero />
          <EducationExperience />
          <SkillsTechnologies />
          <Projects />
          <ContactMe />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

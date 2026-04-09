import Navbar from "./components/Navbar";
import ChatBubble from "./components/ChatBubble";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Story from "./sections/Story";
import Projects from "./sections/Projects";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      <ChatBubble>
        <Home />
        <Skills />
        <Story />
        <Projects />
        <Blogs />
        <Contact />
      </ChatBubble>
    </div>
  );
}
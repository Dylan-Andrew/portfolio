import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Passion from './components/Passion';
import Contact from './components/Contact';
import Fullpage, { FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage';

function App() {
  return (
    <main className="body-font bg-black">
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <Home />
          <About />
          <Skills  />
          <Projects />
          <Passion />
          <Contact />
        </FullPageSections>
      </Fullpage>
    </main>
  );
}

export default App;

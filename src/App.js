import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      {/* Render Header only if window is defined */}
       <Header />
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experiences */}
      <section id='experience' className='snap-center'>
        {/* Render Experience only if window is defined */}
         <Experience />
      </section>
      {/* Skill */}
      {/* <section id='skills' className='snap-center'>
        
        <Skills />
      </section> */}
      {/* Projects */}
      {/* Projects */}
      {/* Contact */}
      <section id='contact' className='snap-center'>
        {/* Render Contact only if window is defined */}
         <Contact />
      </section>
    </div>
  );
}

export default App;

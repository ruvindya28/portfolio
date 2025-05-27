import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <ToastContainer />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
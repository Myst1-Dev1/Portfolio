import { About } from './components/about';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects';
import { Services } from './components/services';
import { Skills } from './components/skills';
import './styles/Global.scss';
import './styles/styles.scss';
import Loader from 'react-loaders';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function App() {
  AOS.init();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <>
      { loading ? <Loader type='pacman' active/>
        :
        <div>
            <Header/>
            <Navbar />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
        </div>

      }
    </>
  );
}

export default App;

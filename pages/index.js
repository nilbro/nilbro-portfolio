import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Experiences />
            <Skills />
            <Education />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
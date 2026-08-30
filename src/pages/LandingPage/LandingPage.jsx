import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Stack from '../../Components/Stack/Stack';
import Featured from '../../Components/Featured/Featured';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <About />
                <Stack />
                <Featured />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="antialiased">
        <Hero />
        <Dishes />
        <About />
        <Mission />
        <Expertise />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

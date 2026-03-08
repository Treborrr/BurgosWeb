import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingSystem from './components/BookingSystem';
import InfoSections from './components/InfoSections';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <BookingSystem />
      <InfoSections />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

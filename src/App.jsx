import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingSystem from './components/BookingSystem';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <BookingSystem />
      <InfoSections />
      <Footer />
    </div>
  );
}

export default App;

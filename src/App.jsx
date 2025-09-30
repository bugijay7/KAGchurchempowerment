import React from 'react';
import { 
  Menu, X, ChevronRight, Play, Calendar, MapPin, Phone, Mail, 
  Facebook, Youtube, Instagram, Heart, Users, BookOpen, Sparkles, 
  Baby, MessageCircle 
} from 'lucide-react';

// Import components from the components folder
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import Events from './components/Events';
import Sermons from './components/Sermons';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import DonateCTA from './components/DonateCTA';
import Footer from './components/Footer';

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Ministries />
      <Events />
      <Sermons />
      <Testimonials />
      <Contact />
      <DonateCTA />
      <Footer />
    </div>
  );
}

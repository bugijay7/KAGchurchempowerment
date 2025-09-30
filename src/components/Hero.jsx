import React from "react";
import { ChevronRight, Play, Calendar, MapPin } from "lucide-react";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-blue-900/50 sm:bg-blue-900/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Welcome Badge */}
        <div className="mb-6">
          <span className="inline-block bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            Welcome Home
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-snug sm:leading-tight">
          KAG Christian Empowerment
          <br className="hidden sm:block" />
          Church — Dagoretti
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Worship. Teach. Serve. Empower.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("about")}
            className="w-full sm:w-auto bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
            Join Us <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection("sermons")}
            className="w-full sm:w-auto bg-blue-600/80 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-105 border-2 border-white/30 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" /> Watch Sermons
          </button>
        </div>

        {/* Service Info */}
        <div className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 text-white justify-center">
            <Calendar className="w-6 h-6 text-blue-300" />
            <div className="text-left">
              <p className="text-sm text-blue-200">Sunday Service</p>
              <p className="font-semibold">9:00 AM</p>
            </div>
          </div>

          {/* Divider */}
          <div className="sm:hidden h-px w-full bg-white/20"></div>
          <div className="hidden sm:block w-px bg-white/20"></div>

          <div className="flex items-center gap-3 text-white justify-center">
            <Calendar className="w-6 h-6 text-blue-300" />
            <div className="text-left">
              <p className="text-sm text-blue-200">Wednesday Prayer</p>
              <p className="font-semibold">6:30 PM</p>
            </div>
          </div>

          {/* Divider */}
          <div className="sm:hidden h-px w-full bg-white/20"></div>
          <div className="hidden sm:block w-px bg-white/20"></div>

          <div className="flex items-center gap-3 text-white justify-center">
            <MapPin className="w-6 h-6 text-blue-300" />
            <div className="text-left">
              <p className="text-sm text-blue-200">Location</p>
              <p className="font-semibold">Dagoretti, Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

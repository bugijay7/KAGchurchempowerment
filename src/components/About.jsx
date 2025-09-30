import React from "react";
import { ChevronRight } from "lucide-react";
import aboutImg from "../assets/image1.jpg"; // 👈 import your image

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Church community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-6">
              Building a Christ-Centered Community
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              We're committed to building a Christ-centered community in Dagoretti that worships God,
              serves neighbors, and empowers disciples for kingdom impact.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Since our founding, KAG Christian Empowerment Church has been a beacon of hope and faith
              in the Dagoretti community. We believe in the transformative power of God's love and the
              importance of walking together in faith, fellowship, and service.
            </p>
            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
              Learn More About Our Mission
              <ChevronRight className="w-5 h-5 group-hover:text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

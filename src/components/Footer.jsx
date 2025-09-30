import React, { useState } from "react";
import { Heart, Facebook, Youtube, Instagram } from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-900" fill="currentColor" />
              </div>
              <div>
                <p className="text-xl font-bold">KAG Church</p>
                <p className="text-sm text-blue-300">Dagoretti</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 max-w-sm">
              Building a Christ-centered community that worships God, serves neighbors, and empowers disciples for kingdom impact.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition">About Us</button></li>
              <li><button onClick={() => document.getElementById("ministries")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition">Ministries</button></li>
              <li><button onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition">Events</button></li>
              <li><button onClick={() => document.getElementById("sermons")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition">Sermons</button></li>
              <li><button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-blue-200 text-sm mb-4">Stay updated with our latest news and events.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; 2025 KAG Christian Empowerment Church - Dagoretti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Calendar } from "lucide-react";

function Events() {
  const events = [
    { title: "Sunday Worship Service", date: "Every Sunday", time: "9:00 AM", description: "Join us for powerful worship, inspiring preaching, and fellowship." },
    { title: "Wednesday Prayer Meeting", date: "Every Wednesday", time: "6:30 PM", description: "Corporate prayer time seeking God's presence and guidance." },
    { title: "Youth Rally", date: "October 15, 2025", time: "3:00 PM", description: "An afternoon of worship, games, and fellowship for our youth." },
    { title: "Women's Conference", date: "November 5-6, 2025", time: "9:00 AM", description: "Two-day conference focused on faith, family, and purpose." }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">What's Happening</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay connected with our church community through these upcoming gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {event.date}
                    </span>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
                    RSVP Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;

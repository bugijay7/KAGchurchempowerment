import React from "react";
import { Play, ChevronRight } from "lucide-react";

function Sermons() {
  const sermons = [
    { title: "Walking in Faith", preacher: "Pastor John Kamau", date: "September 24, 2025", series: "Faith Series" },
    { title: "The Power of Prayer", preacher: "Rev. Mary Wanjiku", date: "September 17, 2025", series: "Prayer Life" },
    { title: "God's Grace Abounds", preacher: "Pastor John Kamau", date: "September 10, 2025", series: "Grace Series" },
    { title: "Living with Purpose", preacher: "Elder Peter Mwangi", date: "September 3, 2025", series: "Purpose Driven" }
  ];

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Messages</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">Recent Sermons</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Watch or listen to our latest messages and be encouraged in your faith journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sermons.map((sermon, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 cursor-pointer hover:scale-110 transition">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-600 font-semibold">{sermon.series}</span>
                <h3 className="text-lg font-bold text-blue-900 mt-1 mb-2">{sermon.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{sermon.preacher}</p>
                <p className="text-xs text-gray-500">{sermon.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition inline-flex items-center gap-2">
            View All Sermons <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sermons;


import React from "react";
import { Heart, Users, Sparkles, Baby, BookOpen, MessageCircle, ChevronRight } from "lucide-react";

function Ministries() {
  const ministries = [
    { icon: <Heart className="w-8 h-8" />, title: "Worship Ministry", description: "Join our vibrant worship team as we lift up praise to God through music and song.", action: "Join Worship" },
    { icon: <Users className="w-8 h-8" />, title: "Youth Ministry", description: "Empowering the next generation with biblical truth and Christ-centered fellowship.", action: "Join Youth" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Outreach Ministry", description: "Serving our community with love, compassion, and the gospel of Jesus Christ.", action: "Volunteer" },
    { icon: <Baby className="w-8 h-8" />, title: "Children's Ministry", description: "Nurturing young hearts with age-appropriate biblical teaching and fun activities.", action: "Get Involved" },
    { icon: <BookOpen className="w-8 h-8" />, title: "Women's Ministry", description: "Building sisterhood through Bible study, prayer, and mutual encouragement.", action: "Join Us" },
    { icon: <MessageCircle className="w-8 h-8" />, title: "Counseling Ministry", description: "Providing spiritual guidance and support through life's challenges.", action: "Learn More" }
  ];

  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Get Involved
          </span>
          <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">Our Ministries</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover ways to serve, grow, and connect through our various ministry opportunities.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                {ministry.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{ministry.title}</h3>
              <p className="text-gray-600 mb-4">{ministry.description}</p>
              <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                {ministry.action} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ministries;

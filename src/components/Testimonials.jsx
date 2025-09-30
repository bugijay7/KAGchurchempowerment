import React from "react";

function Testimonials() {
  const testimonials = [
    { name: "Sarah Njeri", quote: "This church has been a blessing to my family. The teachings are biblical and the community is loving and supportive.", avatar: "SN" },
    { name: "David Ochieng", quote: "I found my purpose through the mentorship and discipleship programs here. God is doing amazing things in this community.", avatar: "DO" },
    { name: "Grace Akinyi", quote: "The youth ministry changed my life. I've grown so much in my faith and made lifelong friends who encourage me daily.", avatar: "GA" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Testimonies</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Lives Transformed</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Hear from members of our community about how God is working in their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-200">Church Member</p>
                </div>
              </div>
              <p className="text-blue-50 leading-relaxed italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

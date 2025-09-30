import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function DonateCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="donate" className="py-20 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Support Our Mission</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Your generous giving helps us continue spreading the gospel, supporting our community, and empowering lives through Christ.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
          >
            <Heart className="w-6 h-6" /> Give Now
          </button>
          <p className="text-red-100 text-sm mt-4">All donations are tax-deductible</p>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Make a Donation</h3>
              <p className="text-gray-600">Thank you for your generosity!</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm font-semibold text-blue-900 mb-2">Bank Transfer</p>
                <p className="text-sm text-gray-700">Bank: Kenya Commercial Bank<br />Account: 1234567890<br />Name: KAG Dagoretti</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm font-semibold text-blue-900 mb-2">M-Pesa Paybill</p>
                <p className="text-sm text-gray-700">Business No: 400200<br />Account: KAGDAGORETTI</p>
              </div>
            </div>

            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

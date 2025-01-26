import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container mx-auto p-4 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Get Touch with Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or need assistance? Fill out the form below, and our
            team will get back to you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#5f2ded]  text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            <div className="bg-[#5f2ded]  text-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#5f2ded]  p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10l1.5-1.5a12 12 0 0117 0L21 10m-9 10a3 3 0 00-6 0m15 0a3 3 0 01-6 0"
                        />
                      </svg>
                    </span>
                    <span>contact@school.edu</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#5f2ded]  p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10l1.5-1.5a12 12 0 0117 0L21 10m-9 10a3 3 0 00-6 0m15 0a3 3 0 01-6 0"
                        />
                      </svg>
                    </span>
                    <span>03405568206</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#5f2ded]  p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-5m-4 0a9 9 0 11-8-8v1"
                        />
                      </svg>
                    </span>
                    <span>123 School St, Education Sakhra, Pakistan</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <iframe
              
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=swat sakhra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="w-full h-64 mt-6 rounded-lg shadow-lg border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

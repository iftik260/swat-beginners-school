import React from "react";

const Admissions = () => {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <button className="text-[14px] font-bold text-[#5f2ded] bg-[#e7deff] rounded-[20px] py-1 px-6 mb-4">
            Admissions
          </button>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          We are excited to welcome new students to our community. Our admissions process is simple and straightforward. Learn more about how to apply below.
        </p>

        {/* Steps */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md flex-1 min-w-[250px] max-w-[350px] text-left">
            <h3 className="text-2xl font-semibold text-[#004080] mb-4">
              Step 1: Application
            </h3>
            <p className="text-base leading-relaxed">
              Submit your application form online or in person. Make sure to include all necessary documentation.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md flex-1 min-w-[250px] max-w-[350px] text-left">
            <h3 className="text-2xl font-semibold text-[#004080] mb-4">
              Step 2: Interview
            </h3>
            <p className="text-base leading-relaxed">
              After reviewing your application, we will schedule an interview to get to know you better.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md flex-1 min-w-[250px] max-w-[350px] text-left">
            <h3 className="text-2xl font-semibold text-[#004080] mb-4">
              Step 3: Enrollment
            </h3>
            <p className="text-base leading-relaxed">
              Once accepted, complete the necessary paperwork and enrollment to confirm your spot.
            </p>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-8">
          <a
            href="#apply"
            className="bg-[#5f2ded]  text-white font-bold py-2 px-6 rounded-lg shadow-md mr-4  transition duration-300"
          >
            Apply Now
          </a>
          <a
            href="#contact"
            className="bg-[#f2277e] text-white font-bold py-2 px-6 rounded-lg shadow-md  transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

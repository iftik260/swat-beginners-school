import React from "react";

const Academics = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-[#5f2ded] via-[#6a4bf8] to-[#7b67ff]">
      <div className="container mx-auto p-4">
        {/* Header */}
        <button className="text-[14px] font-bold text-[#5f2ded] bg-[#e7deff] rounded-[20px] py-1 px-6 mb-4 shadow-lg">
          Our Academics
        </button>
        <h2 className="text-4xl font-bold mb-6 text-white leading-tight">
          Empowering Minds Through Excellence in Education
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-white opacity-90 max-w-3xl mx-auto">
          We provide a well-rounded curriculum designed to prepare students for
          future success. Our academic programs foster critical thinking,
          creativity, and lifelong learning.
        </p>

        {/* Programs */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Program Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[350px] text-left transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-[#5f2ded] mb-4">
              STEM Programs
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              Our science, technology, engineering, and math programs help
              students develop problem-solving skills and innovative thinking.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block text-sm font-bold text-[#5f2ded] hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
          {/* Program Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[350px] text-left transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-[#5f2ded] mb-4">
              Arts & Humanities
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              Encouraging creativity and expression, our arts programs offer
              students opportunities to explore music, theater, and visual arts.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block text-sm font-bold text-[#5f2ded] hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
          {/* Program Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[350px] text-left transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-[#5f2ded] mb-4">
              Sports
            </h3>
            <p className="text-base leading-relaxed text-gray-600">
              Our sports programs focus on teamwork, discipline, and physical
              fitness, offering various team and individual sports.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block text-sm font-bold text-[#5f2ded] hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;

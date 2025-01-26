import React from 'react';
import aboutImage from "../components/assets/images/happy-sdt.jpg"
import ExperiencedT from "../components/assets/images/experience-teacher.jpg"
import modernF from "../components/assets/images/modern-facilities.jpg"
import StrongC from "../components/assets/images/strong.jpg"




function AboutUsPage() {
  return (
    <>
      <section id="about-us-page" className="py-16 px-4 bg-gray-100">
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Text Section */}
    <div className="flex-1 text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">About Us</h2>
      <p className="text-base md:text-lg text-gray-700 mb-4">
        At [Your School Name], we are committed to fostering an environment of learning, growth, and success.
        Our dedicated faculty and state-of-the-art facilities ensure that every student has the resources they need
        to reach their full potential.
      </p>
      <p className="text-base md:text-lg text-gray-700 mb-6">
        From academics to extracurriculars, our mission is to nurture well-rounded individuals
        who are prepared to make meaningful contributions to the world.
      </p>
      <a
        href="#contact-us"
        className="inline-block bg-blue-900 text-white py-2 px-6 rounded-lg text-base md:text-lg transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900"
      >
        Get in Touch
      </a>
    </div>

    {/* Image Section */}
    <div className="flex-1 text-center">
      <img
        src={aboutImage}
        alt="About Us Image"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg mx-auto"
      />
    </div>
  </div>
</section>


      {/* Key Highlights Section */}
      <section id="key-highlights" className="py-16 px-4 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-900 mb-8">Why Choose Swat Beginners School?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
              <img src={ExperiencedT}  alt="Experienced Teachers" className="w-full h-48 object-cover rounded-t-xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Experienced Teachers</h3>
              <p className="text-gray-700">Our faculty consists of experienced professionals dedicated to providing quality education.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
              <img src={modernF} alt="Modern Facilities" className="w-full h-48 object-cover rounded-t-xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Modern Facilities</h3>
              <p className="text-gray-700">State-of-the-art classrooms, labs, and sports facilities to ensure holistic development.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
              <img src={StrongC}  alt="Strong Community" className="w-full h-48 object-cover rounded-t-xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Strong Community</h3>
              <p className="text-gray-700">A supportive environment fostering growth, creativity, and collaboration.</p>
            </div>
          </div>
        </div>
      </section>z

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-blue-900 mb-8">Our Journey</h2>
          <ul className="space-y-8">
            <li className="flex items-start space-x-4 border-l-4 pl-6">
              <div className="text-xl text-blue-900 font-semibold">2000</div>
              <p className="text-lg text-gray-700">Swat Beginners School was established, aiming to provide quality education to young minds.</p>
            </li>
            <li className="flex items-start space-x-4 border-l-4 pl-6">
              <div className="text-xl text-blue-900 font-semibold">2010</div>
              <p className="text-lg text-gray-700">Expanded to include state-of-the-art science and computer labs for enhanced learning.</p>
            </li>
            <li className="flex items-start space-x-4 border-l-4 pl-6">
              <div className="text-xl text-blue-900 font-semibold">2020</div>
              <p className="text-lg text-gray-700">Became one of the top schools in the region, known for excellence in academics and extracurriculars.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;

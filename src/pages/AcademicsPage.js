import React from "react";
import scienceProgramImage from '../components/assets/images/science-program.jpg';
import artsProgramImage from '../components/assets/images/arts-program.jpg';
import sportsProgramImage from '../components/assets/images/sports-program.jpg';
import facultyImage from '../components/assets/images/faculty.jpg';

const AcademicsPage = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Our Academics</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore our diverse academic programs designed to foster growth, innovation, and excellence.
        </p>
      </div>

      {/* Programs Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <a
                href="#contact"
                className="inline-block bg-blue-900 text-white py-2 px-4 rounded-lg text-sm hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Our Achievements</h2>
        <p className="text-lg text-gray-700 mb-8">
          Proudly celebrating our students' and faculty's exceptional accomplishments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Faculty Highlight Section */}
      <div className="mt-16 bg-blue-50 py-12 px-4">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-6">Meet Our Faculty</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Our faculty members are passionate educators dedicated to helping students achieve their fullest potential.
        </p>
        <div className="flex justify-center gap-8">
          {faculty.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{member.position}</p>
              <p className="text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

// Sample data for programs and achievements
const programs = [
  {
    id: 1,
    title: "Science Program",
    description:
      "Fostering a scientific mindset with state-of-the-art labs and expert faculty.",
    image: scienceProgramImage,
  },
  {
    id: 2,
    title: "Arts Program",
    description: "Encouraging creativity and innovation in the arts.",
    image: artsProgramImage,
  },
  {
    id: 3,
    title: "Sports Program",
    description: "Developing athletic excellence with modern facilities.",
    image: sportsProgramImage,
  },
];

const achievements = [
  {
    id: 1,
    title: "Top Regional School in 2023",
    description: "Recognized for outstanding academic performance and extracurriculars.",
  },
  {
    id: 2,
    title: "100% College Acceptance Rate",
    description: "Our students have been accepted into top universities worldwide.",
  },
  {
    id: 3,
    title: "Award-Winning Faculty",
    description: "Our educators have received numerous accolades for excellence in teaching.",
  },
];

const faculty = [
    {
      id: 1,
      name: "Dr. Emily Roberts",
      position: "Head of Science Department",
      description: "Dr. Roberts has over 15 years of experience in scientific research and education.",
      image: facultyImage,
    },
    {
      id: 2,
      name: "Prof. Michael Lee",
      position: "Lead Arts Instructor",
      description: "Prof. Lee specializes in visual arts and has exhibited work internationally.",
      image: facultyImage,
    },
    {
      id: 3,
      name: "Coach Sarah Williams",
      position: "Sports Program Coordinator",
      description: "Coach Williams has led numerous teams to victory and specializes in student-athlete development.",
      image: facultyImage,
    },
  ];
export default AcademicsPage;

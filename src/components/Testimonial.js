import React from "react";
import ProfileImage from "./assets/images/profile-test.PNG";

const Testimonials = () => {
  const testimonials = [
    {
      image: ProfileImage,
      text: "The teachers here are so supportive, and the extracurricular activities have helped me discover my passions.",
      name: "Sarah Johnson",
      role: "Grade 10",
    },
    {
      image: ProfileImage,
      text: "We are so happy we chose this school for our children. The academics and community spirit are outstanding.",
      name: "Emily Brown",
      role: "Parent",
    },
    {
      image: ProfileImage,
      text: "I will always cherish the memories I made here. The school prepared me for college and beyond.",
      name: "James Smith",
      role: "Alumni",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#000000] mb-4 md:text-4xl">
          What Our Community Says
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Hear from our students, parents, and alumni about their experiences at
          our school.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#d63384] mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
              <h4 className="text-lg font-semibold text-[#6610f2] mb-1">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

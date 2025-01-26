import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrophy, faUserGraduate, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import StudentImage from "./assets/images/swat-beginners-school-logo-jpg.jpg";
import bgImage from "./assets/images/about_3.png";

const AboutUs = () => {
  const [startCount, setStartCount] = useState(false);

  // Ref and InView hooks for animation
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) setStartCount(true);
    },
  });

  return (
    <section className="pt-12 bg-gray-100 flex justify-center">
      <div className="container mx-auto p-4 flex flex-wrap gap-8 items-center">
        {/* About Image */}
        <div
          ref={imageRef}
          className={`flex-1 max-w-[400px] min-w-[300px] relative ${
            imageInView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <img
            src={StudentImage}
            alt="About Us"
            className="w-full rounded-lg z-50 shadow-lg transition-transform duration-300 ease-in-out origin-bottom-right hover:rotate-6"
          />
          <div className="absolute top-0 translate-x-[-20px] z-[-1]">
            <img src={bgImage} />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-[20px] z-[-1]">
            <img src={bgImage} />
          </div>
        </div>

        {/* About Text */}
        <div
          ref={textRef}
          className={`flex-1 lg:px-12 ${
            textInView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <button className="text-[14px] font-bold text-[#5f2ded] bg-[#e7deff] rounded-[20px] py-1 px-6 mb-4">
            About Us
          </button>
          <h2 className="text-5xl font-bold leading-[54px] mb-6 relative z-10">
            Welcome to Swat {""}
            <div className="border-b-[8px] border-[#F2277E] absolute right-[6rem] bottom-1 w-[173px] z-[-1]"></div>{" "}
            Beginners School from the Director
          </h2>
          <p className="text-sm text-[#5f6c76] leading-relaxed mb-3 border-l-2 border-[#5f2ded] pl-4">
            Our mission is to inspire lifelong learning, develop critical thinkers, and instill values of integrity, respect, and compassion.
          </p>
          <p className="text-sm text-[#5f6c76] leading-relaxed mb-3 border-l-2 border-[#5f2ded] pl-4">
            We believe education goes beyond textbooks—it’s about equipping our students with the skills and mindset to excel in a rapidly evolving world.
          </p>
          <p className="text-sm text-[#5f6c76] leading-relaxed mb-6 border-l-2 border-[#5f2ded] pl-4">
            This journey is only possible with the collective efforts of our dedicated teachers, supportive parents, and motivated students.
          </p>

          {/* List with FontAwesome Ticked Icons */}
          <ul className="space-y-4">
            {[
              "Together, we will continue to make SBS a place of excellence and growth.",
              "Thank you for being an essential part of our family.",
              "Let us work hand in hand to empower the leaders of tomorrow.",
              "Warm regards, Ihsan ul Haq",
              "Director Swat Beginners School Sakhra Swat.",
            ].map((text, index) => (
              <li key={index} className="flex items-center text-sm">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#5f2ded] bg-[#e7deff] p-1 hover:bg-[#5f2ded] hover:text-white duration-300 mr-3"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 uppercase pt-[20px] pb-[50px]"
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-[#dc3545] text-3xl"
            />
            <div>
              <span className="text-3xl font-bold">
                {startCount && (
                  <CountUp start={0} end={0} duration={2} delay={0.2} />
                )}
              </span>
              <p className="text-[16px] font-medium">Total Achievements</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faUserGraduate}
              className="text-[#dc3545] text-3xl"
            />
            <div>
              <span className="text-3xl font-bold">
                {startCount && (
                  <CountUp start={0} end={300} duration={2.5} delay={0.3} />
                )}
                +
              </span>
              <p className="text-[16px] font-medium">Students</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="text-[#dc3545] text-3xl"
            />
            <div>
              <span className="text-3xl font-bold">
                {startCount && (
                  <CountUp start={0} end={25} duration={2} delay={0.4} />
                )}
                +
              </span>
              <p className="text-[16px] font-medium">Faculty Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

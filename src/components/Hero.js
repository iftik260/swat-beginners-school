import React from "react";
import HomeCarosel from "./HomeCarousel";
import Slide1 from "./assets/images/slide-1.jpg"
import Slide2 from "./assets/images/slide-2.jpg"

const Hero = () => {
  const slides = [
    {
      image: Slide1,
      title: "Welcome to Swat Beginners School",
      description: "Transforming education for the leaders of tomorrow.",
      buttonText: "Learn More",
    },
    {
      image: Slide2,
      title: "Inspiring Innovation",
      description: "Empowering students with cutting-edge resources.",
      buttonText: "Discover Now",
    },
  ];

  return (
    <div className=" h-full ">
      <HomeCarosel slides={slides} />
    </div>
  );
};

export default Hero;

import React from "react";
import GalleryImage1 from "./assets/images/gallery1.jpg";
import GalleryImage2 from "./assets/images/gallery2.jpg";
import GalleryImage3 from "./assets/images/gallery3.jpg";
import GalleryImage4 from "./assets/images/sports.jpg";

const Gallery = () => {
  const images = [
    { src: GalleryImage1, alt: "Campus Image 1" },
    { src: GalleryImage2, alt: "Event Image 1" },
    { src: GalleryImage3, alt: "Classroom Image 1" },
    { src: GalleryImage4, alt: "Sports Image 1" },
  ];

  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6">
      <button className="text-[14px] font-bold text-[#5f2ded] bg-[#e7deff] rounded-[20px] py-1 px-6 mb-4">
            Gallery
          </button>
        <p className="text-lg mb-8">
          Take a look at our students, campus, and events in action.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

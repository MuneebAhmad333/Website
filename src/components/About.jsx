import React, { useState } from 'react';

const About = () => {
  const slides = [
    {
      title: "Who I Am",
      content:
        "Hi, I'm Muneeb Ahmad, a passionate and results-driven Software Engineer specializing in JavaScript, React, C#, and OOP. With a strong foundation in modern web and mobile application development, I strive to create efficient, scalable, and visually engaging digital solutions.",
    },
    {
      title: "What I Do",
      content:
        "I excel in front-end development, crafting responsive and user-friendly designs using React and Tailwind CSS. My experience extends to building mobile applications with React Native and integrating powerful backend services using .NET technologies.",
    },
    {
      title: "My Mission",
      content:
        "As a software engineer, my mission is to bridge creativity with functionality, delivering solutions that not only meet business goals but also exceed user expectations. I aim to continuously evolve by embracing new technologies and innovative practices.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section id="about" className="bg-cover bg-center py-12"
    style={{ backgroundImage: "url('/public/images/BG-02.webp')" }}>
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-100 hover:text-black">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8">

        {/* Carousel Section */}
        <div className="relative w-full md:w-2/3 mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              {slides[currentSlide].title}
            </h3>
            <p className="text-gray-700 text-lg">{slides[currentSlide].content}</p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <button
              onClick={handlePrev}
              className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-black-600"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-black-600"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

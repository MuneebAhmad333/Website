import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 hover:text-black">
          Contact Me
        </h2>
        <div className="flex justify-center items-center gap-6 mt-8">
          <a
            href="http://linkedin.com/in/muneeb-ahmad-014749195"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/MuneebAhmad333"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
            GitHub
          </a>
          <a
            href="https://www.instagram.com/_muneeb.raja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
            Instagram
          </a>
          <a
            href="mailto:muneebrajamuneeb63@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-red-600"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Gmail"
              className="w-6 h-6"
            />
            Gmail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-60 text-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold hover:text-black">Muneeb Ahmad</h1>
        <nav>
          <a href="#about" className="px-4 hover:text-black">About Me</a>
          <a href="#skills" className="px-4 hover:text-black">My Skills</a>
          <a href="#projects" className="px-4 hover:text-black">My Projects</a>
          <a href="#contact" className="px-4 hover:text-black">Contact Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', percentage: 70 },
    { name: 'OOP', percentage: 75 },
    { name: 'C#', percentage: 50 },
    { name: 'React', percentage: 80 },
  ];

  const skillColors = [
    'bg-red-600 text-white',
    'bg-blue-500 text-white',
    'bg-yellow-500 text-white',
    'bg-green-500 text-white',
  ];

  return (
    <section
      id="skills"
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/public/images/BG-02.webp')" }}
    >
      <div className="container mx-auto text-center bg-white bg-opacity-20 p-8 rounded-lg shadow-md">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-100 hover:text-black">My Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 shadow-lg rounded-lg w-40 h-52 flex flex-col items-center justify-between ${skillColors[index % skillColors.length]}`}
            >
              {/* Skill Name */}
              <h3 className="font-semibold text-xl">{skill.name}</h3>

              {/* Percentage Bar */}
              <div className="w-full mt-3">
                <div className="bg-gray-300 rounded-full h-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: index % 2 === 0 ? '#FBBF24' : '#F59E0B', // Yellow gradient
                    }}
                  ></div>
                </div>
                <p className="mt-1 text-sm text-white">{skill.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Blog Application",
      description:
        "A React-based blog application that allows users to create, edit, and view blogs with features like authentication and CRUD operations.",
      image: "/public/images/BG-06.jpg",
    },
    {
      title: "Product Management System",
      description:
        "A .NET-based product management system using LINQ to JSON, enabling users to add, update, delete, and search for products.",
      image: "/public/images/BG-07.jpg",
    },
    {
      title: "Employee Management System",
      description:
        "A three-tier and MVCEF .NET project for registering employees, managing their details, and providing a user-friendly interface for database operations.",
      image: "/public/images/image01.png",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-cover bg-center py-12"
      style={{
        backgroundImage: 'url("/public/images/BG-02.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-100 hover:text-black">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded text-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

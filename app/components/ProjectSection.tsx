import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  filename: string;
  alt: string;
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/api/fetch");
        const data = await res.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <section
      className="w-full py-12 sm:py-16 flex flex-col items-center bg-[#0D2220]"
      id="projects"
    >
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
          Our completed <span className="text-[#00c851]">work</span> 👷
        </h2>
        <p className="mt-4 text-lg sm:text-2xl font-regular font-['Poppins'] text-[#DDDDDD] leading-normal max-w-4xl mx-auto">
          Discover our portfolio of completed projects,<br />
          showcasing our craftsmanship and design expertise in every space.
        </p>
      </div>

      {/* Projects Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 px-6 sm:px-8 max-w-7xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full sm:w-96 md:w-auto custom-lg:w-[36rem] h-64 sm:h-80 custom-lg:h-84 rounded-2xl overflow-hidden shadow-lg group"
          >
            <motion.img
              src={`/images/projects/${project.filename}`}
              alt={project.alt}
              width="640"
              height="360"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

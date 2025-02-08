import { motion } from "framer-motion";

const ProjectsSection = () => {
  // 1. Create an array of images (with src and alt text).
  //    Make sure these files exist in your public/images folder (for Next.js) or an equivalent folder in a standard React app.
  const projectImages = [
    { src: "/images/projects/img (1).webp", alt: "Project 1" },
    { src: "/images/projects/img (2).webp", alt: "Project 2" },
    { src: "/images/projects/img (3).webp", alt: "Project 3" },
    { src: "/images/projects/img (4).webp", alt: "Project 4" },
    { src: "/images/projects/img (5).webp", alt: "Project 5" },
    { src: "/images/projects/img (6).webp", alt: "Project 6" },
    { src: "/images/projects/img (7).webp", alt: "Project 7" },
    { src: "/images/projects/img (8).webp", alt: "Project 8" }
  ];

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
        {projectImages.map((image, index) => (
          <div
            key={index}
            className="relative w-full sm:w-96 md:w-auto custom-lg:w-[36rem] h-64 sm:h-80 custom-lg:h-84 rounded-2xl overflow-hidden shadow-lg group"
          >
            <motion.img
              src={image.src}
              alt={image.alt}
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

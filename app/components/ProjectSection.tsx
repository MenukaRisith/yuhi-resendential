import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section
      className="w-full py-12 sm:py-16 flex flex-col items-center bg-[#0D2220]"
      id="projects"
    >
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
          Our Completed <span className="text-[#00c851]">Work</span> 👷
        </h2>
        <p className="mt-4 text-lg sm:text-2xl font-regular font-['Poppins'] text-[#DDDDDD] leading-normal max-w-4xl mx-auto">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Aaugue tincidunt
          libero cras primis sodales nisl.
        </p>
      </div>

      {/* Projects Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 px-6 sm:px-8 max-w-7xl">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-48 sm:h-60 lg:h-72 rounded-2xl overflow-hidden flex justify-center items-center bg-gray-200 transition-shadow duration-300 delay-200 group"
          >
            <motion.img
              src="/images/bg-1.png"
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover" // Removed group-hover:scale-105 here
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

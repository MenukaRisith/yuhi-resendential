import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // Adjust this value to fine-tune the offset
      const yPosition =
        section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-[#F2F5F3] flex justify-between items-center z-50 custom-lg:px-24 custom-lg:py-5">
      {/* Logo Section */}
      <motion.div className="w-48 h-12 flex justify-center items-center overflow-hidden custom-lg:w-72 custom-lg:h-16">
        <div className="relative w-48 h-12 custom-lg:w-72 custom-lg:h-16">
          <img
            src="/logo.png"
            alt="Yuhi-Residential-Property-Care-Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Hamburger Menu for Mobile */}
      <div className="custom-lg:hidden flex items-center">
        <button
          className="text-gray-900 text-3xl"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links & Mobile WhatsApp Button Container */}
      <div
        id="mobile-menu"
        className="hidden absolute top-20 left-0 w-full bg-[#F2F5F3] custom-lg:static custom-lg:flex custom-lg:items-center custom-lg:gap-10 custom-lg:w-auto"
      >
        <div className="flex flex-col gap-6 py-6 px-8 custom-lg:flex-row custom-lg:p-0 custom-lg:gap-10">
          {[
            { id: "about", label: "About Us" },
            { id: "services", label: "Services" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <motion.a
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer text-stone-950 text-lg font-semibold capitalize leading-7 transition-all duration-200 hover:text-[#00c851] custom-lg:text-2xl"
            >
              {link.label}
            </motion.a>
          ))}

          {/* Mobile-only WhatsApp Contact Button */}
          <motion.a
            whileHover={{
              backgroundColor: "#00380C",
              transition: { duration: 0.2 },
            }}
            href="https://wa.me/971565715159"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-lg:hidden flex h-14 pl-5 pr-7 py-3 bg-[#0D2220] rounded-full justify-center items-center gap-3 transition-all duration-200"
          >
            <motion.div
              whileHover={{
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="w-8 h-8 flex justify-center items-center"
            >
              <img
                src="/icons/ic_round-whatsapp.svg"
                alt="WhatsApp Icon"
                className="w-full h-full object-contain filter-white"
              />
            </motion.div>
            <span className="text-white text-lg font-medium font-['Poppins'] transition-all duration-200">
              +971 56 571 5159
            </span>
            <div className="px-3 py-1 bg-white rounded-full flex justify-center items-center gap-1.5 transition-all duration-300">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
              <span className="text-stone-950 text-sm font-medium font-['Poppins']">
                Online
              </span>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Desktop-only WhatsApp Contact Button */}
      <motion.a
        whileHover={{
          backgroundColor: "#00380C",
          transition: { duration: 0.2 },
        }}
        href="https://wa.me/971565715159"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden custom-lg:flex h-14 pl-5 pr-7 py-3 bg-[#0D2220] rounded-full justify-center items-center gap-3 transition-all duration-200"
      >
        <motion.div
          whileHover={{
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="w-8 h-8 flex justify-center items-center"
        >
          <img
            src="/icons/ic_round-whatsapp.svg"
            alt="WhatsApp Icon"
            className="w-full h-full object-contain filter-white"
          />
        </motion.div>
        <span className="text-white text-lg font-medium font-['Poppins'] transition-all duration-200">
          +971 56 571 5159
        </span>
        <div className="px-3 py-1 bg-white rounded-full flex justify-center items-center gap-1.5 transition-all duration-300">
          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
          <span className="text-stone-950 text-sm font-medium font-['Poppins']">
            Online
          </span>
        </div>
      </motion.a>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/fetch");
        const data = await res.json();
        setServices(data.services || []);
      } catch (err) {
        console.error("Failed to load services:", err);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 flex flex-col items-center" id="services">
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl custom-lg:text-6xl font-semibold leading-tight text-gray-900">
          Here&apos;s what <span className="text-[#00c851]">we offer</span> 🤔
        </h2>
        <p className="mt-4 text-lg sm:text-2xl font-regular font-['Poppins'] text-zinc-600 leading-normal max-w-4xl mx-auto">
          Explore our expert renovation services, <br />from design to execution, tailored to your home’s needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-6 sm:px-8 max-w-7xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full sm:w-96 md:w-auto custom-lg:w-[36rem] h-64 sm:h-80 custom-lg:h-84 rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image Section */}
            <motion.img
              src={`/images/services/${service.image}`}
              alt={service.title}
              width="640"
              height="360"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Overlay and Text Section */}
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="text-lg sm:text-xl custom-lg:text-3xl font-bold font-['Poppins'] capitalize leading-tight max-w-[85%] sm:max-w-[70%] custom-lg:max-w-[60%] break-words">
                {service.title}
              </h3>
              <p className="mt-1 text-sm sm:text-base custom-lg:text-lg font-normal font-['Poppins'] max-w-[90%] sm:max-w-[75%] custom-lg:max-w-[90%]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

const ServicesSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 flex flex-col items-center" id="services">
      {/* Section Title */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
          Here&apos;s What We <span className="text-[#00c851]">Offer</span> 🤔
        </h2>
        <p className="mt-4 text-lg sm:text-2xl font-regular font-['Poppins'] text-zinc-600 leading-normal max-w-4xl mx-auto">
          Explore our expert renovation services, from design to execution, tailored to your home’s needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-6 sm:px-8 max-w-7xl">
        {[
          {
            title: "Bathroom Renovation",
            description:
              "Revitalize your bathroom with sleek fixtures, contemporary layouts, and a spa-like ambiance.",
            image: "/images/services/kitchen-renovation-image.webp",
          },
          {
            title: "Kitchen Renovation",
            description:
              "Upgrade your kitchen with modern designs, premium materials, and smart storage solutions tailored to your needs.",
            image: "/images/services/bathroom-renocation-image.webp",
          },
          {
            title: "Theme Based Renovation",
            description:
              "Create unique spaces with designs inspired by your favorite themes and aesthetics.",
            image: "/images/services/theme-based-renovation-image.webp",
          },
          {
            title: "Villas & Apartment Remodeling",
            description:
              "Elevate your living spaces with innovative and luxurious remodeling solutions.",
            image: "/images/services/villa-renovation-image.webp",
          },
          {
            title: "Normal To Smart Home Conversion",
            description:
              "Upgrade your home with cutting-edge smart technology for enhanced comfort and efficiency.",
            image: "/images/services/smart-home-convertion-image.webp",
          },
          {
            title: "Landscape & Gardening",
            description:
              "Design and maintain beautiful outdoor spaces to complement your home.",
            image: "/images/services/landscaping-gardning-image.webp",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative w-full sm:w-96 lg:w-[36rem] h-64 sm:h-80 lg:h-84 rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image Section */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Static Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Overlay and Text Section */}
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h3 className="text-lg sm:text-xl lg:text-3xl font-bold font-['Poppins'] capitalize leading-tight max-w-[85%] sm:max-w-[70%] lg:max-w-[60%] break-words">
                {service.title}
              </h3>
              <p className="mt-1 text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] max-w-[90%] sm:max-w-[75%] lg:max-w-[90%]">
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

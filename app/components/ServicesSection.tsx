const ServicesSection = () => {
    return (
      <section className="w-full bg-white py-12 sm:py-16 flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Inter'] leading-tight text-gray-900">
            What we are <span className="text-green-600">offering?</span>
          </h2>
          <p className="mt-4 text-lg sm:text-2xl font-normal font-['Poppins'] text-zinc-600 leading-normal max-w-4xl mx-auto">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Aaugue tincidunt libero cras primis sodales nisl.
          </p>
        </div>
  
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-6 sm:px-8 max-w-7xl">
          {[
            { title: "Bathroom & Kitchen Renovation", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium diam ante sem phasellus.", image: "/images/bg-1.png" },
            { title: "Theme Based Renovation", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium diam ante sem phasellus.", image: "/images/bg-1.png" },
            { title: "Villas & Apartment Remodeling", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium diam ante sem phasellus.", image: "/images/bg-1.png" },
            { title: "Normal To Smart Home Conversion", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium diam ante sem phasellus.", image: "/images/bg-1.png" },
            { title: "Landscape & Gardening", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium diam ante sem phasellus.", image: "/images/bg-1.png" },
            { title: "Bathroom & Kitchen Renovation", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium diam ante sem phasellus.", image: "/images/bg-1.png" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden flex flex-col items-start p-6 sm:p-8 hover:shadow-md"
            >
              <div className="w-full h-48 sm:h-56 overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Inter'] text-gray-900 capitalize leading-snug mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base font-normal font-['Poppins'] text-zinc-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                className="w-full sm:w-36 h-10 pl-3 pr-5 py-2.5 bg-[#0D2220] rounded-md flex justify-center items-center gap-1.5 transition-all duration-200 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M14.828 3l-1.414 1.414L17.586 9H3v2h14.586l-4.172 4.172L14.828 17l7-7z" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium font-['Poppins']">
                  See Projects
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  
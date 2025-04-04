import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// AnimatedNumber Component
const AnimatedNumber = ({ value, startValue }: { value: number; startValue: number }) => {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    const duration = 1000; // Animation duration in ms
    const increment = (value - startValue) / (duration / 16);

    let currentValue = startValue;
    const animate = () => {
      currentValue += increment;
      if (currentValue >= value) {
        setDisplayValue(value);
      } else {
        setDisplayValue(Math.ceil(currentValue));
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [value, startValue]);

  return (
    <span className="inline-block transform transition-transform duration-300 ease-in-out">
      {displayValue}
    </span>
  );
};

AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
  startValue: PropTypes.number.isRequired,
};

const StatsSection = () => {
  const statsData = [
    { label: "Renovations", value: 200, startValue: 100, suffix: " +" },
    { label: "Satisfaction", value: 100, startValue: 50, suffix: " %" },
    { label: "Projects", value: 120, startValue: 60, suffix: " +" },
    { label: "Specialists", value: 85, startValue: 40, suffix: " +" },
  ];

  return (
    <div
      className="relative mb-16 mt-16 sm:-mt-16 bg-white text-gray-900 rounded-3xl border border-stone-300 py-6 
                 pl-16 pr-16 
                 sm:pl-20 sm:pr-20 
                 custom-lg:pl-20 custom-lg:pr-20
                 lg:px-14 
                 grid grid-cols-2 sm:grid-cols-2 custom-lg:grid-cols-2 custom-lg:grid-rows-2 xl:flex xl:flex-wrap 
                 justify-center items-center 
                 gap-8 sm:gap-14 
                 w-11/12 sm:w-[65%] lg:auto mx-auto"
    >
      {statsData.map((stat, index) => (
        <div key={index} className="flex flex-col items-start text-left">
          <div className="text-3xl sm:text-4xl lg:text-5xl max-[400px]:text-3xl font-bold">
            <span>
              <AnimatedNumber value={stat.value} startValue={stat.startValue} />
            </span>
            <span className="text-[#00c851]">{stat.suffix}</span>
          </div>
          <span className="text-sm sm:text-base max-[400px]:text-xs font-medium text-zinc-600 font-['Poppins'] custom-lg:mt-2">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// HeroSection Component
const HeroSection = () => {
  return (
    <section className="relative w-full pt-8 " id="hero">
      {/* Background Section */}
      <div className="relative max-w-screen-3xl mx-4 mt-12 sm:mt-16 lg:mt-20 h-[90vh] sm:h-[75vh] rounded-b-[15px] rounded-t-[15px] overflow-hidden">
        {/* Image Section */}
        <img
          src="/images/dubai-luxury-house-header-image.webp"
          alt="Dubai Background"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover mx-auto rounded-b-[15px]"
        />

        {/* Solid Color Overlay */}
        <div className="absolute inset-0 bg-black/70 rounded-b-[15px]"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 mt-6 mb-6 sm:mt-0 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
            We are the <span className="text-[#00c851]">#1</span> Renovation
            <br />
            Agency in Dubai, UAE
          </h1>
          <p className="mt-4 sm:mt-6 lg:text-xl sm:text-[16px] font-medium text-neutral-200 font-['Poppins'] max-w-3xl">
            Elevating Dubai homes with expert renovations, <br />smart upgrades, and exceptional design solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/971521120336"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white text-gray-900 text-base sm:text-lg font-medium font-['Poppins'] rounded-[10px] shadow-lg hover:bg-[#0D2220] hover:text-white transition-all duration-300 group"
            >
              <img
                src="/icons/ic_round-whatsapp.svg"
                alt="WhatsApp Icon"
                className="w-6 h-6 object-contain filter-greenish transition-all duration-300 group-hover:filter-white"
              />
              Contact us
            </a>
            <a
              href="https://wa.me/971521120336"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white text-gray-900 text-base sm:text-lg font-medium font-['Poppins'] rounded-[10px] shadow-lg hover:bg-[#0D2220] hover:text-white transition-all duration-300 group"
            >
              <img
                src="/icons/material-symbols_collections-bookmark-outline.svg"
                alt="Book Icon"
                className="w-6 h-6 object-contain filter-greenish transition-all duration-300 group-hover:filter-white"
              />
              Request a Proposal
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />
    </section>
  );
};

export default HeroSection;

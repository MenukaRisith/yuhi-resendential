import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// AnimatedNumber Component
const AnimatedNumber = ({ value, startValue }: { value: number; startValue: number }) => {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    const duration = 500; // Animation duration in ms
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

  return <span className="inline-block transform transition-transform duration-300 ease-in-out">{displayValue}</span>;
};

AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
  startValue: PropTypes.number.isRequired,
};

// StatsSection Component
const StatsSection = () => {
  const statsData = [
    { label: "Renovations", value: 200, startValue: 100, suffix: "+" },
    { label: "Satisfaction", value: 100, startValue: 50, suffix: "%" },
    { label: "Projects", value: 120, startValue: 60, suffix: "+" },
    { label: "Specialists", value: 85, startValue: 40, suffix: "+" },
  ];

  return (
    <div className="relative mt-16 sm:-mt-16 bg-white text-gray-900 rounded-3xl border border-stone-300 py-6 px-6 sm:px-12 lg:px-14 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-8 sm:gap-14 w-11/12 sm:w-3/4 lg:w-1/2 mx-auto">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-start text-left"
        >
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span>
              <AnimatedNumber value={stat.value} startValue={stat.startValue} />
            </span>
            <span className="text-[#00c851]">{stat.suffix}</span>
          </div>
          <span className="text-sm sm:text-base font-medium text-zinc-600 font-['Poppins']">
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
    <section className="relative w-full pt-8 ">
      {/* Background Section */}
      <div className="relative max-w-screen-3xl mx-4 mt-12 sm:mt-16 lg:mt-20 h-[75vh] rounded-b-[15px] rounded-t-[15px] overflow-hidden">
        {/* Image Section */}
        <img
          src="/images/dubai-luxury-house-header-image.webp"
          alt="Dubai Background"
          className="w-[100%] h-full object-cover mx-auto rounded-b-[15px]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-[15px]"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
            We are the <span className="text-[#00c851]">#1</span> Renovation
            <br />
            Agency in Dubai, UAE
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-neutral-200 font-['Poppins'] max-w-3xl">
            Elevating Dubai homes with expert renovations, smart upgrades, and exceptional design solutions.
          </p>
          <a
              href="#proposal"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 text-lg font-medium font-['Poppins'] rounded-[10px] shadow-lg hover:bg-[#00380C] hover:text-white transition-all duration-300 group"
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
      {/* Stats Section */}
      <StatsSection />
    </section>
  );
};

export default HeroSection;

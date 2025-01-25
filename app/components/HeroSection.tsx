import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// AnimatedNumber Component
const AnimatedNumber = ({ value, startValue }: { value: number; startValue: number }) => {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    const duration = 5000; // Animation duration in ms
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

// HeroSection Component
const HeroSection = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center pt-32 pb-16 sm:pt-24 sm:pb-30 lg:pt-52 lg:pb-36">
      {/* Heading Section */}
      <div className="text-center mb-8 px-4 sm:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-['Inter'] leading-tight text-gray-900">
          We are the <span className="text-green-600">#1</span> Renovation
          <br /> Agency in Dubai, UAE
        </h1>
          <p className="mt-8 text-lg sm:text-xl font-medium text-gray-600 font-['Poppins'] leading-snug max-w-2xl mx-auto">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium diam ante sem phasellus. Lorem ipsum odor amet,
            consectetuer adipiscing elit.
          </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center items-center bg-stone-50 rounded-3xl border py-7 px-6 sm:px-12 lg:px-14 gap-8 sm:gap-14 mb-12">
        <div className="flex flex-col items-center sm:items-start">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight">
            <span className="text-gray-900"><AnimatedNumber value={200} startValue={100} /></span>
            <span className="text-green-600">+</span>
          </div>
          <span className="text-sm sm:text-base font-medium text-gray-600 font-['Inter']">Renovations</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight">
            <span className="text-gray-900"><AnimatedNumber value={100} startValue={50} /></span>
            <span className="text-green-600">%</span>
          </div>
          <span className="text-sm sm:text-base font-medium text-gray-600 font-['Inter']">Satisfaction</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight">
            <span className="text-gray-900"><AnimatedNumber value={120} startValue={60} /></span>
            <span className="text-green-600">+</span>
          </div>
          <span className="text-sm sm:text-base font-medium text-gray-600 font-['Inter']">Projects</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight">
            <span className="text-gray-900"><AnimatedNumber value={85} startValue={40} /></span>
            <span className="text-green-600">+</span>
          </div>
          <span className="text-sm sm:text-base font-medium text-gray-600 font-['Inter']">Specialists</span>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <a
        href="#proposal"
        className="h-12 sm:h-14 lg:h-16 pl-4 sm:pl-5 pr-6 sm:pr-7 py-2 sm:py-3.5 bg-[#0D2220] text-white text-lg sm:text-xl font-medium font-['Poppins'] rounded-lg flex justify-center items-center gap-2 transition-all duration-200 hover:bg-[#00c851]"
      >
        <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 px-1 flex justify-center items-center">
          <img src="/icons/book.svg" alt="Book Icon" className="w-full h-full object-contain" />
        </div>
        Request a Proposal
      </a>
    </section>
  );
};

export default HeroSection;

const AboutSection = () => {
    return (
      <section className="relative w-full h-auto py-12 sm:py-16 flex flex-col items-center bg-[#0D2220]" id="about">
        {/* Section Title */}
        <div className="w-full max-w-5xl text-center mb-12 sm:mb-16 px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            We are a <span className="text-[#00c851]">luxury renovation service provider</span> in Dubai, UAE
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-normal font-['Poppins'] text-[#DDDDD] leading-normal">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Aaugue tincidunt libero cras primis sodales nisl.
          </p>
        </div>
        </section>
    );
  };
  
  export default AboutSection;
  
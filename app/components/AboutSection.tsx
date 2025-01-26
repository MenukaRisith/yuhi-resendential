const AboutSection = () => {
    return (
      <section className="relative w-full h-auto py-12 sm:py-16 flex flex-col items-center" id="about">
        {/* Section Title */}
        <div className="w-full max-w-5xl text-center mb-12 sm:mb-16 px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            We are a luxury renovation service provider in Dubai, UAE
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-normal font-['Poppins'] text-zinc-600 leading-normal">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Aaugue tincidunt libero cras primis sodales nisl.
          </p>
        </div>
  
        {/* Contact Section */}
        <div className="w-full max-w-4xl bg-stone-50 rounded-3xl border py-4 sm:py-5 px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="text-center sm:text-left text-2xl sm:text-3xl font-bold text-gray-900">
            Contacting us just got <span className="text-[#00c851]">easier!</span>
          </div>
          <a
            href="https://wa.me/971565715159"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 sm:h-14 pl-4 sm:pl-5 pr-6 sm:pr-7 py-2 sm:py-3.5 bg-[#0D2220] rounded-3xl flex justify-center items-center gap-2 transition-all duration-200 hover:bg-[#00c851]"
          >
            <div className="w-6 sm:w-7 h-6 sm:h-7 flex justify-center items-center">
              <img src="/icons/ic_round-whatsapp.svg" alt="WhatsApp Icon" className="w-full h-full object-contain filter-white" />
            </div>
            <span className="text-white text-base sm:text-lg font-medium font-['Poppins']">+971 56 571 5159</span>
            <div className="px-2 py-0.5 bg-white rounded-2xl flex justify-center items-center gap-1">
              <div className="w-1 h-1 bg-green-600 rounded-full"></div>
              <span className="text-stone-950 text-xs font-medium font-['Poppins']">Online</span>
            </div>
          </a>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  
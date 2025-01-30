const AboutSection = () => {
  return (
<section
  className="relative w-full h-auto py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center bg-[#0D2220]"
  id="about"
>
  {/* Section Title */}
  <div className="w-full max-w-5xl text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-8 md:px-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
      We are a <span className="text-[#00c851]">luxury renovation service provider</span> in Dubai, UAE
    </h2>
  </div>
  
  {/* Wider Paragraph */}
  <div className="w-full max-w-8xl px-6 sm:px-12 md:px-16 lg:px-20">
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Poppins'] text-[#DDDDD] leading-relaxed text-center">
      Yuhi Residential Property Care is Dubai’s premier luxury renovation agency, transforming high-end homes and 
      commercial spaces with unmatched quality and elegance. Our expert team blends sophisticated design, premium 
      materials, and meticulous craftsmanship to create bespoke, timeless interiors. From modern upgrades to 
      full-scale transformations, we deliver seamless, high-end renovations that elevate lifestyles. Experience 
      refined living with Yuhi.
    </p>
  </div>
</section>

  );
};

export default AboutSection;

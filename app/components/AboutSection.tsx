const AboutSection = () => {
  return (
<section
  className="relative w-full h-auto py-12 sm:py-16 md:py-20 lg:py- flex flex-col items-center bg-[#0D2220]"
  id="about"
>
  {/* Section Title */}
  
  <div className="w-full max-w-5xl text-center mb-4 sm:mb-4 md:mb-4 px-4 sm:px-8 md:px-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
      We are a <span className="text-[#00c851]">Luxury Renovation <br /> Service Provider</span> in Dubai, UAE
    </h2><br />
    <p className="mt-4 text-lg sm:text-2xl font-regular font-['Poppins'] text-[#DDDDDD] leading-normal max-w-4xl mx-auto">
    Yuhi Property elevates luxury living in Dubai with bespoke renovations crafted for elegance and quality. <br /><br />
    From modern upgrades to full transformations, we deliver timeless designs with expert craftsmanship and premium materials.
    </p>
  </div>
  
</section>

  );
};

export default AboutSection;
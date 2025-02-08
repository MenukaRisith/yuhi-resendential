
const Footer = () => {
  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // Adjust offset to account for sticky navbar
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0D2220] text-white py-0 pt-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Section: Logo and Description */}
          <div className="flex flex-col gap-6 max-w-xs">
            <img
              src="/logo-1.svg"
              alt="Yuhi Residential Property Care Logo"
              className="object-contain"
            />
            <p className="text-lg font-normal text-center lg:text-left">
              We are the #1 Renovation Agency in Dubai, UAE
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-facebook-f text-[#00c851] text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-instagram text-[#00c851] text-xl"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-twitter text-[#00c851] text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-youtube text-[#00c851] text-xl"></i>
              </a>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Menu</h3>
            <ul className="space-y-3">
              {[
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 text-white hover:underline"
                  >
                    <span className="text-[#00c851]">&gt;</span> {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-[#00c851]">&gt;</span> Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-[#00c851]">&gt;</span> Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Map and Address Section */}
          <div className="flex flex-col gap-4 items-end w-full lg:w-[300px]">
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
              <iframe
                title="Dubai Location Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.357432679069!2d55.270782115318285!3d25.204849683877527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4322679d7f89%3A0x79c5e41e5ad418a1!2sDubai!5e0!3m2!1sen!2s!4v1618375506359!5m2!1sen!2s"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-left text-sm lg:text-base">
              Yuhi Property Service, Project Office 02, 14th Floor, Jumeira Third, UAE
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white py-4 mt-8">
        <p className="text-center text-sm lg:text-base text-gray-700">
          © 2025 Yuhi Residential Property Care | Design & Developed by{" "}
          <a
            href="https://www.instagram.com/glide.global/"
            className="underline text-gray-900 hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glide Global
          </a>{" "}
          🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;

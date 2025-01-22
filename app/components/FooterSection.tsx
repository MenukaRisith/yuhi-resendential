const Footer = () => {
  return (
    <footer className="bg-[#0D2220] text-white py-0 pt-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Section: Logo and Description */}
          <div className="flex flex-col gap-6 max-w-xs">
            <img
              src="/logo-1.png"
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
                className="p-2 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-facebook-f text-green-600 text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-instagram text-green-600 text-xl"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-twitter text-green-600 text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600/10 rounded-xl"
              >
                <i className="fab fa-youtube text-green-600 text-xl"></i>
              </a>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Menu</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-green-600">&gt;</span> About Us
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-green-600">&gt;</span> Services
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-green-600">&gt;</span> Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-green-600">&gt;</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-green-600">&gt;</span> Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="flex items-center gap-2 text-white hover:underline">
                  <span className="text-green-600">&gt;</span> Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Map and Address Section */}
          <div className="flex flex-col gap-4 items-end w-full lg:w-[300px]">
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/map.png"
                alt="Map"
              />
            </div>
            <p className="text-right text-sm lg:text-base">
              Yuhi Property Service, Project Office 02, 14th Floor, Jumeira Third, UAE
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-white py-4 mt-8">
        <p className="text-center text-sm lg:text-base text-gray-700">
          © 2025 Yuhi Residential Property Care | Design & Developed by{' '}
          <a
            href="https://www.instagram.com/glide.global/"
            className="underline text-gray-900 hover:text-purple-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glide Global
          </a>{' '}
          🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;

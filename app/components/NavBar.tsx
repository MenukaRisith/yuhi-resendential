const Navbar = () => {
    return (
      <nav className="w-full px-6 py-4 bg-white flex justify-between items-center lg:px-24 lg:py-7">
        {/* Logo Section */}
        <div className="w-48 h-12 flex justify-center items-center overflow-hidden lg:w-72 lg:h-16">
          <div className="relative w-48 h-12 lg:w-72 lg:h-16">
            <img src="/logo.png" alt="Yuhi-Residential-Property-Care-Logo" className="w-full h-full object-contain" />
          </div>
        </div>
  
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-gray-900 text-3xl"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
          >
            ☰
          </button>
        </div>
  
        {/* Navigation Links */}
        <div
          id="mobile-menu"
          className="hidden absolute top-20 left-0 w-full bg-white shadow-md lg:static lg:flex lg:items-center lg:gap-10 lg:shadow-none lg:w-auto"
        >
          <div className="flex flex-col gap-6 py-6 px-8 lg:flex-row lg:p-0 lg:gap-10">
            <a
              href="#about"
              className="text-stone-950 text-lg font-semibold capitalize leading-7 font-['Inter'] transition-all duration-200 hover:text-green-600 lg:text-3xl"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-stone-950 text-lg font-semibold capitalize leading-7 font-['Inter'] transition-all duration-200 hover:text-green-600 lg:text-3xl"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-stone-950 text-lg font-semibold capitalize leading-7 font-['Inter'] transition-all duration-200 hover:text-green-600 lg:text-3xl"
            >
              Projects
            </a>
          </div>
        </div>
  
        {/* WhatsApp Contact Button */}
        <a
          href="https://wa.me/971565715159"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex h-14 pl-5 pr-7 py-3 bg-[#0D2220] rounded-3xl justify-center items-center gap-3 transition-all duration-200 hover:bg-gray-700"
        >
          <div className="w-7 h-7 px-0.5 py-0.5 flex justify-center items-center">
            <img src="/icons/whatsapp.png" alt="WhatsApp Icon" className="w-full h-full object-contain" />
          </div>
          <span className="text-white text-lg font-medium font-['Poppins']">+971 56 571 5159</span>
          <div className="px-3 py-1 bg-white rounded-2xl flex justify-center items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
            <span className="text-stone-950 text-sm font-medium font-['Poppins']">Online</span>
          </div>
        </a>
      </nav>
    );
  };
  
  export default Navbar;
  
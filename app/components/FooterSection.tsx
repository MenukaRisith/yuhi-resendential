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
                <div className="p-2 bg-green-600/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0zm-6.7-2.9h-2.1v-1.4c0-.7.5-.9.8-.9h1.3V5.5l-1.8-.1c-2 0-2.4 1.5-2.4 2.5v1.2H9.8v2.1h1.3V17h2.6v-4.8h1.9l.3-2.1z" />
                  </svg>
                </div>
                <div className="p-2 bg-green-600/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path d="M12 2.2c2.8 0 3.1 0 4.2.1 1 .1 1.7.2 2.1.4.5.2.8.5 1.2.9s.6.7.9 1.2c.2.4.4 1 .4 2.1.1 1.1.1 1.4.1 4.2s0 3.1-.1 4.2c-.1 1-.2 1.7-.4 2.1-.2.5-.5.8-.9 1.2-.4.4-.7.6-1.2.9-.4.2-1 .4-2.1.4-1.1.1-1.4.1-4.2.1s-3.1 0-4.2-.1c-1-.1-1.7-.2-2.1-.4a3.5 3.5 0 01-1.2-.9 3.5 3.5 0 01-.9-1.2c-.2-.4-.4-1-.4-2.1-.1-1.1-.1-1.4-.1-4.2s0-3.1.1-4.2c.1-1 .2-1.7.4-2.1.2-.5.5-.8.9-1.2s.7-.6 1.2-.9c.4-.2 1-.4 2.1-.4 1.1-.1 1.4-.1 4.2-.1z" />
                  </svg>
                </div>
                <div className="p-2 bg-green-600/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path d="M10 9H7v6h3v6l4-3h3V9h-3l-4-3z" />
                  </svg>
                </div>
                <div className="p-2 bg-green-600/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path d="M16.8 2H7.2C3.9 2 2 4 2 7.4v9.2C2 20 3.9 22 7.2 22h9.6c3.3 0 5.2-2 5.2-5.4V7.4C22 4 20.1 2 16.8 2zm.8 15.6c-.5.7-1.1 1.1-1.9 1.4H7.5c-.8-.2-1.4-.7-1.8-1.4-.2-.4-.2-.8-.1-1.3.5-.7 1.1-1.1 1.9-1.3h9.2c.8.2 1.4.7 1.8 1.3.2.5.2.9.1 1.3z" />
                  </svg>
                </div>
              </div>
            </div>
  
            {/* Menu Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Menu</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">&gt;</span> About Us
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">&gt;</span> Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">&gt;</span> Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">&gt;</span> Contact
                </li>
              </ul>
            </div>
  
            {/* Info Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">&gt;</span> Privacy Policy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">&gt;</span> Terms & Conditions
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
            <a href="https://www.instagram.com/glide.global/" className="underline text-gray-900 hover:text-purple-500">
              Glide Global
            </a>{' '}
            🚀
          </p>
        </div>
      </footer>
    );
};

export default Footer;
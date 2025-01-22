const ContactSection = () => {
    return (
      <section className="w-full bg-white py-16 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-7xl w-full px-8">
          {/* Left Side: Text and Contact Cards */}
          <div className="flex flex-col items-start w-full lg:w-[55%]">
            {/* Section Title */}
            <div className="mb-12 w-full max-w-3xl text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Inter'] leading-tight text-gray-900">
                It’s easier than ever <br />
                to <span className="text-green-600">contact us</span>
              </h2>
              <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-normal font-['Poppins'] text-zinc-600 leading-normal">
                Lorem ipsum odor amet, consectetuer adipiscing elit.
                <br />
                Aaugue tincidunt libero cras primis sodales nisl.
              </p>
            </div>
  
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-36">
              {[
                {
                  title: "Call",
                  detail: "+971 56 184 2080",
                  button: "Call now",
                  icon: "phone",
                },
                {
                  title: "Message",
                  detail: "+971 56 184 2080",
                  button: "Message now",
                  icon: "message",
                },
                {
                  title: "Mail",
                  detail: "yuhisweetfamily@gmail.com",
                  button: "Email now",
                  icon: "mail",
                },
                {
                  title: "Whatsapp",
                  detail: "+971 56 184 2080",
                  button: "Call/Message now",
                  icon: "whatsapp",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[380px] h-48 bg-white rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0D2220] rounded-2xl flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6"
                      >
                        {item.icon === "phone" && (
                          <path d="M6.62 10.79a15.045 15.045 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.58c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1H7.6c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.58.1.35.02.74-.26 1.02l-2.2 2.19z" />
                        )}
                        {item.icon === "message" && (
                          <path d="M21 6h-2V4H5v2H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H3V8h18v10z" />
                        )}
                        {item.icon === "mail" && (
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        )}
                        {item.icon === "whatsapp" && (
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.15 1.595 5.945L.034 24l6.214-1.611A11.962 11.962 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.114 17.043l-.869 1.695c-.387.754-.767.883-1.537.573-1.466-.615-5.146-3.12-6.723-5.37-.261-.371-.508-.78-.745-1.186-.344-.577-.1-1.005.127-1.355l.785-1.23c.382-.636.821-.67 1.36-.374.435.238.956.556 1.491.897.212.134.401.33.588.517.175.176.31.32.488.497.07.069.119.159.206.278.153.217.32.468.517.781.197.313.236.627.038.868l-.476.567c-.134.16-.253.302-.38.465-.141.183-.113.353-.03.55.084.196.388.677.845 1.098.457.42.974.713 1.164.813.19.1.305.067.431-.04l.566-.477c-.238-.201-.493-.142.754.055.26.197.499.403.715.608.216.204.42.428.619.655.572.658.553.98.1 1.651z" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium font-['Inter'] text-stone-950 leading-normal">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg font-medium font-['Poppins'] text-zinc-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                  <button className="w-full px-5 py-3.5 bg-neutral-200 rounded-lg text-base sm:text-xl font-medium font-['Poppins'] text-gray-900 transition-all duration-200 hover:bg-gray-300">
                    {item.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Side: Image */}
          <div className="w-full lg:w-[393px] h-[500px] lg:h-[700px] rounded-3xl overflow-hidden mt-8 lg:mt-0">
            <img
              className="w-full h-full object-cover"
              src="/images/bg-1.png"
              alt="Design Concept of the Most Outstanding Mansion in Dubai"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  
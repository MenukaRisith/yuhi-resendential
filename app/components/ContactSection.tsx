const ContactSection = () => {
  return (
    <section className="w-full py-16 flex justify-center items-center" id="contact">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-7xl w-full px-8">
        {/* Left Side: Text and Contact Cards */}
        <div className="flex flex-col items-start w-full lg:w-[55%]">
          {/* Section Title */}
          <div className="mb-12 w-full max-w-3xl text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              It’s easier than ever <span className="whitespace-nowrap">to <span className="text-[#00c851]">contact us</span> 👋</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl font-regular font-['Poppins'] text-zinc-600 leading-normal">
            Reach out to us for expert guidance, project inquiries,<br />or to start your luxury transformation journey today.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-x-36">
            {[
              {
                title: "Call",
                detail: "+971 56 184 2080",
                button: "Call now",
                link: "tel:+971561842080",
                icon: "/icons/material-symbols_phone-in-talk-outline-rounded.svg",
              },
              {
                title: "Message",
                detail: "+971 56 184 2080",
                button: "Message now",
                link: "sms:+971561842080",
                icon: "/icons/material-symbols_perm-phone-msg-outline-rounded.svg",
              },
              {
                title: "Mail",
                detail: "yuhi******@gmail.com",
                button: "Email now",
                link: "mailto:yuhisweetfamily@gmail.com",
                icon: "/icons/material-symbols_mark-email-unread-outline.svg",
              },
              {
                title: "WhatsApp",
                detail: "+971 52 112 0336",
                button: "Call/Message now",
                link: "https://wa.me/971521120336",
                icon: "/icons/ic_round-whatsapp.svg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-[380px] mr-8 h-48 bg-white rounded-2xl p-6 flex flex-col justify-between transition-shadow duration-300 delay-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0D2220] rounded-2xl flex justify-center items-center">
                    <img
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter-greenish"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-stone-950 leading-normal">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg font-medium font-['Poppins'] text-zinc-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3.5 bg-neutral-200 rounded-lg text-base sm:text-xl font-medium font-['Poppins'] text-gray-900 transition-all duration-200 hover:bg-[#0D2220] hover:text-white text-center"
                >
                  {item.button}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[393px] h-[500px] lg:h-[700px] rounded-3xl overflow-hidden mt-8 lg:mt-0">
          <img
            className="w-full h-full object-cover"
            src="/images/luxury-house-in-dubai-image.webp"
            alt="Design Concept of the Most Outstanding Mansion in Dubai"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

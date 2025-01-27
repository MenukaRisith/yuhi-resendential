import { useNavigate } from "@remix-run/react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#F2F5F3] py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-[#00c851] text-lg font-medium font-['Poppins'] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        {/* Privacy Policy Content */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-['Inter']">
          Privacy Policy
        </h1>
        <p className="text-lg lg:text-xl text-zinc-600 mb-4 font-['Poppins']">
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Inter']">
              1. Information We Collect
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              We collect information that you provide directly to us, such as when you create an account, contact us, or use our services. This includes your name, email address, and any other information you choose to provide.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Inter']">
              2. How We Use Your Information
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              We use your information to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. We may also use your information to personalize your experience on our platform.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Inter']">
              3. Sharing Your Information
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              We do not sell your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our platform and delivering services to you.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Inter']">
              4. Security of Your Information
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              We take reasonable measures to protect your information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Inter']">
              5. Changes to This Privacy Policy
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting. We encourage you to review this policy periodically for updates.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Inter']">
              Contact Us
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:yuhisweetfamily@gmail.com" className="text-[#00c851] underline">
              yuhisweetfamily@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

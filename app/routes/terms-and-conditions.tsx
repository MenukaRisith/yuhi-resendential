import { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms and Conditions - Yuhi Property Service" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.yuhipropertyservice.com/terms-and-conditions",
    },
  ];
};

const TermsAndConditions = () => {
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

        {/* Terms and Conditions Content */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-['Poppins']">
          Terms & Conditions
        </h1>
        <p className="text-lg lg:text-xl text-zinc-600 mb-4 font-['Poppins']">
          Welcome to Yuhi Residential Property Care. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to abide by these terms.
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
              1. Acceptance of Terms
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              By using our website, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to these terms, you must not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
              2. Use of Services
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              You may use our services only for lawful purposes and in accordance with these terms. Any misuse or unauthorized use of our platform is strictly prohibited.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
              3. Intellectual Property Rights
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              All content, designs, logos, and materials on our website are the intellectual property of Yuhi Residential Property Care. Unauthorized use, reproduction, or distribution is prohibited.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
              4. Limitation of Liability
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              We are not liable for any damages or losses resulting from the use of our services. Our liability is limited to the maximum extent permitted by law.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
              5. Modifications to Terms
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              We reserve the right to update or modify these terms at any time without prior notice. It is your responsibility to review the terms periodically for updates.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
              Contact Us
            </h2>
            <p className="text-base lg:text-lg text-zinc-600 font-['Poppins'] leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at{' '}
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

export default TermsAndConditions;

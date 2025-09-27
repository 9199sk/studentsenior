import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Student Senior?",
      answer:
        "Student Senior is a platform that connects students with seniors, providing access to resources, mentorship, and academic support.",
    },
    {
      question: "How do I register?",
      answer:
        "You can easily register by clicking the 'Login' button and following the registration process.",
    },
    {
      question: "Can anyone add a college?",
      answer:
        "Yes, verified users can add their college information to our platform.",
    },
    {
      question: "Is there a fee to use Student Senior?",
      answer:
        "Basic features are free, with premium features available for subscribed users.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team through email or the contact form on our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 transition-colors bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 transition-colors text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-700"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg transition-colors text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </span>
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      openIndex === index
                        ? "bg-blue-500 dark:bg-blue-600 text-white rotate-180"
                        : "bg-blue-100 dark:bg-gray-600 text-blue-500 dark:text-blue-400"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {openIndex === index ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      )}
                    </svg>
                  </span>
                </div>
              </button>
              {/* Answer Panel with smooth transition */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`px-6 pb-6 transition-all duration-300 text-gray-600 dark:text-gray-300 ${
                      openIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

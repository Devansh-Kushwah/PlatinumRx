"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const faqs = [
    {
      question: "How to order medicine on PlatinumRx?",
      answer:
        "You can order by searching for your desired medicines, adding them to the cart, and completing the checkout process. You may also contact us for assistance."
    },
    {
      question: "Is substitute medicine safe to consume?",
      answer:
        "Yes. Substitute medicines contain the same active ingredient, dosage, and strength as the prescribed medicine, and are equally effective."
    },
    {
      question: "Why is substitute medicine cheaper?",
      answer:
        "Substitute medicines are produced after the patent expires, which allows manufacturers to offer them at lower prices without compromising quality."
    },
    {
      question: "How to choose the right substitute medicine for myself?",
      answer:
        "Use our substitution engine to find the correct alternative, or consult a licensed medical professional before making a switch."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-10 px-4 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Frequently asked questions
        </h2>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center py-4 text-left text-gray-800 hover:text-gray-900"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-4">
          <a
            href="#"
            className="text-pink-600 hover:underline font-medium"
          >
            View More
          </a>
        </div>

        {/* Footer Logo & Links */}
      
      </div>
    </section>
  );
}

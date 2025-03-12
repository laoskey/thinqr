"use client";

import { useEffect, useRef } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a full range of digital services including UI/UX design, web development, mobile app development, and digital marketing.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing options based on project requirements. Contact us for a custom quote.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer various support and maintenance packages to keep your digital products running smoothly.",
  },
];

export default function FAQ() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1, // 当10%的内容可见时触发
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-16 bg-gray-950 text-white"
      id="faqs"
    >
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let us answer your questions.
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Common questions about our services and process.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center w-8 h-8 p-2  mb-4 items-center text-white text-md bg-gray-800 rounded-full ">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3 flex-wrap">{faq.question}</h3>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <style
        jsx
        global
      >{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

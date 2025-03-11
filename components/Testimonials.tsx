"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO at Company",
    image: "1.png",
    content:
      "Working with this team has been an amazing experience. They delivered beyond our expectations.",
  },
  {
    name: "Jane Smith",
    position: "CTO at Startup",
    image: "2.png",
    content: "Their expertise and dedication to quality is unmatched. Highly recommended!",
  },
  {
    name: "Mike Johnson",
    position: "Founder at Tech",
    image: "3.png",
    content: "The team's attention to detail and innovative solutions exceeded our expectations.",
  },
  {
    name: "John Akj",
    position: "CEO at Company",
    image: "1.png",
    content:
      "Working with this team has been an amazing experience. They delivered beyond our expectations.",
  },
  {
    name: "Smith Wellson",
    position: "CTO at Startup",
    image: "2.png",
    content: "Their expertise and dedication to quality is unmatched. Highly recommended!",
  },
  {
    name: "Aka Johnson",
    position: "Founder at Tech",
    image: "3.png",
    content: "The team's attention to detail and innovative solutions exceeded our expectations.",
  },
  {
    name: "Aka Johnson",
    position: "Founder at Tech",
    image: "3.png",
    content: "The team's attention to detail and innovative solutions exceeded our expectations.",
  },
  {
    name: "Aka Johnson",
    position: "Founder at Tech",
    image: "3.png",
    content: "The team's attention to detail and innovative solutions exceeded our expectations.",
  },
  {
    name: "Aka Johnson",
    position: "Founder at Tech",
    image: "3.png",
    content: "The team's attention to detail and innovative solutions exceeded our expectations.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg w-[20rem] h-[17rem] mx-4 flex flex-col border-t-2 border-b-[1px] border-gray-100">
    <div className="flex items-center mb-4">
      <Image
        src={`/images/avatars/${testimonial.image}`}
        alt={testimonial.name}
        width={48}
        height={48}
        className="rounded-full mr-4"
      />
      <div>
        <h4 className="font-semibold">{testimonial.name}</h4>
      </div>
    </div>
    <div className="flex mb-2">
      {[1, 2, 3].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-500 line-clamp-3 flex-grow">&quot;{testimonial.content}&quot;</p>
    <p className="text-gray-700 text-right mt-2">{testimonial.position}</p>
  </div>
);

export default function Testimonials() {
  const leftRowRef = useRef<HTMLDivElement>(null);
  const rightRowRef = useRef<HTMLDivElement>(null);
  const leftAnimationRef = useRef<number>(0);
  const rightAnimationRef = useRef<number>(0);
  const leftPositionRef = useRef<number>(0);
  const rightPositionRef = useRef<number>(0);

  const animate = useCallback(
    (
      element: HTMLDivElement,
      direction: "left" | "right",
      animationRef: { current?: number },
      positionRef: { current: number }
    ) => {
      const speed = 0.5;
      let position = positionRef.current;

      const step = () => {
        position += speed;
        const maxScroll = element.scrollWidth / 2;

        if (position >= maxScroll) {
          position = 0;
        }

        positionRef.current = position;
        element.scrollLeft = direction === "left" ? maxScroll - position : position;
        animationRef.current = requestAnimationFrame(step);
      };

      animationRef.current = requestAnimationFrame(step);
    },
    []
  );

  const handleMouseEnter = useCallback((ref: { current?: number }) => {
    if (ref.current) {
      cancelAnimationFrame(ref.current);
      ref.current = undefined;
    }
  }, []);

  const handleMouseLeave = useCallback(
    (
      element: HTMLDivElement,
      direction: "left" | "right",
      ref: { current?: number },
      positionRef: { current: number }
    ) => {
      animate(element, direction, ref, positionRef);
    },
    [animate]
  );

  useEffect(() => {
    const leftRow = leftRowRef.current;
    const rightRow = rightRowRef.current;

    if (leftRow && rightRow) {
      animate(leftRow, "left", leftAnimationRef, leftPositionRef);
      animate(rightRow, "right", rightAnimationRef, rightPositionRef);

      const leftEnterHandler = () => handleMouseEnter(leftAnimationRef);
      const leftLeaveHandler = () =>
        handleMouseLeave(leftRow, "left", leftAnimationRef, leftPositionRef);
      const rightEnterHandler = () => handleMouseEnter(rightAnimationRef);
      const rightLeaveHandler = () =>
        handleMouseLeave(rightRow, "right", rightAnimationRef, rightPositionRef);

      leftRow.addEventListener("mouseenter", leftEnterHandler);
      leftRow.addEventListener("mouseleave", leftLeaveHandler);
      rightRow.addEventListener("mouseenter", rightEnterHandler);
      rightRow.addEventListener("mouseleave", rightLeaveHandler);

      return () => {
        if (leftAnimationRef.current) cancelAnimationFrame(leftAnimationRef.current);
        if (rightAnimationRef.current) cancelAnimationFrame(rightAnimationRef.current);

        leftRow.removeEventListener("mouseenter", leftEnterHandler);
        leftRow.removeEventListener("mouseleave", leftLeaveHandler);
        rightRow.removeEventListener("mouseenter", rightEnterHandler);
        rightRow.removeEventListener("mouseleave", rightLeaveHandler);
      };
    }
  }, [animate, handleMouseEnter, handleMouseLeave]);

  return (
    <section className="py-16 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work with great people</h2>
        <div className="space-y-12">
          {/* Left to Right Row */}
          <div className="relative">
            <div
              ref={leftRowRef}
              className="flex overflow-x-hidden"
            >
              <div className="flex py-1">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
          </div>

          {/* Right to Left Row */}
          <div className="relative">
            <div
              ref={rightRowRef}
              className="flex overflow-x-hidden"
            >
              <div className="flex">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <style
        jsx
        global
      >{`
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

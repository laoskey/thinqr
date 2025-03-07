"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function ProjectShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingHorizontally = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // 检查是否在水平滚动的边界
      const isAtRightBoundary = currentScroll >= maxScroll;
      const isAtLeftBoundary = currentScroll <= 0;

      // 如果在边界并且继续向同一方向滚动，允许页面垂直滚动
      if ((isAtRightBoundary && isScrollingDown) || (isAtLeftBoundary && !isScrollingDown)) {
        isScrollingHorizontally.current = false;
        return; // 不阻止默认行为，允许页面滚动
      }

      // 否则执行水平滚动
      e.preventDefault();
      isScrollingHorizontally.current = true;

      const scrollAmount = 600; // 每次滚动的距离
      container.scrollTo({
        left: currentScroll + (isScrollingDown ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      className="py-16 bg-black text-white overflow-hidden"
      id="projectcases"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 capitalize">
          Recent work showcase
        </h2>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex-none w-[300px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 relative"
            >
              <Image
                src={`/images/projectcases/${item}.png`}
                alt={`Project ${item}`}
                width={300}
                height={600}
                className="w-full h-auto"
              />
              <div className="w-full h-full bg-black/50 text-white p-4">
                <h3 className="text-lg font-bold">Project {item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 添加自定义样式到全局样式中 */}
      <style
        jsx
        global
      >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

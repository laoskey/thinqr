"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Ani = () => {
  const controls = useAnimation();
  const [showAni, setShowAni] = useState(true);
  const [direction, setDirection] = useState(1); // 1表示顺时针，-1表示逆时针

  // 定义动画数据
  const percs = [22, 17, 57, 4];
  const percsRange: string[] = [];
  const percsEnd: number[] = [];
  const markersAngles: number[] = [];

  // 计算动画范围
  let addPercs = 0;
  percs.forEach((perc) => {
    percsEnd.push(addPercs);
    const tempStart = addPercs;
    addPercs = addPercs + perc;
    percsRange.push(`${tempStart} ${addPercs}`);
    markersAngles.push(((tempStart + (addPercs - tempStart) / 2) / 100) * 360);
  });

  // 计算每个环形的起始和结束角度
  const ringData = [
    {
      color: "#00a2d1",
      start: -90,
      end: -11.2,
      text: "Typescript Developer - ",
      value: "22%",
      textX: 578,
      textY: 78,
    },
    {
      color: "#0ad100",
      start: -11.2,
      end: 50,
      text: "Next.js Developer - ",
      value: "17%",
      textX: 764,
      textY: 298,
    },
    {
      color: "#f67521",
      start: 50,
      end: 245.2,
      text: "React Developer - ",
      value: "51%",
      textX: 50,
      textY: 432,
    },
    {
      color: "#f60d1a",
      start: 245.2,
      end: 270,
      text: "Python Developer - ",
      value: "10%",
      textX: 260,
      textY: 20,
    },
  ];

  // 生成分隔线数据
  const dividerLines = ringData.flatMap((ring, idx) => [
    { angle: ring.start, type: "start", ringIndex: idx },
    { angle: ring.end, type: "end", ringIndex: idx },
  ]);

  useEffect(() => {
    if (!showAni) return;
    const animate = async () => {
      // 重置所有动画
      await controls.set({
        pathLength: 0,
        opacity: 0,
        scaleY: 0,
      });

      // 中间竖线动画
      await controls.start("line", {
        duration: 0.4,
        ease: "easeIn",
      });

      // 环形和分隔线动画
      await controls.start("draw", {
        duration: 1.4,
        ease: "easeInOut",
      });

      // 等待所有动画完成
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // 反向动画
      setDirection((prev) => prev * -1);
    };

    // 初始动画
    animate();

    // 设置循环
    const intervalId = setInterval(() => {
      animate();
    }, 4000); // 每6秒重新开始一次动画循环

    setTimeout(() => {
      setShowAni(false);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <div
      className={`${
        showAni ? "md:block" : "hidden"
      } relative min-h-screen bg-gradient-to-r from-[#2a4dec] to-[#0fdb27] transition-all ease-in-out duration-300`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 778 590"
          className="w-full h-full"
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
        >
          <motion.circle
            className="mt-base"
            cx="389"
            cy="294"
            r="209"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="1.01"
            opacity="0.3"
          />
          <motion.path
            className="mt-base-2"
            d="M559,294A170,170,0,1,1,389,124,170,170,0,0,1,559,294Z"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="40"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: direction > 0 ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          <g
            className="mt-rings"
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="10"
          >
            <motion.path
              className="mt-base-2-track"
              d="M389,124A170,170,0,1,1,219,294,170,170,0,0,1,389,124Z"
              stroke="#eeeeee"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: direction > 0 ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            {ringData.map((ring, index) => {
              const startAngle = (ring.start * Math.PI) / 180;
              const endAngle = (ring.end * Math.PI) / 180;
              const largeArcFlag = Math.abs(ring.end - ring.start) > 180 ? 1 : 0;

              const x1 = 389 + 170 * Math.cos(startAngle);
              const y1 = 294 + 170 * Math.sin(startAngle);
              const x2 = 389 + 170 * Math.cos(endAngle);
              const y2 = 294 + 170 * Math.sin(endAngle);

              const d = `
                M ${x1} ${y1}
                A 170 170 0 ${largeArcFlag} 1 ${x2} ${y2}
              `;

              return (
                <motion.path
                  key={index}
                  className={`mt-ring mt-ring-${index}`}
                  d={d}
                  stroke={ring.color}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: direction > 0 ? 1 : 0 }}
                  transition={{
                    duration: 1.4,
                    delay: direction > 0 ? index * 0.2 : (3 - index) * 0.2,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
            {/* 分隔线 */}
            {dividerLines.map((line, index) => {
              const angle = (line.angle * Math.PI) / 180;
              const innerRadius = 165;
              const outerRadius = 200;

              const x1 = 389 + innerRadius * Math.cos(angle);
              const y1 = 294 + innerRadius * Math.sin(angle);
              const x2 = 389 + outerRadius * Math.cos(angle);
              const y2 = 294 + outerRadius * Math.sin(angle);

              return (
                <motion.line
                  key={`divider-${index}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#fff"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: direction > 0 ? 1 : 0 }}
                  transition={{
                    delay:
                      direction > 0
                        ? Math.floor(index / 2) * 0.2 + 1.4
                        : 1.4 + (dividerLines.length / 2 - Math.floor(index / 2) - 1) * 0.2,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {/* 文字连接线 */}
            {ringData.map((ring, index) => {
              const midAngle = ((ring.start + ring.end) / 2) * (Math.PI / 180);
              const radius = 170;

              const startX = 389 + radius * Math.cos(midAngle);
              const startY = 294 + radius * Math.sin(midAngle);

              // 计算控制点，使曲线更自然
              const endX = ring.textX;
              const endY = ring.textY;
              const dx = endX - startX;
              const dy = endY - startY;

              // 根据不同区域调整控制点
              let controlX, controlY;

              // 为React Developer和Next.js Developer特别调整控制点
              if (index === 1) {
                // Next.js Developer
                controlX = startX + dx * 0.7;
                controlY = startY + dy * 0.3;
              } else if (index === 2) {
                // React Developer
                controlX = startX + dx * 0.3;
                controlY = startY + dy * 0.7;
              } else {
                controlX = startX + dx * 0.5;
                controlY = startY + dy * 0.5;
              }

              const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;

              return (
                <g key={`text-group-${index}`}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: direction > 0 ? 1 : 0 }}
                    transition={{
                      delay:
                        direction > 0 ? index * 0.2 + 1.4 : 1.4 + (ringData.length - index - 1) * 0.2,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  />
                  <motion.text
                    className="sans-light "
                    x={ring.textX - 100}
                    y={ring.textY - 10}
                    fontSize="14"
                    fill="#fff"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: direction > 0 ? 1 : 0 }}
                    transition={{
                      delay:
                        direction > 0 ? index * 0.2 + 1.8 : 1.0 + (ringData.length - index - 1) * 0.2,
                      duration: 0.3,
                    }}
                  >
                    {ring.text}
                    <tspan className="sans-semi">{ring.value}</tspan>
                  </motion.text>
                </g>
              );
            })}

            <motion.text
              className="mt-text sans-light  text-2x hover:cursor-pointer"
              x="330"
              y="303"
              fontSize="30"
              fill="#fff"
              onClick={() => {
                setShowAni(false);
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: direction > 0 ? 1 : 0, y: direction > 0 ? 0 : 50 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Hi,Im Eric
            </motion.text>
          </g>
          <g className="mt-perc-lines">
            {[0, 1, 2, 3].map((line, index) => (
              <motion.rect
                key={index}
                className="mt-perc-line"
                x="388"
                y="94"
                width="2"
                height="49"
                fill="#fff"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: direction > 0 ? 1 : 0, scaleY: direction > 0 ? 1 : 0 }}
                transition={{
                  delay: direction > 0 ? 1 + index * 0.2 : 1 + (3 - index) * 0.2,
                }}
              />
            ))}
          </g>
          <motion.line
            className="mt-line"
            x1="389"
            y1="530"
            x2="389"
            y2="60"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0"
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            animate={{ scaleY: direction > 0 ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          />
          <g
            className="mt-markers"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
          >
            {ringData.map((ring, index) => {
              const angle = ((ring.start + ring.end) / 2) * (Math.PI / 180);
              const x1 = 389.5;
              const y1 = 107;
              const x2 = 389.5;
              const y2 = 17;

              const transform = `rotate(${(angle * 180) / Math.PI} ${x1} ${y1})`;

              return (
                <motion.line
                  key={index}
                  className={`mt-marker mt-marker-${index}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: direction > 0 ? 1 : 0 }}
                  transition={{
                    delay: direction > 0 ? 1 + index * 0.2 : 1 + (ringData.length - index - 1) * 0.2,
                  }}
                  style={{ transform }}
                />
              );
            })}
          </g>
        </motion.svg>
      </div>
    </div>
  );
};

export default Ani;

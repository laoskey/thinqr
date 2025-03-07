"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Animated = () => {
  const controls = useAnimation();

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
      text: "RADIO - ",
      value: "22%",
      textX: 578,
      textY: 78,
    },
    {
      color: "#0ad100",
      start: -11.2,
      end: 50,
      text: "TV - ",
      value: "17%",
      textX: 664,
      textY: 398,
    },
    {
      color: "#f67521",
      start: 50,
      end: 255.2,
      text: "PRINT - ",
      value: "57%",
      textX: 56,
      textY: 432,
    },
    {
      color: "#f60d1a",
      start: 255.2,
      end: 270,
      text: "ONLINE - ",
      value: "4%",
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
    const animate = async () => {
      // 中间竖线动画（向上收缩）
      await controls.start("line", {
        duration: 0.4,
        ease: "easeIn",
      });

      // 环形和分隔线动画
      await controls.start("draw", {
        duration: 1.4,
        ease: "easeInOut",
      });
    };

    animate();
  }, [controls]);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#ed30a0] to-[#0b86a6]">
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
            animate={{ pathLength: 1 }}
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
              animate={{ pathLength: 1 }}
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
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: index * 0.2,
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
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: Math.floor(index / 2) * 0.2 + 1.4, // 与环形区域展开同步
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
              const controlX = startX + dx * 0.5;
              const controlY = startY + dy * 0.5;

              const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;

              return (
                <g key={`text-group-${index}`}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      delay: index * 0.2 + 1.4, // 与环形区域展开同步
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  />
                  <motion.text
                    className="sans-light"
                    x={ring.textX}
                    y={ring.textY}
                    fontSize="14"
                    fill="#fff"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.2 + 1.8, // 连接线完成后显示文字
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
              className="mt-text sans-light"
              x="308"
              y="303"
              fontSize="30"
              fill="#fff"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              MEDIA TYPE
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
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
              />
            ))}
          </g>
          <motion.line
            className="mt-line"
            x1="389"
            y1="294"
            x2="389"
            y2="94"
            fill="#fff"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            animate={{ scaleY: 1 }}
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
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  style={{ transform }}
                />
              );
            })}
          </g>
          <g className="mt-figures"></g>
        </motion.svg>
      </div>

      <motion.a
        href="http://www.petebarr.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 left-6 z-50 text-white font-helvetica text-base no-underline hover:underline"
        whileHover={{ scale: 1.05 }}
      >
        Petebarr.com
      </motion.a>

      <motion.a
        href="https://twitter.com/petebarr"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-6 z-50 w-10 h-10"
        whileHover={{ scale: 1.1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <path
            fill="#fff"
            d="M39.19 15.39a10.63 10.63 0 0 1-3.38 1.29 5.31 5.31 0 0 0-9.19 3.63 5.43 5.43 0 0 0 .14 1.22A15.11 15.11 0 0 1 15.8 16a5.39 5.39 0 0 0-.72 2.68 5.32 5.32 0 0 0 2.37 4.42 5.33 5.33 0 0 1-2.45-.7v.07a5.31 5.31 0 0 0 4.27 5.21 5.45 5.45 0 0 1-1.41.19 4.78 4.78 0 0 1-1-.1 5.32 5.32 0 0 0 5 3.69 10.64 10.64 0 0 1-6.6 2.28c-.43 0-.85 0-1.27-.07a15.13 15.13 0 0 0 23.28-12.74v-.69a10.87 10.87 0 0 0 2.66-2.75 10.84 10.84 0 0 1-3.06.84 5.35 5.35 0 0 0 2.34-2.94"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default Animated;

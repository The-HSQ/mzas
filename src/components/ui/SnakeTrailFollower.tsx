import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

export default function SnakeTrailFollower({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const [trail, setTrail] = useState<Point[]>([]);
  const maxTrailLength = 10;

  const requestRef = useRef<number>(0);
  const mousePos = useRef<Point>({ x: 0, y: 0 });

  const animate = () => {
    setTrail((prev) => {
      const newTrail = [...prev, { ...mousePos.current }];
      if (newTrail.length > maxTrailLength) newTrail.shift();
      return newTrail;
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const container = containerRef.current;

    container.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [containerRef]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      {trail.map((point, index) => (
        <motion.circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={Math.max(2, (index / trail.length) * 10)}
          fill="var(--color-text)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </svg>
  );
}

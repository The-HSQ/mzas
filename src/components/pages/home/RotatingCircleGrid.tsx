import { motion } from "framer-motion";
import React from "react";

type Props = {
  isHoveringImage: boolean;
  rows?: number; // Optional rows, default to 3
  columns?: number; // Optional columns, default to 3
  size?: number; // Circle size in px, default to 72
  gap?: number; // Gap between circles in px, default to 16
};

const RotatingCircleGrid: React.FC<Props> = ({
  isHoveringImage = false,
  rows = 3,
  columns = 3,
  size = 72,
  gap = 16,
}) => {
  const renderCircle = (row: number, col: number) => {
    const rotateClockwise = (row + col) % 2 === 0;
    const rotation = rotateClockwise ? 360 : -360;
    const duration = rotateClockwise ? 10 : 50;

    return (
      <motion.div
        key={`${row}-${col}`}
        className="rounded-full border-2 border-dashed border-[var(--color-primary)]/50"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{ rotate: rotation, opacity: isHoveringImage ? 0.1 : 1 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
    );
  };

  const gridItems = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      gridItems.push(renderCircle(row, col));
    }
  }

  return (
    <div
      className="relative"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, ${size}px)`,
        gap: `${gap}px`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {gridItems}
    </div>
  );
};

export default RotatingCircleGrid;

// src/components/VerticalTimeline.tsx
import React from "react";

interface VerticalTimelineProps {
  children: React.ReactNode;
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full top-0"></div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default VerticalTimeline;

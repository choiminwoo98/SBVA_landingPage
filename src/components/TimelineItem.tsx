// src/components/TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  time: string;
  title: string;
  subtitle?: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex items-start mb-16 relative">
      {/* Time on the left */}

      <div className=" pr-4 text-gray-600 text-lg font-semibold mb-4 md:mb-0">
        <p>{time}</p>
      </div>

      {/* Timeline Content on the right */}
      <div className="w-[400px] pl-4 relative">
        <div className="flex items-center">
          <div className="w-2 bg-gray-500 absolute transform -translate-x-1/2  h-full"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full bottom-16 border-2 border-white absolute transform -translate-x-1/2"></div>

          <div className="flex-grow ml-20">
            <h3 className="text-xl font-semibold">{title}</h3>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
            <p className="mt-2 text-gray-800">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

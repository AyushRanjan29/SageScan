import React from "react";

const ScoreCircle = ({ score = 0 }) => {
  const radius = 43;

  const circumference = 2 * Math.PI * radius;

  const progress = Math.max(0, Math.min(100, score));

  const offset = circumference - (progress / 100) * circumference;

  let color = "#ef5350";

  if (score >= 70) {
    color = "#55c98a";
  } else if (score >= 40) {
    color = "#f2c94c";
  }

  return (
    <div className="relative w-[108px] h-[108px] shrink-0">
      <svg
        width="108"
        height="108"
        viewBox="0 0 108 108"
        className="-rotate-90"
      >
        <circle
          cx="54"
          cy="54"
          r={radius}
          fill="none"
          stroke="#29313d"
          strokeWidth="8"
        />

        <circle
          cx="54"
          cy="54"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>

      <div
        className="
          absolute inset-0
          flex flex-col
          items-center
          justify-center
        "
      >
        <span className="text-[28px] leading-none font-semibold text-[#ffff]">
          {score}
        </span>

        <span className="text-[10px] text-slate-500 mt-1">/100</span>
      </div>
    </div>
  );
};

export default ScoreCircle;

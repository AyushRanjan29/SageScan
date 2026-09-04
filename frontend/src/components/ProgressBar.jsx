import React from "react";

const ProgressBar = ({ name, score = 0 }) => {
  let color = "#ef5350";

  if (score >= 70) {
    color = "#55c98a";
  } else if (score >= 35) {
    color = "#f2c94c";
  }

  return (
    <div
      className="
        border border-[#29313d]
        bg-[#11161d]
        rounded-md
        px-2.5
        py-2
      "
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[11px] text-slate-300 truncate">{name}</span>

        <span className="text-[10px] text-slate-500">{score}/100</span>
      </div>

      <div className="h-[4px] bg-[#29313d] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${score}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

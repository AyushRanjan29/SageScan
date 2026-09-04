import React from "react";

const PerformanceProfile = ({
  timeComplexity,
  spaceComplexity,
  bottleneck,
  bottleneckScore = 0,
}) => {
  return (
    <div
      className="
        border border-[#29313d]
        bg-[#151a21]
        rounded-md
        p-3
      "
    >
      <h3 className="text-[12px] uppercase tracking-[0.08em] text-slate-400 mb-3">
        Performance Profile
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-[22px] font-semibold text-[#55c98a]">
            {timeComplexity}
          </div>

          <div className="text-[11px] text-slate-500">Time Complexity</div>
        </div>

        <div>
          <div className="text-[22px] font-semibold text-[#55c98a]">
            {spaceComplexity}
          </div>

          <div className="text-[11px] text-slate-500">Space Complexity</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-[11px] mb-1.5">
          <span className="text-slate-400">Bottleneck</span>

          <span className="text-slate-500">{bottleneckScore}%</span>
        </div>

        <div className="h-[4px] bg-[#29313d] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#72cbb4] rounded-full"
            style={{
              width: `${bottleneckScore}%`,
            }}
          />
        </div>

        <p className="text-[11px] text-slate-500 mt-2 truncate">{bottleneck}</p>
      </div>
    </div>
  );
};

export default PerformanceProfile;

import React from "react";
import { MdOutlineDangerous } from "react-icons/md";

const CriticalBox = ({ data }) => {
  return (
    <div
      className="
        relative
        border border-[#4b3034]
        bg-[#151a21]
        rounded-md
        p-3
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          left-0 top-0 bottom-0
          w-[3px]
          bg-[#ef5350]
        "
      />

      <div className="flex items-start gap-2 pl-1">
        <MdOutlineDangerous
          className="text-[#ef5350] mt-0.5 shrink-0"
          size={17}
        />

        <div className="min-w-0">
          <h4 className="text-[14px] font-semibold text-slate-200">
            {data.title}
          </h4>

          <p className="text-[12px] text-slate-400 leading-[1.55] mt-1.5">
            {data.description}
          </p>

          {data.line && (
            <span className="inline-block mt-2 text-[9px] text-slate-500">
              Line {data.line}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CriticalBox;

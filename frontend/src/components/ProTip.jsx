import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

const ProTip = ({ text }) => {
  return (
    <div
      className="
        relative
        border border-[#29313d]
        bg-[#151a21]
        rounded-md
        p-3
        overflow-hidden
        mb-3
      "
    >
      <div
        className="
          absolute
          left-0 top-0 bottom-0
          w-[3px]
          bg-[#7165d9]
        "
      />

      <div className="flex items-center gap-2 pl-1 mb-1.5">
        <FaRegLightbulb className="text-[#8b7cf6]" size={13} />

        <span className="text-[12px] uppercase tracking-[0.08em] font-semibold text-slate-300">
          Pro Tip
        </span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed pl-6">{text}</p>
    </div>
  );
};

export default ProTip;

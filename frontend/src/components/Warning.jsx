import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const Warning = ({ data }) => {
  return (
    <div
      className="
        relative
        border border-[#3b3828]
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
          bg-[#f2c94c]
        "
      />

      <div className="flex items-start gap-2 pl-1">
        <FaExclamationTriangle
          className="text-[#f2c94c] mt-0.5 shrink-0"
          size={13}
        />

        <div className="min-w-0">
          <h4 className="text-[14px] font-semibold text-slate-200">
            {data.title}
          </h4>

          {data.line && (
            <span className="text-[11px] text-slate-500">Line {data.line}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Warning;

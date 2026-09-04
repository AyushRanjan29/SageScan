import React from "react";
import { MdOutlineSecurity } from "react-icons/md";

const SecurityAudit = ({ metrics = [] }) => {
  return (
    <div
      className="
        border border-[#29313d]
        bg-[#151a21]
        rounded-md
        p-3
      "
    >
      <div className="flex items-center gap-2 mb-3">
        <MdOutlineSecurity className="text-slate-400" size={14} />

        <h3 className="text-[12px] uppercase tracking-[0.08em] text-slate-400">
          Security Audit
        </h3>
      </div>

      <div className="space-y-2">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="
                flex items-center
                justify-between
                border-b border-[#242c36]
                pb-1.5
                last:border-0
              "
          >
            <span className="text-[11.5px] text-slate-300">{item.name}</span>

            <span
              className="
                  px-1.5 py-0.5
                  rounded
                  bg-[#382522]
                  border border-[#593530]
                  text-[10px]
                  text-[#ef8a7e]
                "
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityAudit;

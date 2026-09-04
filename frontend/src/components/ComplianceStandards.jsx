import React from "react";
import { FiXCircle } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";

const ComplianceStandards = ({ standards = [] }) => {
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
        Compliance Standards
      </h3>

      <div className="space-y-2">
        {standards.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.check === "yes" ? (
              <SiTicktick className="text-[#55c98a]" size={11} />
            ) : (
              <FiXCircle className="text-[#ef5350]" size={12} />
            )}

            <span className="text-[11px] text-slate-300">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceStandards;

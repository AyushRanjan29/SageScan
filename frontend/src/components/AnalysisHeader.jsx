import React from "react";
import { FiCopy, FiFileText } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import ScoreCircle from "./ScoreCircle";
import ProgressBar from "./ProgressBar";

const AnalysisHeader = ({ data, onCopy }) => {
  return (
    <div
      className="
        border border-[#29313d]
        bg-[#151a21]
        rounded-md
        p-3
      "
    >
      <div className="flex items-center gap-4">
        <ScoreCircle score={data.overallScore} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-[16px] font-semibold text-slate-100">
                OVERALL SCORE
              </h2>

              <p className="text-[12px] text-slate-500 mt-0.5">
                Automated quality & security analysis
              </p>
            </div>

            <button
              onClick={onCopy}
              className="
                flex items-center
                gap-1.5
                px-2.5
                py-1.5
                rounded
                border border-[#303947]
                bg-[#1b212a]
                hover:bg-[#222a35]
                text-[12px]
                text-slate-300
              "
            >
              <FiCopy size={11} />
              Copy Report
            </button>
          </div>

          {data.scoreBreakdown && (
            <div
              className="
                grid
                grid-cols-2
                xl:grid-cols-4
                gap-2
              "
            >
              {data.scoreBreakdown.map((item, index) => (
                <ProgressBar key={index} name={item.name} score={item.score} />
              ))}
            </div>
          )}
        </div>
      </div>

      {data.summary && (
        <div
          className="
            mt-3
            pt-3
            border-t border-[#29313d]
          "
        >
          <div className="flex items-center gap-2 mb-1.5">
            <FiFileText className="text-[#8b7cf6]" size={13} />

            <span className="text-[14px] uppercase tracking-[0.08em] font-semibold text-slate-400">
              Summary
            </span>

            <BsStars className="ml-auto text-slate-600" size={12} />
          </div>

          <p className="text-[12px] text-slate-400 leading-[1.6]">
            {data.summary}
          </p>
        </div>
      )}
    </div>
  );
};

export default AnalysisHeader;

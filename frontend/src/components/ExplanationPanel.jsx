import React from "react";
import { LuMessageSquareCode } from "react-icons/lu";
import MarkdownPreview from "@uiw/react-markdown-preview";

const ExplanationPanel = ({ content }) => {
  return (
    <div
      className="
        border border-[#29313d]
        bg-[#151a21]
        rounded-md
        overflow-hidden
      "
    >
      <div
        className="
          px-4 py-3
          border-b border-[#29313d]
          bg-[#181e26]
          flex items-center gap-2
        "
      >
        <LuMessageSquareCode className="text-[#e58b6f]" size={16} />

        <span className="text-[13px] font-semibold text-slate-300">
          Code Explanation
        </span>
      </div>

      <div className="p-6">
        <MarkdownPreview
          className="sagescan-markdown"
          source={content}
          style={{
            backgroundColor: "transparent",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        />
      </div>
    </div>
  );
};

export default ExplanationPanel;

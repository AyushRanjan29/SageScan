import React from "react";

import {
  AiOutlineThunderbolt,
  AiOutlineDownload,
} from "react-icons/ai";

import {
  FiCopy,
} from "react-icons/fi";

import { ClipLoader } from "react-spinners";


const ActionBar = ({
  onAnalyze,
  onDownload,
  onCopy,
  loading,
}) => {

  return (
    <div
      className="
        sticky
        bottom-0
        z-10
        border border-[#29313d]
        bg-[#11161d]/95
        backdrop-blur-sm
        rounded-md
        px-2
        py-2
        flex items-center
        justify-between
        gap-2
      "
    >

      <div className="flex gap-2">


        <button
          onClick={onDownload}
          className="
            h-[29px]
            px-3
            flex items-center
            gap-1.5
            rounded-md
            border border-[#303947]
            bg-[#1b212a]
            hover:bg-[#222a35]
            text-slate-300
            text-[12px]
          "
        >

          <AiOutlineDownload size={14} />

          Download Code

        </button>

      </div>


      <button
        onClick={onCopy}
        className="
          h-[29px]
          px-3
          flex items-center
          gap-1.5
          rounded-md
          border border-[#303947]
          bg-[#1b212a]
          hover:bg-[#222a35]
          text-slate-300
          text-[12px]
        "
      >

        <FiCopy size={12} />

        Copy Report

      </button>

    </div>
  );
};


export default ActionBar;
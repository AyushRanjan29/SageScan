import React from "react";
import { GoCodeReview } from "react-icons/go";

const EmptyState = () => {
  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        border
        border-dashed
        border-[#303947]
        rounded-lg
        bg-[#0d1117]
      "
    >
      {/* Icon */}
      <div
        className="
          w-20
          h-20
          rounded-full
          flex
          items-center
          justify-center
          bg-[#6859d8]/10
          text-[#8d80ed]
          mb-5
        "
      >
        <GoCodeReview size={34} />
      </div>

      {/* Heading */}
      <h3
        className="
          text-[19px]
          font-semibold
          text-slate-100
          mb-2
        "
      >
        Ready for Review
      </h3>

      {/* Description */}
      <p
        className="
          text-[13px]
          text-slate-500
          leading-relaxed
          max-w-[380px]
        "
      >
        Paste your code on the left and click{" "}
        <span className="text-[#8d80ed] font-medium">Analyze</span> or{" "}
        <span className="text-[#e58b6f] font-medium">Explain</span> to generate
        intelligent insights.
      </p>
    </div>
  );
};

export default EmptyState;

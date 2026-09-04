import React from "react";
import { IoMdSettings } from "react-icons/io";
import { RiSearchAiLine } from "react-icons/ri";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  return (
    <header
      className="
        top-navbar
        h-[55px]
        shrink-0
        w-full
        flex items-center
        justify-between
        px-4
        bg-[#151a21]
        border-b border-[#252c36]
      "
    >
      {/* =========================================
          LOGO
      ========================================== */}

      <div className="flex items-center">
        <h3
          className="
            flex
            items-center
            gap-2
            text-[22px]
            font-semibold
            tracking-tight
            text-[#8b7cf6]
            cursor-pointer
          "
        >
          <RiSearchAiLine className="flex items-center text-[25px]" />
          SageScan
        </h3>
      </div>

      {/* =========================================
          NAVIGATION
      ========================================== */}

      <nav
        className="
          hidden
          md:flex
          items-center
          gap-7
          ml-auto
          mr-7
        "
      >
        <a
          href="#"
          className="
            text-[13px]
            text-slate-400
            hover:text-slate-200
            transition-colors
          "
        >
          History
        </a>

        <a
          href="#"
          className="
            text-[13px]
            text-slate-400
            hover:text-slate-200
            transition-colors
          "
        >
          Documentation
        </a>

        <a
          href="#"
          className="
            text-[13px]
            text-slate-400
            hover:text-slate-200
            transition-colors
          "
        >
          Account
        </a>
      </nav>

      {/* =========================================
          RIGHT ACTIONS
      ========================================== */}
      
      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onToggleTheme}
          className="
            w-[30px]
            h-[30px]
            ml-1
            flex
            items-center
            justify-center
            rounded-md
            border
            border-[#303947]
            bg-[#1b212a]
            text-slate-400
            hover:text-slate-200
            hover:bg-[#222a35]
            transition-all
          "
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
        </button>

        {/* Settings */}

        <button
          className="
            w-[30px]
            h-[30px]
            ml-1
            flex items-center
            justify-center
            rounded-md
            text-slate-400
            hover:text-slate-200
            hover:bg-[#1b212a]
            transition-colors
          "
          title="Settings"
        >
          <IoMdSettings size={17} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

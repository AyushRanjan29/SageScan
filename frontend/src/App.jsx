  import React, { useState, useEffect } from "react";
  import "./App.css";
  import Navbar from "./components/Navbar";
  import CodeEditor from "./components/CodeEditor";
  import EmptyState from "./components/EmptyState";
  import AnalysisHeader from "./components/AnalysisHeader";
  import CriticalBox from "./components/CriticalBox";
  import Warning from "./components/Warning";
  import PerformanceProfile from "./components/PerformanceProfile";
  import SecurityAudit from "./components/SecurityAudit";
  import ComplianceStandards from "./components/ComplianceStandards";
  import ProTip from "./components/ProTip";
  import ExplanationPanel from "./components/ExplanationPanel";

  import { analyzeCode, explainCode, fixCode } from "./api";

  import { toast, ToastContainer } from "react-toastify";
  import { FaExclamationTriangle } from "react-icons/fa";
  import { MdOutlineDangerous } from "react-icons/md";
  import ActionBar from "./components/ActionBar";

  const languages = [
    { label: "Java", value: "java" },
    { label: "Python", value: "python" },
    { label: "C", value: "c" },
    { label: "C++", value: "cpp" },
    { label: "JavaScript", value: "javascript" },
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "TypeScript", value: "typescript" },
    { label: "C#", value: "csharp" },
    { label: "Go", value: "go" },
    { label: "Rust", value: "rust" },
    { label: "PHP", value: "php" },
    { label: "Ruby", value: "ruby" },
    { label: "Kotlin", value: "kotlin" },
    { label: "Swift", value: "swift" },
    { label: "Dart", value: "dart" },
    { label: "SQL", value: "sql" },
    { label: "R", value: "r" },
  ];

  const App = () => {
    const [language, setLanguage] = useState("java");
    const [code, setCode] = useState("");
    const [screen, setScreen] = useState("empty");
    const [data, setData] = useState(null);
    const [explainData, setExplainData] = useState("");
    const [analyzeLoading, setAnalyzeLoading] = useState(false);
    const [explainLoading, setExplainLoading] = useState(false);
    const [fixLoading, setFixLoading] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem("sagescan-theme");

      if (savedTheme) {
        return savedTheme === "dark";
      }

      return true;
    });

    useEffect(() => {
      localStorage.setItem("sagescan-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    /* =======================================================
      ANALYZE
    ======================================================= */

    const handleAnalyze = async () => {
      if (!code.trim()) {
        toast.error("Enter the code to analyze");
        return;
      }

      try {
        setAnalyzeLoading(true);

        const response = await analyzeCode(code, language);

        const result =
          typeof response === "string" ? JSON.parse(response) : response;

        setData(result);

        setScreen("analyze");

        toast.success("Analysis Completed!!!");
      } catch (error) {
        console.error("Analysis Error:", error);

        toast.error(error.message || "Failed to analyze code");
      } finally {
        setAnalyzeLoading(false);
      }
    };

    /* =======================================================
      EXPLAIN
    ======================================================= */

    const handleExplain = async () => {
      if (!code.trim()) {
        toast.error("Please enter some code to explain");
        return;
      }

      try {
        setExplainLoading(true);

        const response = await explainCode(code, language);

        setExplainData(response.explanation);

        setScreen("explain");

        toast.success("Explanation generated!!!");
      } catch (error) {
        console.error("Explanation Error:", error);

        toast.error(error.message || "Failed to explain code");
      } finally {
        setExplainLoading(false);
      }
    };

    /* =======================================================
      AUTO FIX
    ======================================================= */

    const handleFix = async () => {
      if (!code.trim()) {
        toast.error("Please enter some code to fix");
        return;
      }

      try {
        setFixLoading(true);

        const response = await fixCode(code, language);

        setCode(response.fixedCode);

        toast.success("Code fixed!!!");
      } catch (error) {
        console.error("Auto Fix Error:", error);

        toast.error(error.message || "Failed to fix code");
      } finally {
        setFixLoading(false);
      }
    };

    /* =======================================================
      COPY REPORT
    ======================================================= */

    const handleCopyReport = async () => {
      if (!data) {
        toast.error("Analyze the code first");
        return;
      }

      const report = `
  SAGESCAN CODE REVIEW
  ====================

  Overall Score: ${data.overallScore}/100

  SUMMARY
  ${data.summary || "N/A"}

  CRITICAL ISSUES
  ${
    data.critical
      ?.map(
        (item, index) =>
          `${index + 1}. ${item.title}
  ${item.description}`,
      )
      .join("\n\n") || "None"
  }

  WARNINGS
  ${
    data.warnings
      ?.map((item, index) => `${index + 1}. ${item.title}`)
      .join("\n") || "None"
  }

  PERFORMANCE

  Time Complexity:
  ${data.performanceProfile?.timeComplexity || "N/A"}

  Space Complexity:
  ${data.performanceProfile?.spaceComplexity || "N/A"}

  Bottleneck:
  ${data.performanceProfile?.bottleneck || "N/A"}

  PRO TIP
  ${data.proTip || "N/A"}
  `.trim();

      try {
        await navigator.clipboard.writeText(report);

        toast.success("Report copied");
      } catch {
        toast.error("Unable to copy report");
      }
    };

    /* =======================================================
      DOWNLOAD CODE
    ======================================================= */

    const handleDownloadCode = () => {
      if (!code.trim()) {
        toast.error("There is no code to download");
        return;
      }

      const extensions = {
        java: "java",
        python: "py",
        c: "c",
        cpp: "cpp",
        javascript: "js",
        html: "html",
        css: "css",
        typescript: "ts",
        csharp: "cs",
        go: "go",
        rust: "rs",
        php: "php",
        ruby: "rb",
        kotlin: "kt",
        swift: "swift",
        dart: "dart",
        sql: "sql",
        r: "r",
      };

      const extension = extensions[language] || "txt";

      const blob = new Blob([code], {
        type: "text/plain;charset=utf-8",
      });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = `sagescan-code.${extension}`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    };

    /* =======================================================
      RENDER
    ======================================================= */

    return (
      <div
        className={`
          sagescan-app
          ${isDarkMode ? "theme-dark" : "theme-light"}
          h-screen
          w-screen
          overflow-hidden
          flex
          flex-col
        `}
      >
        <Navbar
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />

        <main className="flex-1 min-h-0 flex flex-col lg:flex-row">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              w-full lg:w-[49%]
              min-w-0
              flex flex-col
              border-r border-[#252c36]
              bg-[#10151b]
            "
          >
            <CodeEditor
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={setLanguage}
              languages={languages}
              onAnalyze={handleAnalyze}
              onFix={handleFix}
              onExplain={handleExplain}
              analyzeLoading={analyzeLoading}
              fixLoading={fixLoading}
              explainLoading={explainLoading}
              isDarkMode={isDarkMode}
            />
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              w-full lg:w-[51%]
              min-w-0
              flex-1
              flex
              flex-col
              overflow-y-auto
              bg-[#0d1117]
            "
          >
            <div className="p-2.5 min-h-full">
              {/* =============================================
                  EMPTY
              ============================================= */}

              {screen === "empty" && <EmptyState />}

              {/* =============================================
                  ANALYSIS
              ============================================= */}

              {screen === "analyze" && data && (
                <div className="space-y-2.5">
                  <AnalysisHeader data={data} onCopy={handleCopyReport} />

                  {/* -----------------------------------------
                      CRITICAL
                  ------------------------------------------ */}

                  {data.critical?.length > 0 && (
                    <section>
                      <div className="flex items-center gap-2 mb-2">
                        <MdOutlineDangerous
                          className="text-[#ef5350]"
                          size={14}
                        />

                        <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-slate-400">
                          Critical Issues
                        </span>

                        <span className="text-[10px] text-slate-500">
                          ({data.critical.length})
                        </span>
                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                        {data.critical.map((item, index) => (
                          <CriticalBox key={index} data={item} />
                        ))}
                      </div>
                    </section>
                  )}

                  {/* -----------------------------------------
                      WARNINGS
                  ------------------------------------------ */}

                  {data.warnings?.length > 0 && (
                    <section>
                      <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle
                          className="text-[#f2c94c]"
                          size={12}
                        />

                        <span className="text-[11px] uppercase tracking-[0.08em] font-semibold text-slate-400">
                          Warnings
                        </span>

                        <span className="text-[10px] text-slate-500">
                          ({data.warnings.length})
                        </span>
                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                        {data.warnings.map((item, index) => (
                          <Warning key={index} data={item} />
                        ))}
                      </div>
                    </section>
                  )}

                  {/* -----------------------------------------
                      PERFORMANCE
                  ------------------------------------------ */}

                  {data.performanceProfile && (
                    <PerformanceProfile
                      timeComplexity={data.performanceProfile.timeComplexity}
                      spaceComplexity={data.performanceProfile.spaceComplexity}
                      bottleneck={data.performanceProfile.bottleneck}
                      bottleneckScore={data.performanceProfile.bottleneckScore}
                    />
                  )}

                  {/* -----------------------------------------
                      SECURITY
                  ------------------------------------------ */}

                  {data.securityAudit?.metrics?.length > 0 && (
                    <SecurityAudit metrics={data.securityAudit.metrics} />
                  )}

                  {/* -----------------------------------------
                      COMPLIANCE
                  ------------------------------------------ */}

                  {data.complianceStandards?.length > 0 && (
                    <ComplianceStandards standards={data.complianceStandards} />
                  )}

                  {/* -----------------------------------------
                      PRO TIP
                  ------------------------------------------ */}

                  {data.proTip && <ProTip text={data.proTip} />}

                  <ActionBar
                    onAnalyze={handleAnalyze}
                    onDownload={handleDownloadCode}
                    onCopy={handleCopyReport}
                    loading={analyzeLoading}
                  />
                </div>
              )}

              {/* =============================================
                  EXPLANATION
              ============================================= */}

              {screen === "explain" && <ExplanationPanel content={explainData} />}
              <ToastContainer />
            </div>
          </div>
        </main>
      </div>
    );
  };

  export default App;

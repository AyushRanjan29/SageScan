import React from "react";
import Editor from "@monaco-editor/react";

import { AiOutlineThunderbolt } from "react-icons/ai";

import { FaWandMagicSparkles } from "react-icons/fa6";

import { LuMessageSquareCode } from "react-icons/lu";

import { ClipLoader } from "react-spinners";

const languageSuggestions = {
  java: {
    keywords: [
      "abstract",
      "boolean",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "else",
      "extends",
      "final",
      "for",
      "if",
      "implements",
      "import",
      "int",
      "interface",
      "new",
      "private",
      "protected",
      "public",
      "return",
      "static",
      "String",
      "void",
      "while",
    ],

    snippets: [
      {
        label: "main",
        insertText: "public static void main(String[] args) {\n\t$0\n}",
      },

      {
        label: "class",
        insertText: "public class ${1:ClassName} {\n\t$0\n}",
      },

      {
        label: "for",
        insertText:
          "for (int ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {\n\t$0\n}",
      },
    ],
  },

  python: {
    keywords: [
      "and",
      "as",
      "async",
      "await",
      "break",
      "class",
      "continue",
      "def",
      "elif",
      "else",
      "except",
      "False",
      "for",
      "from",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "None",
      "not",
      "or",
      "pass",
      "return",
      "True",
      "try",
      "while",
      "with",
      "yield",
    ],

    snippets: [
      {
        label: "def",
        insertText: "def ${1:function_name}(${2:args}):\n\t$0",
      },

      {
        label: "class",
        insertText: "class ${1:ClassName}:\n\tdef __init__(self):\n\t\t$0",
      },

      {
        label: "if",
        insertText: "if ${1:condition}:\n\t$0",
      },
    ],
  },

  javascript: {
    keywords: [
      "async",
      "await",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "else",
      "export",
      "for",
      "function",
      "if",
      "import",
      "let",
      "new",
      "return",
      "switch",
      "try",
      "while",
    ],

    snippets: [
      {
        label: "clg",
        insertText: "console.log(${1:value});",
      },

      {
        label: "async",
        insertText: "const ${1:name} = async () => {\n\t$0\n};",
      },
    ],
  },

  html: {
    keywords: [
      "a",
      "body",
      "button",
      "div",
      "form",
      "h1",
      "head",
      "html",
      "img",
      "input",
      "label",
      "li",
      "link",
      "main",
      "meta",
      "nav",
      "p",
      "script",
      "section",
      "span",
      "style",
      "ul",
    ],

    snippets: [
      {
        label: "html5",
        insertText:
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>${1:Document}</title>\n</head>\n<body>\n\t$0\n</body>\n</html>',
      },

      {
        label: "div",
        insertText: '<div class="${1:class-name}">\n\t$0\n</div>',
      },
    ],
  },
};

const fallbackKeywords = [
  "break",
  "class",
  "const",
  "continue",
  "else",
  "for",
  "function",
  "if",
  "import",
  "return",
  "while",
];

const CodeEditor = ({
  code,
  setCode,
  language,
  setLanguage,
  languages,
  onAnalyze,
  onFix,
  onExplain,
  analyzeLoading,
  fixLoading,
  explainLoading,
  isDarkMode,
}) => {
  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme("sagescan", {
      base: "vs-dark",
      inherit: true,

      rules: [
        {
          token: "keyword",
          foreground: "9B8CFF",
        },

        {
          token: "entity.name.function",
          foreground: "55C98A",
          fontStyle: "bold",
        },

        {
          token: "identifier",
          foreground: "D9DEE7",
        },

        {
          token: "string",
          foreground: "E58B6F",
        },

        {
          token: "number",
          foreground: "E9B866",
        },

        {
          token: "comment",
          foreground: "657080",
          fontStyle: "italic",
        },

        {
          token: "type.identifier",
          foreground: "D9B76E",
        },
      ],

      colors: {
        "editor.background": "#10151B",
        "editor.foreground": "#D9DEE7",

        "editorCursor.foreground": "#9B8CFF",

        "editor.lineHighlightBackground": "#151B23",

        "editor.selectionBackground": "#7165D933",

        "editorLineNumber.foreground": "#46505D",

        "editorLineNumber.activeForeground": "#9B8CFF",

        "editorGutter.background": "#10151B",

        "editorIndentGuide.background": "#202731",

        "minimap.background": "#10151B",

        "editorSuggestWidget.background": "#151B23",

        "editorSuggestWidget.border": "#303947",

        "scrollbarSlider.background": "#29313D",

        "scrollbarSlider.hoverBackground": "#3A4553",
      },
    });

    monaco.editor.defineTheme("sagescan-light", {
      base: "vs",
      inherit: true,

      rules: [
        {
          token: "keyword",
          foreground: "6658C7",
        },
        {
          token: "entity.name.function",
          foreground: "287A52",
          fontStyle: "bold",
        },
        {
          token: "identifier",
          foreground: "252A31",
        },
        {
          token: "string",
          foreground: "B85C38",
        },
        {
          token: "number",
          foreground: "A66A00",
        },
        {
          token: "comment",
          foreground: "7A8088",
          fontStyle: "italic",
        },
        {
          token: "type.identifier",
          foreground: "80651F",
        },
      ],

      colors: {
        "editor.background": "#F8F9FB",
        "editor.foreground": "#252A31",

        "editorCursor.foreground": "#6859D8",

        "editor.lineHighlightBackground": "#F0F1F5",

        "editor.selectionBackground": "#6859D833",

        "editorLineNumber.foreground": "#A0A6AE",

        "editorLineNumber.activeForeground": "#6859D8",

        "editorGutter.background": "#F8F9FB",

        "editorIndentGuide.background": "#E1E4E8",

        "minimap.background": "#F8F9FB",

        "editorSuggestWidget.background": "#FFFFFF",

        "editorSuggestWidget.border": "#D8DCE2",

        "scrollbarSlider.background": "#C8CDD4",

        "scrollbarSlider.hoverBackground": "#AEB5BE",
      },
    });

    languages.forEach(({ value }) => {
      const suggestions = languageSuggestions[value] || {
        keywords: fallbackKeywords,
        snippets: [],
      };

      monaco.languages.registerCompletionItemProvider(value, {
        triggerCharacters: [".", "<", "/", "#"],

        provideCompletionItems(model, position) {
          const word = model.getWordUntilPosition(position);

          const range = {
            startLineNumber: position.lineNumber,

            endLineNumber: position.lineNumber,

            startColumn: word.startColumn,

            endColumn: word.endColumn,
          };

          return {
            suggestions: [
              ...suggestions.keywords.map((keyword) => ({
                label: keyword,

                kind: monaco.languages.CompletionItemKind.Keyword,

                insertText: keyword,

                range,
              })),

              ...suggestions.snippets.map((snippet) => ({
                label: snippet.label,

                kind: monaco.languages.CompletionItemKind.Snippet,

                insertText: snippet.insertText,

                insertTextRules:
                  monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

                range,
              })),
            ],
          };
        },
      });
    });
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* ===============================================
          EDITOR HEADER
      =============================================== */}

      <div
        className="
          bottom-navbar
          h-[48px]
          shrink-0
          px-3
          flex items-center
          justify-between
          border-b border-[#252c36]
          bg-[#151a21]
        "
      >
        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="
            h-[30px]
            min-w-[130px]
            px-3
            bg-[#1b212a]
            border border-[#303947]
            rounded-md
            text-[13px]
            text-slate-200
            outline-none
            cursor-pointer
          "
        >
          {languages.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        <button
          onClick={onAnalyze}
          disabled={analyzeLoading}
          className="
            h-[30px]
            px-4
            flex items-center
            gap-2
            rounded-md
            bg-[#6859d8]
            hover:bg-[#7668e7]
            text-white
            text-[14px]
            font-semibold
            disabled:opacity-50
          "
        >
          {analyzeLoading ? (
            <ClipLoader color="white" size={13} />
          ) : (
            <AiOutlineThunderbolt size={15} />
          )}
          Analyze
        </button>
      </div>

      {/* ===============================================
          MONACO
      =============================================== */}

      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          width="100%"
          language={language}
          beforeMount={handleBeforeMount}
          onMount={(editor, monaco) => {
            monaco.editor.setTheme(isDarkMode ? "sagescan" : "sagescan-light");

            editor.focus();
          }}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme={isDarkMode ? "sagescan" : "sagescan-light"}
          options={{
            automaticLayout: true,
            fontSize: 13,
            lineHeight: 21,

            minimap: {
              enabled: false,
            },

            padding: {
              top: 10,
              bottom: 10,
            },

            scrollBeyondLastLine: false,

            smoothScrolling: true,

            cursorBlinking: "smooth",

            bracketPairColorization: {
              enabled: true,
            },

            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
        />
      </div>

      {/* ===============================================
          FOOTER
      =============================================== */}

      <div
        className="
          bottom-navbar
          h-[46px]
          shrink-0
          px-2
          flex items-center
          gap-2
          border-t border-[#252c36]
          bg-[#151a21]
        "
      >
        <button
          onClick={onFix}
          disabled={fixLoading}
          className="
            h-[30px]
            flex-1
            flex items-center
            justify-center
            gap-2
            rounded-md
            border border-[#303947]
            bg-[#1b212a]
            hover:bg-[#222a35]
            text-[13px]
            text-slate-200
            disabled:opacity-50
          "
        >
          {fixLoading ? (
            <ClipLoader color="#55c98a" size={13} />
          ) : (
            <FaWandMagicSparkles className="text-[#55c98a]" size={13} />
          )}
          Auto Fix Issues
        </button>

        <button
          onClick={onExplain}
          disabled={explainLoading}
          className="
            h-[30px]
            flex-1
            flex items-center
            justify-center
            gap-2
            rounded-md
            border border-[#303947]
            bg-[#1b212a]
            hover:bg-[#222a35]
            text-[13px]
            text-slate-200
            disabled:opacity-50
          "
        >
          {explainLoading ? (
            <ClipLoader color="#e58b6f" size={13} />
          ) : (
            <LuMessageSquareCode className="text-[#e58b6f]" size={14} />
          )}
          Explain
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;

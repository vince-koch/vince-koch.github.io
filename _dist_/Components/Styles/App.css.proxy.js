// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  background-color: var(--background-color);\n  color: var(--default-text-color);\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\na {\n  color: var(--default-text-color);\n}\n\na:hover {\n  color: var(--default-link-hover-color);\n}\n\n.spin {\n  animation: spin 10s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
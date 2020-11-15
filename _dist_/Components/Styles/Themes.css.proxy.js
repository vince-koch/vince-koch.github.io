// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/* Light theme */\r\n:root {\r\n    --brand-color: var(--sepia-3);\r\n    --default-background-color: var(--white);\r\n    --shadow-color: var(--black);\r\n    --default-text-color: var(--dark-gray-3);\r\n    --header-background-color: var(--light-gray-4);\r\n    --sidebar-background-color: var(--light-gray-5);\r\n}\r\n\r\n/* Dark theme */\r\nhtml[data-theme=\"dark\"] {\r\n    --brand-color: var(--sepia-1);\r\n    --shadow-color: var(--white);\r\n    --default-background-color: var(--dark-gray-3);\r\n    --default-text-color: var(--light-gray-5);\r\n    --header-background-color: var(--dark-gray-1);\r\n    --sidebar-background-color: var(--dark-gray-2);\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
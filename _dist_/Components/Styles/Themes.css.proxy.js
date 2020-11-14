// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/* Light theme */\r\n:root {\r\n    --default-background-color: : var(--white);\r\n    --default-text-color: var(--dark-gray-1);\r\n    --default-link-hover-color: var(--gold-4);\r\n    --header-background-color: var(--sepia-1);\r\n    --sidebar-background-color: var(--sepia-4);\r\n}\r\n\r\n/* Dark theme */\r\nhtml[data-theme=\"dark\"] {\r\n    --default-background-color: var(--sepia-1);\r\n    --default-text-color: var(--light-gray-5);\r\n    --default-link-hover-color: var(--gold-4);\r\n    --header-background-color: var(--sepia-3);\r\n    --sidebar-background-color: var(--sepia-5);\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
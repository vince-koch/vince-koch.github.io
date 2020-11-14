import React from "../../web_modules/react.js";
import {ShellTitle} from "./Shell.js";
import {FaHome} from "../../web_modules/react-icons/fa.js";
export class Home extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ShellTitle, null, /* @__PURE__ */ React.createElement(FaHome, null), " Home"), /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center"}
    }, /* @__PURE__ */ React.createElement("img", {
      src: "/favicon.ico",
      className: "spin"
    })));
  }
}

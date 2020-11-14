import React from "../../web_modules/react.js";
import {Nav} from "../../web_modules/react-bootstrap.js";
import {FaSun, FaMoon} from "../../web_modules/react-icons/fa.js";
export class LightSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.props.element.dataset.theme = this.getTheme();
  }
  render() {
    const icon = this.getIconType();
    return /* @__PURE__ */ React.createElement(Nav.Link, {
      title: "Toggle Lights",
      onClick: () => this.toggleTheme()
    }, icon({}));
  }
  getIconType() {
    const icon = this.getTheme() == "light" ? FaSun : FaMoon;
    return icon;
  }
  toggleTheme() {
    const newTheme = this.getTheme() == "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }
  setTheme(theme) {
    this.props.element.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    this.forceUpdate();
  }
  getTheme() {
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
    return currentTheme;
  }
}
LightSwitch.defaultProps = {
  element: document.getElementsByTagName("html")[0]
};

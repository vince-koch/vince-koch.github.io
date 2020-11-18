import React from "../../web_modules/react.js";
import {NavLink} from "../../web_modules/react-router-dom.js";
export class SidebarLink extends React.Component {
  render() {
    const text = !this.props.isCollapsed ? " " + this.props.label : null;
    return /* @__PURE__ */ React.createElement(NavLink, {
      exact: true,
      to: this.props.route,
      className: "nav-link",
      activeClassName: "active",
      title: this.props.label
    }, this.props.icon({}), text);
  }
}
SidebarLink.defaultProps = {
  route: ""
};

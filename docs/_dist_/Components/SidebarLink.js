import React from "../../web_modules/react.js";
import {Nav} from "../../web_modules/react-bootstrap.js";
export class SidebarLink extends React.Component {
  render() {
    const text = !this.props.isCollapsed ? " " + this.props.label : null;
    return /* @__PURE__ */ React.createElement(Nav.Link, {
      onClick: () => this.props.onClick(),
      title: this.props.label
    }, this.props.icon({}), text);
  }
}

import "./Styles/Colors.css.proxy.js";
import "./Styles/Themes.css.proxy.js";
import "../../web_modules/bootstrap/dist/css/bootstrap.min.css.proxy.js";
import "../../web_modules/react-toastify/dist/ReactToastify.css.proxy.js";
import "./Styles/App.css.proxy.js";
import React from "../../web_modules/react.js";
import {ToastContainer} from "../../web_modules/react-toastify.js";
import {Router, Route, Switch} from "../../web_modules/react-router-dom.js";
import {Nav, Navbar} from "../../web_modules/react-bootstrap.js";
import {FaBars, FaBootstrap, FaFontAwesome, FaSnowflake, FaGithub} from "../../web_modules/react-icons/fa.js";
import {FaHome, FaCode, FaStickyNote} from "../../web_modules/react-icons/fa.js";
import {LightSwitch as LightSwitch2} from "./LightSwitch.js";
import {ShellPage, ShellBody, ShellHeader, ShellSidebar, ShellContent} from "./Shell.js";
import {SidebarLink as SidebarLink2} from "./SidebarLink.js";
import {NavigationService as NavigationService2} from "../Services/NavigationService.js";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.navigationService = new NavigationService2();
    this.state = {
      isSidebarCollapsed: false
    };
  }
  render() {
    const routes = this.navigationService.getRoutes().map((route, index) => /* @__PURE__ */ React.createElement(Route, {
      key: "route" + index,
      exact: route.exact,
      path: route.path,
      component: route.component
    }));
    return /* @__PURE__ */ React.createElement(Router, {
      history: this.navigationService.getHistory()
    }, /* @__PURE__ */ React.createElement(ShellPage, null, /* @__PURE__ */ React.createElement(ShellHeader, null, /* @__PURE__ */ React.createElement(Navbar, {
      expand: "lg"
    }, /* @__PURE__ */ React.createElement(FaBars, {
      title: "Toggle Sidebar",
      style: {cursor: "pointer"},
      onClick: () => this.setState({isSidebarCollapsed: !this.state.isSidebarCollapsed})
    }), /* @__PURE__ */ React.createElement(Navbar.Brand, {
      style: {marginLeft: "20px"},
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      src: "/favicon.ico",
      width: "32",
      height: "32"
    }), "\xA0", /* @__PURE__ */ React.createElement("span", {
      style: {color: "var(--default-text-color)"}
    }, "Cookie's Crumbs")), /* @__PURE__ */ React.createElement(Nav, {
      className: "mr-auto"
    }), /* @__PURE__ */ React.createElement(Nav.Link, {
      href: "https://react-bootstrap.github.io/",
      title: "Bootstrap"
    }, /* @__PURE__ */ React.createElement(FaBootstrap, null)), /* @__PURE__ */ React.createElement(Nav.Link, {
      href: "https://fontawesome.com/icons?d=gallery",
      title: "FontAwesome"
    }, /* @__PURE__ */ React.createElement(FaFontAwesome, null)), /* @__PURE__ */ React.createElement(Nav.Link, {
      href: "https://www.snowpack.dev/",
      title: "SnowPack"
    }, /* @__PURE__ */ React.createElement(FaSnowflake, null)), /* @__PURE__ */ React.createElement(Nav.Link, {
      href: "https://github.com/vince-koch/vince-koch.github.io",
      title: "Github"
    }, /* @__PURE__ */ React.createElement(FaGithub, null)), /* @__PURE__ */ React.createElement(LightSwitch2, null))), /* @__PURE__ */ React.createElement(ShellBody, null, /* @__PURE__ */ React.createElement(ShellSidebar, null, /* @__PURE__ */ React.createElement(SidebarLink2, {
      icon: FaHome,
      label: "Home",
      isCollapsed: this.state.isSidebarCollapsed,
      onClick: () => this.navigationService.goToDashboard()
    }), /* @__PURE__ */ React.createElement(SidebarLink2, {
      icon: FaCode,
      label: "Stylecop Lookup",
      isCollapsed: this.state.isSidebarCollapsed,
      onClick: () => this.navigationService.goToStyleCopLookup()
    }), /* @__PURE__ */ React.createElement(SidebarLink2, {
      icon: FaStickyNote,
      label: "Notes",
      isCollapsed: this.state.isSidebarCollapsed,
      onClick: () => this.navigationService.goToNotes()
    })), /* @__PURE__ */ React.createElement(ShellContent, null, /* @__PURE__ */ React.createElement(ToastContainer, null), /* @__PURE__ */ React.createElement(Switch, null, routes)))));
  }
}

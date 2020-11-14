import React from "../../web_modules/react.js";
import {Row, Col, Button} from "../../web_modules/react-bootstrap.js";
import {FaAmbulance} from "../../web_modules/react-icons/fa.js";
import {NavigationService as NavigationService2} from "../Services/NavigationService.js";
export class NotFound extends React.Component {
  constructor() {
    super(...arguments);
    this.navigationService = new NavigationService2();
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      style: {textAlign: "center"}
    }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      md: 3
    }, /* @__PURE__ */ React.createElement(FaAmbulance, {
      size: 128
    })), /* @__PURE__ */ React.createElement(Col, null, /* @__PURE__ */ React.createElement("h3", null, "A 404 error has occurred!"), /* @__PURE__ */ React.createElement(Button, {
      onClick: () => this.navigationService.goToDashboard()
    }, "Back to Dashboard"))));
  }
}

import React from "../../web_modules/react.js";
import {Form} from "../../web_modules/react-bootstrap.js";
import {toast} from "../../web_modules/react-toastify.js";
import {FaCode, FaCopy} from "../../web_modules/react-icons/fa.js";
import {Utilities as Utilities2} from "../Utilities/Utilities.js";
import {StyleCopRules as StyleCopRules2} from "../Services/StyleCopRules.js";
import {ShellTitle} from "./Shell.js";
export class StyleCopLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      matchingRules: []
    };
  }
  render() {
    const matchingItems = this.state.matchingRules.map((rule) => /* @__PURE__ */ React.createElement("li", {
      key: rule.substring(0, 6)
    }, /* @__PURE__ */ React.createElement("a", {
      href: "#",
      onClick: () => this.handleCopyClick(rule),
      title: "Click to copy " + rule.substring(0, 6)
    }, /* @__PURE__ */ React.createElement(FaCopy, null), "\xA0", rule)));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ShellTitle, null, /* @__PURE__ */ React.createElement(FaCode, null), " StyleCop Lookup"), /* @__PURE__ */ React.createElement(Form.Group, {
      controlId: "ruleLookupTextBox"
    }, /* @__PURE__ */ React.createElement(Form.Label, null, "Rule Lookup"), /* @__PURE__ */ React.createElement(Form.Control, {
      type: "text",
      placeholder: "Rule ID or Description",
      value: this.state.searchText,
      onChange: (e) => this.handleSearchTextChange(e.target.value)
    }), /* @__PURE__ */ React.createElement(Form.Text, null, this.state.matchingRules.length, " matching rules")), /* @__PURE__ */ React.createElement("ul", null, matchingItems));
  }
  handleSearchTextChange(searchText) {
    const matchingRules = StyleCopRules2.allRules.filter((item) => item.toUpperCase().indexOf(searchText.toUpperCase()) > -1);
    this.setState({
      searchText,
      matchingRules
    });
  }
  handleCopyClick(rule) {
    const attributeText = StyleCopRules2.getAttributeText(rule);
    if (!Utilities2.types.isText(attributeText)) {
      toast.error("Unable to find attribute for rule");
      return;
    }
    Utilities2.clipboard.copyToClipboard(attributeText);
    toast.success("Your attribute has been copied to the clipboard");
  }
}

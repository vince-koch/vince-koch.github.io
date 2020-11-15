import React from "../../web_modules/react.js";
import {Row, Col, Card} from "../../web_modules/react-bootstrap.js";
import {FaStickyNote} from "../../web_modules/react-icons/fa.js";
import MarkdownIt from "../../web_modules/markdown-it.js";
import {ShellTitle} from "./Shell.js";
import {Utilities as Utilities2} from "../Utilities/Utilities.js";
export class Notes extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      indexLines: [],
      selectedFilename: null,
      selectedExtension: null,
      selectedContents: null
    };
  }
  async componentDidMount() {
    const response = await fetch(Notes.rootPath + ".index.txt");
    const text = await response.text();
    const lines = Utilities2.strings.splitIntoLines(text);
    this.setState({indexLines: lines});
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ShellTitle, null, /* @__PURE__ */ React.createElement(FaStickyNote, null), " Notes"), /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      md: "4"
    }, /* @__PURE__ */ React.createElement("ul", {
      style: {fontSize: "smaller"}
    }, this.state.indexLines.map((item) => /* @__PURE__ */ React.createElement("li", {
      key: item
    }, /* @__PURE__ */ React.createElement("a", {
      href: "#",
      onClick: () => this.handleFileClick(item)
    }, this.getFilenameWithoutExtension(item)))))), /* @__PURE__ */ React.createElement(Col, {
      md: "8"
    }, this.renderViewer())));
  }
  renderViewer() {
    if (Utilities2.types.isText(this.state.selectedFilename) && Utilities2.types.isText(this.state.selectedExtension) && Utilities2.types.isText(this.state.selectedContents)) {
      return /* @__PURE__ */ React.createElement(Card, {
        bg: "primary"
      }, /* @__PURE__ */ React.createElement(Card.Header, null, this.state.selectedFilename), /* @__PURE__ */ React.createElement(Card.Body, null, /* @__PURE__ */ React.createElement("div", {
        dangerouslySetInnerHTML: {__html: this.state.selectedContents}
      })));
    }
    return null;
  }
  getFilenameWithoutExtension(path) {
    const index = path.lastIndexOf(".");
    const filename = index > 0 ? path.substring(0, index) : path;
    return filename;
  }
  getFilenameExtension(path) {
    const index = path.lastIndexOf(".");
    const filename = index > -1 ? path.substring(index) : null;
    return filename;
  }
  async handleFileClick(filename) {
    const ext = this.getFilenameExtension(filename);
    const response = await fetch(Notes.rootPath + filename);
    const text = await response.text();
    const contents = this.renderContents(ext, text);
    this.setState({
      selectedFilename: filename,
      selectedExtension: ext,
      selectedContents: contents
    });
  }
  renderContents(ext, text) {
    switch (ext?.toLowerCase()) {
      case ".md":
        return new MarkdownIt().render(text);
      case ".nuspec":
      case ".stylecop":
      case ".xml":
        return "<pre>" + this.htmlEntities(text) + "<pre>";
      case ".htm":
      case "html":
      case ".txt":
      default:
        return text;
    }
  }
  htmlEntities(text) {
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}
Notes.rootPath = "/notes/";

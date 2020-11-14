export class ElementUtil {
  static getAllChildren(element) {
    var array = [];
    var children = element.getElementsByTagName("*");
    for (var i = 0; i < children.length; i++) {
      array[i] = children[i];
    }
    return array;
  }
  static isInputElement(element) {
    const NodeNodeType = 1;
    const AttributeNodeType = 2;
    const TextNodeType = 3;
    const CommentNodeType = 8;
    return element.nodeType === NodeNodeType && element.tagName.toLowerCase() == "input";
  }
  static getAbsoluteOffset(element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {left: rect.left + scrollLeft, top: rect.top + scrollTop};
  }
}

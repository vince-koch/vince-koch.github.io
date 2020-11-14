export class ClipboardUtil {
  static copyToClipboard(text) {
    const element = document.createElement("textarea");
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.position = "absolute";
    element.style.left = "-9999px";
    document.body.appendChild(element);
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : null;
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }
}

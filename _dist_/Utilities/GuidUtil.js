import {Utilities as Utilities2} from "./Utilities.js";
export class GuidUtil {
  static generate() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0;
      let v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  static empty() {
    return "00000000-0000-0000-0000-000000000000";
  }
  static encodeForHeader(value) {
    return '"gv:' + Utilities2.strings.replace(value, "-", "") + '"';
  }
}

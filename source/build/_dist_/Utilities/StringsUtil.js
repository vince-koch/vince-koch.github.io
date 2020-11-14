import * as lodash from "../../web_modules/lodash.js";
import {Utilities as Utilities2} from "./Utilities.js";
export class StringsUtil {
  static isNullOrWhiteSpace(value) {
    return !Utilities2.types.isSomething(value) || !Utilities2.types.isText(value);
  }
  static replace(value, search, replace) {
    if (StringsUtil.isNullOrWhiteSpace(value)) {
      return value;
    }
    return value.replace(new RegExp(search, "g"), replace);
  }
  static makeBreakable(value) {
    var result = !StringsUtil.isNullOrWhiteSpace(value) ? value.replace(/([\W_\s])/g, "$1" + StringsUtil._invisibleWhiteSpace) : "";
    return result;
  }
  static filterNonDigits(value) {
    if (StringsUtil.isNullOrWhiteSpace(value)) {
      return "";
    }
    return value.replace(/\D/g, "");
  }
  static concat(delimiter, ...args) {
    let values = lodash.filter(args, (arg) => Utilities2.types.isSomething(arg));
    let text = values.join(delimiter);
    return text;
  }
  static sanitize(value) {
    return value.replace(StringsUtil._encodedLeftSingleQuote, "'").replace(StringsUtil._encodedRightSingleQuote, "'").replace(StringsUtil._encodedLeftDoubleQuote, '"').replace(StringsUtil._encodedRightDoubleQuote, '"');
  }
}
StringsUtil._invisibleWhiteSpace = String.fromCharCode(8203);
StringsUtil._encodedLeftSingleQuote = "\u2018";
StringsUtil._encodedRightSingleQuote = "\u2019";
StringsUtil._encodedLeftDoubleQuote = "\u201C";
StringsUtil._encodedRightDoubleQuote = "\u201D";

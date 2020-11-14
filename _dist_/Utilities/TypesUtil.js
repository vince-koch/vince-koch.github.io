import * as lodash from "../../web_modules/lodash-es.js";
export class TypesUtil {
  static isText(value) {
    return lodash.isString(value) && value.trim().length !== 0;
  }
  static isObject(value) {
    return lodash.isObject(value) && value !== null;
  }
  static isNumber(value) {
    return lodash.isNumber(value) && lodash.isFinite(value) && !lodash.isNaN(value);
  }
  static isNonNegativeNumber(value) {
    return TypesUtil.isNumber(value) && value >= 0;
  }
  static isPositiveNumber(value) {
    return TypesUtil.isNumber(value) && value > 0;
  }
  static isInteger(value) {
    return TypesUtil.isNumber(value) && value === (value | 0);
  }
  static isPositiveInteger(value) {
    return TypesUtil.isInteger(value) && value > 0;
  }
  static isSomething(value) {
    return !lodash.isUndefined(value) && !lodash.isNull(value);
  }
  static isDate(value) {
    return value instanceof Date && !lodash.isNaN(value.valueOf());
  }
  static isArray(value) {
    return !lodash.isUndefined(value) && !lodash.isNull(value) && lodash.isArray(value);
  }
  static isFunction(value) {
    return TypesUtil.isSomething(value) && lodash.isFunction(value);
  }
  static undefinedToNull(source) {
    return TypesUtil.isSomething(source) ? source : null;
  }
  static getType(value) {
    var result = {}.toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    return result;
  }
}

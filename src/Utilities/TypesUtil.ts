import * as lodash from "lodash-es";
import { Utilities } from "./Utilities";

export class TypesUtil
{
    public static isText(value: any): boolean
    {
        return lodash.isString(value)
            && (<string>value).trim().length !== 0;
    }

    public static isObject(value: any): boolean
    {
        return lodash.isObject(value)
            && value !== null;
    }

    public static isNumber(value: any): boolean
    {
        return lodash.isNumber(value)
            && lodash.isFinite(value)
            && !lodash.isNaN(value);
    }

    public static isNonNegativeNumber(value: any): boolean
    {
        return TypesUtil.isNumber(value)
            && value >= 0;
    }

    public static isPositiveNumber(value: any): boolean
    {
        return TypesUtil.isNumber(value)
            && value > 0;
    }

    public static isInteger(value: any): boolean
    {
        return TypesUtil.isNumber(value)
            && (value === (value | 0));
    }

    public static isPositiveInteger(value: any): boolean
    {
        return TypesUtil.isInteger(value)
            && value > 0;
    }

    public static isSomething(value: any): boolean
    {
        return !lodash.isUndefined(value)
            && !lodash.isNull(value);
    }

    public static isDate(value: any): boolean
    {
        return value instanceof Date
            && !lodash.isNaN(value.valueOf());
    }

    public static isArray(value: any): boolean
    {
        return !lodash.isUndefined(value)
            && !lodash.isNull(value)
            && lodash.isArray(value);
    }

    public static isFunction(value: any): boolean
    {
        return TypesUtil.isSomething(value)
            && lodash.isFunction(value);
    }

    public static undefinedToNull(source: any): any
    {
        return TypesUtil.isSomething(source)
            ? source
            : null;
    }

    // See "Fixing the JavaScript typeof operator.htm" in the docs folder for more information on this function
    public static getType(value: any): string | null
    {
        var result = ({}).toString.call(value).match(/\s([a-zA-Z]+)/)![1].toLowerCase();
        return result;
    }
}
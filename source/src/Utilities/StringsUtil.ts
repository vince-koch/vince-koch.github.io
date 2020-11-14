import * as lodash from "lodash";
import { Utilities } from "./Utilities";

export class StringsUtil
{
    private static _invisibleWhiteSpace: string = String.fromCharCode(8203);

    private static _encodedLeftSingleQuote: string = '\u2018';
    private static _encodedRightSingleQuote: string = '\u2019';
    private static _encodedLeftDoubleQuote: string = '\u201c';
    private static _encodedRightDoubleQuote: string = '\u201d';

    public static isNullOrWhiteSpace(value: string): boolean
    {
        return !Utilities.types.isSomething(value) || !Utilities.types.isText(value);
    }

    public static replace(value: string, search: string, replace: string): string
    {
        if (StringsUtil.isNullOrWhiteSpace(value))
        {
            return value;
        }

        return value.replace(new RegExp(search, "g"), replace);
    }

    // this method will replace all non-alphanumeric characters with an invisible
    // whitespace character so that it has a good breaking point for word wrap
    public static makeBreakable(value: string): string
    {
        var result = !StringsUtil.isNullOrWhiteSpace(value)
            ? value.replace(/([\W_\s])/g, "$1" + StringsUtil._invisibleWhiteSpace)
            : "";

        return result;
    }

    public static filterNonDigits(value: any): string
    {
        if (StringsUtil.isNullOrWhiteSpace(value))
        {
            return "";
        }

        return value.replace(/\D/g, "");
    }

    public static concat(delimiter: string, ...args: any[]): string
    {
        let values = lodash.filter(args, (arg: any) => Utilities.types.isSomething(arg));
        let text: string = values.join(delimiter);
        return text;
    }

    public static sanitize(value: string): string
    {
        return value.replace(StringsUtil._encodedLeftSingleQuote, "'")
            .replace(StringsUtil._encodedRightSingleQuote, "'")
            .replace(StringsUtil._encodedLeftDoubleQuote, "\"")
            .replace(StringsUtil._encodedRightDoubleQuote, "\"");
    }
}
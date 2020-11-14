import { Utilities } from "./Utilities";

export class GuidUtil
{
    // this function was found at the URL below, and is not 100% guaranteed to create unique UUIDs
    // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    public static generate(): string
    {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c)
        {
            /* tslint:disable:no-bitwise */
            let r = Math.random() * 16 | 0;
            let v = c === "x" ? r : (r & 0x3 | 0x8);
            /* tslint:enable:no-bitwise */

            return v.toString(16);
        });
    }

    public static empty(): string
    {
        return "00000000-0000-0000-0000-000000000000";
    }

    public static encodeForHeader(value: string)
    {
        return "\"gv:" + Utilities.strings.replace(value, "-", "") + "\"";
    }
}
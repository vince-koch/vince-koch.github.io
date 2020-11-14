import { ClipboardUtil } from "./ClipboardUtil";
import { ElementUtil } from "./ElementUtil";
import { GuidUtil } from "./GuidUtil";
import { StringsUtil } from "./StringsUtil";
import { TestingUtil } from "./TestingUtil";
import { TypesUtil } from "./TypesUtil";

export class Utilities
{
    public static clipboard = ClipboardUtil;
    public static element = ElementUtil;
    public static guid = GuidUtil;
    public static strings = StringsUtil;
    public static testing = TestingUtil;
    public static types = TypesUtil;
}
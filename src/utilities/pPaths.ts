export class Paths
{
    public static getFilenameWithoutExtension(path: string): string
    {
        const index = path.lastIndexOf(".");
        const filename = index > 0
            ? path.substring(0, index)
            : path;

        return filename;
    }

    public static getFilenameExtension(path: string): string | null
    {
        const index = path.lastIndexOf(".");
        const filename = index > -1
            ? path.substring(index)
            : null;

        return filename;
    }
}
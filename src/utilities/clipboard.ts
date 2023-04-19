export class clipboard {
    public static async copy(text: string): Promise<any> {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        }
        else {
            return document.execCommand('copy', true, text);
        }
    }
}
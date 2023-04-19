export class Strings {
    public static decodeBase64(base64: string): string {
        const text = atob(base64)
        return text
    }

    public static encodeBase64(text: string): string {
        const base64 = btoa(text)
        return base64
    }

    public static prettifyJson(sourceJson: string, spacingLevel: number = 2): string {
        const parsed = JSON.parse(sourceJson)
        const pretty = JSON.stringify(parsed, null, spacingLevel)
        return pretty
    }

    public static prettifyXml(xml: string, indent: string = '\t'): string {
        let formatted = ''
        let currentIndent = '';

        xml.split(/>\s*</).forEach(function(node) {
            if (node.match( /^\/\w/ )) {
                // decrease indent by one 'tab'
                currentIndent = currentIndent.substring(indent.length);
            }

            formatted += currentIndent + '<' + node + '>\r\n';

            if (node.match( /^<?\w[^>]*[^\/]$/ )) {
                // increase indent
                currentIndent += indent;
            }
        });

        return formatted.substring(1, formatted.length-3);
    }

    public static replaceHtmlEntities(text: string): string
    {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }    
}
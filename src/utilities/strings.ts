export function decodeBase64(base64: string) {
    const text = atob(base64)
    return text
}

export function encodeBase64(text: string) {
    const base64 = btoa(text)
    return base64
}

export function prettifyJson(sourceJson: string, spacingLevel: number = 2) {
    const parsed = JSON.parse(sourceJson)
    const pretty = JSON.stringify(parsed, null, spacingLevel)
    return pretty
}

// export function prettifyXml(sourceXml: string) {
//     const xmlDoc = new DOMParser().parseFromString(sourceXml, 'application/xml')
//     const xsltDoc = new DOMParser().parseFromString([
//         // describes how we want to modify the XML - indent everything
//         '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
//         '  <xsl:strip-space elements="*"/>',
//         '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
//         '    <xsl:value-of select="normalize-space(.)"/>',
//         '  </xsl:template>',
//         '  <xsl:template match="node()|@*">',
//         '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
//         '  </xsl:template>',
//         '  <xsl:output indent="yes"/>',
//         '</xsl:stylesheet>',
//     ].join('\n'), 'application/xml')
//
//     const xsltProcessor = new XSLTProcessor()
//     xsltProcessor.importStylesheet(xsltDoc)
//
//     const resultDoc = xsltProcessor.transformToDocument(xmlDoc)
//     const resultXml = new XMLSerializer().serializeToString(resultDoc)
//     return resultXml
// }

export function prettifyXml(xml: string, indent: string = '\t') { // tab = optional indent value, default is tab (\t)
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
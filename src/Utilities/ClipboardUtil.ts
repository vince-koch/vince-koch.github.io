import { Utilities } from "./Utilities";

export class ClipboardUtil
{
    public static copyToClipboard(text: string): void
    {
        // create a new textarea element to perform the interaction
        const element = document.createElement("textarea");
        element.value = text;
        element.setAttribute("readonly", "");
        element.style.position = "absolute";
        element.style.left = "-9999px";
    
        // append the new element to the DOM
        document.body.appendChild(element);

        // get the current user selection (if any)
        const selected = document.getSelection()!.rangeCount > 0
            ? document.getSelection()!.getRangeAt(0)
            : null;

        // select the text and copy to clipboard
        element.select();
        document.execCommand('copy');
    
        // remove the element from the DOM
        document.body.removeChild(element);
        
        // restore the user selection
        if (selected)
        {
            document.getSelection()!.removeAllRanges();
            document.getSelection()!.addRange(selected);
        }
    }
}
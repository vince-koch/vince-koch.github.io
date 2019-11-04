function getCleanRuleId()
{
    // get the rule id input element element
    var ruleIdElement = document.getElementById("ruleId");
    
    // make sure its upper case
    var ruleId = ruleIdElement.value.toUpperCase();
    
    // remove dash
    var indexOfDash = ruleId.indexOf("-");
    if (indexOfDash > -1)
    {
        ruleId = ruleId.slice(0, indexOfDash) + ruleId.slice(indexOfDash + 1, ruleId.length);
    }
    
    // prefix it with SA if they didn't
    if (!ruleId.startsWith("SA"))
    {
        ruleId = "SA" + ruleId;
    }
    
    // update the input element with the cleaned id
    ruleIdElement.value = ruleId;
    
    return ruleId;
}

function searchForRule()
{
    // get our elements
	var ruleAttributeDiv = document.getElementById("ruleAttributeDiv");
    var ruleAttributeTextBox = document.getElementById("ruleAttributeTextBox");
	var ruleAttributeCopyButton = document.getElementById("ruleAttributeCopyButton");
	
	// blank out result
    ruleAttributeTextBox.innerText = "";
	addClass(ruleAttributeDiv, "hidden");
	addClass(ruleAttributeCopyButton, "hidden");

    var ruleId = getCleanRuleId();
    
    // get all the rules and then find the appropriate one
    var rules = Array.from(document.getElementsByTagName("li"));
    var filteredRules = rules.filter(r => r.innerText.startsWith(ruleId + ":"));
    if (filteredRules.length == 0)
    {
        ruleAttributeTextBox.value = "Unable to locate rule " + ruleId;
		removeClass(ruleAttributeDiv, "hidden");
        return;
    }
    else if (filteredRules.length > 1)
    {
        ruleAttributeTextBox.value = "Multiple matches found for rule " + ruleId;
		removeClass(ruleAttributeDiv, "hidden");
        return;
    }
    
    // get the attribute text from the prior <p> tag
    var elementLi = filteredRules[0];
    var elementUl = elementLi.parentElement;
    var elementP = elementUl.previousElementSibling;
    var attributeText = elementP.innerText;

    // assign the text to our tag
    ruleAttributeTextBox.value = attributeText.substring(0, attributeText.indexOf(","))
        + ", \"" + elementLi.innerText + "\""
        + ", Justification = \"Reviewed\")]";

	// make it visible
    removeClass(ruleAttributeDiv, "hidden");
	removeClass(ruleAttributeCopyButton, "hidden");
	
	// copy the text
    copyTextToClipboard(ruleAttributeTextBox.value);
}

function copyRuleText()
{
	var ruleAttributeTextBox = document.getElementById("ruleAttributeTextBox");
	copyTextToClipboard(ruleAttributeTextBox.value);
}

function addClass(element, className)
{
	if (!element.classList.contains(className))
	{
		element.classList.add(className);
	}
}

function removeClass(element, className)
{
	if (element.classList.contains(className))
	{
		element.classList.remove(className);
	}
}

function handleRuleIdKeyUp(e)
{
    if (e.keyCode == 13)
    {
        searchForRule();
        e.preventDefault();
    }
}

window.onload = function()
{
    document.getElementById("ruleId").focus();
}
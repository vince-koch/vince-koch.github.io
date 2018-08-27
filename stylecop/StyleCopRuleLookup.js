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
    // blank out result
    var ruleAttributeElement = document.getElementById("ruleAttribute");
    ruleAttributeElement.innerText = "";

    var ruleId = getCleanRuleId();
    
    // get all the rules and then find the appropriate one
    var rules = Array.from(document.getElementsByTagName("li"));
    var filteredRules = rules.filter(r => r.innerText.startsWith(ruleId + ":"));
    if (filteredRules.length == 0)
    {
        ruleAttributeElement.innerText = "Unable to locate rule " + ruleId;
        return;
    }
    else if (filteredRules.length > 1)
    {
        ruleAttributeElement.innerText = "Multiple matches found for rule " + ruleId;
    }
    
    // get the attribute text from the prior <p> tag
    var elementLi = filteredRules[0];
    var elementUl = elementLi.parentElement;
    var elementP = elementUl.previousElementSibling;
    var attributeText = elementP.innerText;

    // assign the text to our tag
    ruleAttributeElement.innerText = attributeText.substring(0, attributeText.indexOf(","))
        + ", \"" + elementLi.innerText + "\""
        + ", Justification = \"Reviewed\")]";
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
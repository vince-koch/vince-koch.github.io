import React from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaCode, FaCopy } from "react-icons/fa";
import { Utilities } from "./../Utilities/Utilities";
import { StyleCopRules } from "./../Services/StyleCopRules";
import { ShellTitle } from "./Shell";

export interface IStyleCopLookupState
{
    searchText: string;
    matchingRules: string[];
}

export class StyleCopLookup extends React.Component<any, IStyleCopLookupState>
{
    public constructor(props: any)
    {
        super(props);

        this.state = {
            searchText: "",
            matchingRules: []
        } as IStyleCopLookupState;
    }

    public render(): JSX.Element
    {
        const matchingItems = this.state.matchingRules.map(rule => 
            <li key={rule.substring(0, 6)}>
                <a href="#" onClick={() => this.handleCopyClick(rule)} title={"Click to copy " + rule.substring(0, 6)}>
                    <FaCopy/>&nbsp;{rule}
                </a>
            </li>);

        return (
            <>
                <ShellTitle><FaCode /> StyleCop Lookup</ShellTitle>

                <Form.Group controlId="ruleLookupTextBox">
                    <Form.Label>Rule Lookup</Form.Label>
                    <Form.Control type="text" placeholder="Rule ID or Description" 
                        value={this.state.searchText}
                        onChange={e => this.handleSearchTextChange(e.target.value)} />
                    <Form.Text>{this.state.matchingRules.length} matching rules</Form.Text>
                </Form.Group>

                <ul>
                    {matchingItems}
                </ul>
            </>);
    }

    private handleSearchTextChange(searchText: string): void
    {
        const matchingRules = StyleCopRules.allRules
            .filter(item => item.toUpperCase().indexOf(searchText.toUpperCase()) > -1);

        this.setState({
            searchText: searchText,
            matchingRules: matchingRules
        });
    }

    private handleCopyClick(rule: string): void
    {
        const attributeText = StyleCopRules.getAttributeText(rule);
        if (!Utilities.types.isText(attributeText))
        {
            toast.error("Unable to find attribute for rule");
            return;
        }
        
        Utilities.clipboard.copyToClipboard(attributeText!);
        toast.success("Your attribute has been copied to the clipboard");        
    }
}
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaStickyNote } from "react-icons/fa";
import MarkdownIt from "markdown-it";
import { ShellTitle } from "./Shell";
import { Utilities } from "./../Utilities/Utilities";

export interface INotesState
{
    indexLines: string[];
    selectedFilename: string | null;
    selectedExtension: string | null;
    selectedContents: string | null;
}

export class Notes extends React.Component
{
    // this points to a folder in public/ (and later build/)
    private static readonly rootPath: string = "/notes/";

    public state: INotesState = {
        indexLines: [],
        selectedFilename: null,
        selectedExtension: null,
        selectedContents: null
    };

    public async componentDidMount(): Promise<void>
    {
        const response = await fetch(Notes.rootPath + ".index.txt");
        const text = await response.text();
        const lines = Utilities.strings.splitIntoLines(text);
        this.setState({ indexLines: lines });
    }

    public render(): JSX.Element
    {
        return (
            <>
                <ShellTitle><FaStickyNote/> Notes</ShellTitle>

                <Row>
                    <Col md="4">
                        <ul>
                            {this.state.indexLines.map(item =>
                                <li key={item}>
                                    <a href="#" onClick={() => this.handleFileClick(item)}>
                                        {this.getFilenameWithoutExtension(item)}
                                    </a>
                                </li>)}
                        </ul>
                    </Col>
                    <Col md="8">
                        {this.renderViewer()}
                    </Col>
                </Row>
            </>);
    }

    private renderViewer(): JSX.Element | null
    {
        if (Utilities.types.isText(this.state.selectedFilename)
            && Utilities.types.isText(this.state.selectedExtension)
            && Utilities.types.isText(this.state.selectedContents))
        {
            return (
                <Card>
                    <Card.Header>{this.state.selectedFilename}</Card.Header>  
                    <Card.Body>
                        <div dangerouslySetInnerHTML={{ __html: this.state.selectedContents! }}></div>
                    </Card.Body>
                </Card>
            );
        }
        
        return null;
    }

    private getFilenameWithoutExtension(path: string): string
    {
        const index = path.lastIndexOf(".");
        const filename = index > 0
            ? path.substring(0, index)
            : path;

        return filename;
    }

    private getFilenameExtension(path: string): string | null
    {
        const index = path.lastIndexOf(".");
        const filename = index > -1
            ? path.substring(index)
            : null;

        return filename;
    }

    private async handleFileClick(filename: string): Promise<void>
    {
        const ext = this.getFilenameExtension(filename);
        const response = await fetch(Notes.rootPath + filename);
        const text = await response.text();        
        const contents = this.renderContents(ext, text);

        this.setState({
            selectedFilename: filename,
            selectedExtension: ext,
            selectedContents: contents
        });
    }

    private renderContents(ext: string | null, text: string): string
    {
        switch (ext?.toLowerCase())
        {
            case ".md":
                return new MarkdownIt().render(text);

            case ".nuspec":
            case ".stylecop":
            case ".xml":
                return "<pre>" + this.htmlEntities(text) + "<pre>";

            case ".htm":
            case "html":
            case ".txt":
            default:
                return text;
        }
    }

    private htmlEntities(text: string): string
    {
        return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
}
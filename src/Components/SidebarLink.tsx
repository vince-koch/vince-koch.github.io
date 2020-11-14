import React from "react";
import { IconType } from "react-icons";
import { Nav } from "react-bootstrap";

export interface ISidebarLinkProperties
{
    isCollapsed: boolean;
    icon: IconType;
    label: string;
    onClick: () => void;
}

export class SidebarLink extends React.Component<ISidebarLinkProperties>
{
    public render(): JSX.Element
    {
        const text = !this.props.isCollapsed
            ? " " + this.props.label
            : null;

        return (
            <Nav.Link onClick={() => this.props.onClick()} title={this.props.label}>
                {this.props.icon({ })}{text}
            </Nav.Link>);
    }
}
import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

export interface ISidebarLinkProperties
{
    route: string;
    isCollapsed: boolean;
    icon: IconType;
    label: string;
    onClick: () => void;
}

export class SidebarLink extends React.Component<ISidebarLinkProperties>
{
    public static defaultProps = {
        route: ""
    };

    public render(): JSX.Element
    {
        const text = !this.props.isCollapsed
            ? " " + this.props.label
            : null;

        return (
            <NavLink exact={true} to={this.props.route}
                className="nav-link" activeClassName="active"
                title={this.props.label}>
                {this.props.icon({ })}{text}
            </NavLink>);
    }
}
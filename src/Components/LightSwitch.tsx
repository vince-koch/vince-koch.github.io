import React from "react";
import { Nav } from "react-bootstrap";
import { IconType } from "react-icons";
import { FaSun, FaMoon } from "react-icons/fa";

export interface ILightSwitchProperties
{
    element: HTMLElement;
}

export class LightSwitch extends React.Component<ILightSwitchProperties>
{
    public static defaultProps = {
        element: document.getElementsByTagName("html")[0]
    };

    public constructor(props: any)
    {
        super(props);

        this.props.element.dataset.theme = this.getTheme();
    }

    public render(): JSX.Element
    {
        const icon = this.getIconType();

        return (
            <Nav.Link title="Toggle Lights" onClick={() => this.toggleTheme()}>
                {icon({})}
            </Nav.Link>);
    }

    private getIconType(): IconType
    {
        const icon = this.getTheme() == "light"
            ? FaSun
            : FaMoon;

        return icon;
    }

    private toggleTheme(): void
    {
        const newTheme = this.getTheme() == "light"
            ? "dark"
            : "light";

        this.setTheme(newTheme);
    }

    private setTheme(theme: string): void
    {
        this.props.element.dataset.theme = theme;
        localStorage.setItem("theme", theme);
        this.forceUpdate();
    }  
    
    private getTheme(): string
    {
        const currentTheme = localStorage.getItem("theme") 
            ? localStorage.getItem("theme")
            : "light";

        return currentTheme as string;
    }
}
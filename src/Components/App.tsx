import "./Styles/Colors.css";
import "./Styles/Themes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./Styles/App.css";

import React from "react";
import { ToastContainer } from "react-toastify";
import { Router, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FaBars, FaBootstrap, FaFontAwesome, FaSnowflake, FaGithub } from "react-icons/fa";
import { FaHome, FaCode, FaStickyNote } from "react-icons/fa";
import { LightSwitch } from "./LightSwitch";
import { ShellPage, ShellBody, ShellHeader, ShellSidebar, ShellContent } from "./Shell";
import { SidebarLink } from "./SidebarLink";
import { NavigationService } from "./../Services/NavigationService";

export interface IAppState
{
    isSidebarCollapsed: boolean;
}

export class App extends React.Component<any, IAppState>
{
    private navigationService: NavigationService = new NavigationService();

    public constructor(props: any)
    {
        super(props);
        this.state = {
            isSidebarCollapsed: false
        } as IAppState;
    }

    public render(): JSX.Element
    {
        const routes = this.navigationService.getRoutes()
            .map((route, index) => <Route key={"route" + index}
                exact={route.exact}
                path={route.path} component={route.component} />);

        return (
            
                <Router history={this.navigationService.getHistory()}>
                    <ShellPage>
                        <ShellHeader>
                            <Navbar expand="lg">
                                <FaBars title="Toggle Sidebar"
                                    style={{ cursor: "pointer" }} 
                                    onClick={() => this.setState({ isSidebarCollapsed: !this.state.isSidebarCollapsed })} />

                                <Navbar.Brand style={{ marginLeft: "20px" }} href="#">
                                    <img src="/favicon.ico" width="32" height="32" />&nbsp;
                                    <span style={{ color: "var(--default-text-color)"}}>Cookie's Crumbs</span>                            
                                </Navbar.Brand>
                                <Nav className="mr-auto">                        
                                </Nav>
                                <Nav.Link href="https://react-bootstrap.github.io/" title="Bootstrap"><FaBootstrap /></Nav.Link>
                                <Nav.Link href="https://fontawesome.com/icons?d=gallery" title="FontAwesome"><FaFontAwesome /></Nav.Link>
                                <Nav.Link href="https://www.snowpack.dev/" title="SnowPack"><FaSnowflake /></Nav.Link>
                                <Nav.Link href="https://github.com/vince-koch/vince-koch.github.io" title="Github"><FaGithub /></Nav.Link>
                                <LightSwitch />
                            </Navbar>
                        </ShellHeader>
                        
                        <ShellBody>
                            <ShellSidebar>
                                <SidebarLink icon={FaHome} label="Home"
                                    isCollapsed={this.state.isSidebarCollapsed}
                                    onClick={() => this.navigationService.goToDashboard()} />
                                <SidebarLink icon={FaCode} label="Stylecop Lookup"
                                    isCollapsed={this.state.isSidebarCollapsed}
                                    onClick={() => this.navigationService.goToStyleCopLookup()} />
                                <SidebarLink icon={FaStickyNote} label="Notes"
                                    isCollapsed={this.state.isSidebarCollapsed}
                                    onClick={() => this.navigationService.goToNotes()} />
                            </ShellSidebar>

                            <ShellContent>
                                    <ToastContainer />
                                    <Switch>
                                        {routes}
                                    </Switch>
                                </ShellContent>
                        </ShellBody>
                    </ShellPage>
                </Router>
            );
    }
}
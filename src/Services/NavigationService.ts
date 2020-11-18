import { createBrowserHistory, History } from "history";
import { RouteProps } from "react-router-dom";
import { Home } from "./../Components/Home";
import { StyleCopLookup } from "./../Components/StyleCopLookup";
import { Notes } from "./../Components/Notes";
import { NotFound } from "./../Components/NotFound";
import { Utilities } from "./../Utilities/Utilities";

export class NavigationService
{
    private static readonly history: History = createBrowserHistory();

    private static readonly routes: RouteProps[] = [
        { path: "/", exact: true, component: Home },
        { path: "/stylecop", exact: true, component: StyleCopLookup },
        { path: "/notes", exact: true, component: Notes },
        { path: "*", component: NotFound }
    ];

    public getHistory(): History
    {
        return NavigationService.history;
    }

    public getRoutes(): RouteProps[]
    {
        return NavigationService.routes;
    }

    public getCurrentLocation(): string
    {
        return window.location.pathname;
    }

    public getActiveRoute(): string | undefined
    {
        const location = this.getCurrentLocation();

        const activeRoute = NavigationService.routes
            .map(route => route.path?.toString()?.toLocaleLowerCase())
            .filter(routePath => Utilities.types.isText(routePath))
            .find(routePath => routePath!.toLowerCase() === location.toLowerCase())
            
        return activeRoute;
    }

    public goToDashboard(): void
    {
        this.navigateTo("/");
    }

    public goToStyleCopLookup(ruleId?: string): void
    {
        const route = Utilities.types.isText(ruleId)
            ? "/stylecop/" + ruleId
            : "/stylecop";
        
        this.navigateTo(route);
    }

    public goToNotes(): void
    {
        this.navigateTo("/notes");
    }

    private navigateTo(route: string): void
    {
        console.debug("navigating to ", route);
        NavigationService.history.push(route);
    }
}
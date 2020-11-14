import { createBrowserHistory, History } from "history";
import { RouteProps } from "react-router-dom";
import { Home } from "./../Components/Home";
import { StyleCopLookup } from "./../Components/StyleCopLookup";
import { NotFound } from "./../Components/NotFound";
import { Utilities } from "./../Utilities/Utilities";

export class NavigationService
{
    private static readonly history: History = createBrowserHistory();

    private static readonly routes: RouteProps[] = [
        { path: "/", exact: true, component: Home },
        { path: "/stylecop", exact: true, component: StyleCopLookup },
        { path: "*", component: NotFound }
    ];

    public getHistory(): History
    {
        return NavigationService.history;
    }

    public getRoutes()
    {
        return NavigationService.routes;
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

    private navigateTo(route: string): void
    {
        console.info("navigating to ", route);
        NavigationService.history.push(route);
    }
}
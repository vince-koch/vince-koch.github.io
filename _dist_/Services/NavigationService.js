import {createBrowserHistory} from "../../web_modules/history.js";
import {Home as Home2} from "../Components/Home.js";
import {StyleCopLookup as StyleCopLookup2} from "../Components/StyleCopLookup.js";
import {Notes as Notes2} from "../Components/Notes.js";
import {NotFound as NotFound2} from "../Components/NotFound.js";
import {Utilities as Utilities2} from "../Utilities/Utilities.js";
export class NavigationService {
  getHistory() {
    return NavigationService.history;
  }
  getRoutes() {
    return NavigationService.routes;
  }
  getCurrentLocation() {
    return window.location.pathname;
  }
  getActiveRoute() {
    const location = this.getCurrentLocation();
    const activeRoute = NavigationService.routes.map((route) => route.path?.toString()?.toLocaleLowerCase()).filter((routePath) => Utilities2.types.isText(routePath)).find((routePath) => routePath.toLowerCase() === location.toLowerCase());
    return activeRoute;
  }
  goToDashboard() {
    this.navigateTo("/");
  }
  goToStyleCopLookup(ruleId) {
    const route = Utilities2.types.isText(ruleId) ? "/stylecop/" + ruleId : "/stylecop";
    this.navigateTo(route);
  }
  goToNotes() {
    this.navigateTo("/notes");
  }
  navigateTo(route) {
    console.debug("navigating to ", route);
    NavigationService.history.push(route);
  }
}
NavigationService.history = createBrowserHistory();
NavigationService.routes = [
  {path: "/", exact: true, component: Home2},
  {path: "/stylecop", exact: true, component: StyleCopLookup2},
  {path: "/notes", exact: true, component: Notes2},
  {path: "*", component: NotFound2}
];

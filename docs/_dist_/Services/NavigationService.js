import {createBrowserHistory} from "../../web_modules/history.js";
import {Home as Home2} from "../Components/Home.js";
import {StyleCopLookup as StyleCopLookup2} from "../Components/StyleCopLookup.js";
import {NotFound as NotFound2} from "../Components/NotFound.js";
import {Utilities as Utilities2} from "../Utilities/Utilities.js";
export class NavigationService {
  getHistory() {
    return NavigationService.history;
  }
  getRoutes() {
    return NavigationService.routes;
  }
  goToDashboard() {
    this.navigateTo("/");
  }
  goToStyleCopLookup(ruleId) {
    const route = Utilities2.types.isText(ruleId) ? "/stylecop/" + ruleId : "/stylecop";
    this.navigateTo(route);
  }
  navigateTo(route) {
    console.info("navigating to ", route);
    NavigationService.history.push(route);
  }
}
NavigationService.history = createBrowserHistory();
NavigationService.routes = [
  {path: "/", exact: true, component: Home2},
  {path: "/stylecop", exact: true, component: StyleCopLookup2},
  {path: "*", component: NotFound2}
];

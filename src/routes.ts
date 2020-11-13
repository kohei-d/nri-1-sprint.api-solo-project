import {PrefController} from "./controller/PrefController";

export const Routes = [{
    method: "get",
    route: "/prefs",
    controller: PrefController,
    action: "all"
}, {
    method: "post",
    route: "/prefs",
    controller: PrefController,
    action: "save"
}, {
    method: "patch",
    route: "/prefs/",
    controller: PrefController,
    action: "update"
}, {
    method: "delete",
    route: "/prefs/:id",
    controller: PrefController,
    action: "remove"
}];
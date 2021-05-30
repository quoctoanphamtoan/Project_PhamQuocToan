import Home from "./containers/home";
import HomeInput from "./containers/homeInput";

export const routes = [
  {
    exact: true,
    path: "/home",
    component: Home,
  },
  {
    exact: false,
    path: "/add",
    component: HomeInput,
  },
];

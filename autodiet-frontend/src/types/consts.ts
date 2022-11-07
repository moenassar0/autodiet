import { faRightFromBracket, faChartLine, faDrumstickBite, faPlateWheat, faUser } from '@fortawesome/free-solid-svg-icons'

export const userNavbarLinks = [
    { path: "/user/home", icon: faUser, title: "Users" },
    { path: "/user/profile", icon: faPlateWheat, title: "Meals" },
    { path: "/user/meals", icon: faDrumstickBite, title: "Foods" },
    { path: "/user/foods", icon: faChartLine, title: "Graphs" },
    { path: "/user/weight", icon: faRightFromBracket, title: "Logout" },
];

//Consts for admin pages
export const adminNavbarLinks = [
    { path: "/admin/users", icon: faUser, title: "Users" },
    { path: "/admin/meals", icon: faPlateWheat, title: "Meals" },
    { path: "/admin/food", icon: faDrumstickBite, title: "Foods" },
    { path: "/admin/users", icon: faChartLine, title: "Graphs" },
    { path: "/admin/users", icon: faRightFromBracket, title: "Logout" },
];

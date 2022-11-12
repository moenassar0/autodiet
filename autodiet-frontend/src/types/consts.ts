import { faCalendarDays, faMessage, faRightFromBracket, faChartLine, faDrumstickBite, faPlateWheat, faUser } from '@fortawesome/free-solid-svg-icons'

export const userNavbarLinks = [
    { path: "/user/home", icon: faCalendarDays, title: "Mealplan" },
    { path: "/user/profile", icon: faUser, title: "Profile" },
    { path: "/user/meals", icon: faPlateWheat, title: "Meals" },
    { path: "/user/foods", icon: faDrumstickBite, title: "Foods" },
    { path: "/user/weight", icon: faChartLine, title: "Weight" },
    { path: "/user/chat", icon: faMessage, title: "Chat" },
    { path: "/user/logout", icon: faRightFromBracket, title: "Logout" },
];

//Consts for admin pages
export const adminNavbarLinks = [
    { path: "/admin/users", icon: faUser, title: "Users" },
    { path: "/admin/meals", icon: faPlateWheat, title: "Meals" },
    { path: "/admin/foods", icon: faDrumstickBite, title: "Foods" },
    { path: "/admin/users", icon: faChartLine, title: "Graphs" },
    { path: "/admin/chat", icon: faMessage, title: "Chat Requests" },
    { path: "/admin/users", icon: faRightFromBracket, title: "Logout" },
];

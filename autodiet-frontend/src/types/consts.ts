import { faNoteSticky, faBookOpen, faCalendarDays, faMessage, faRightFromBracket, faChartLine, faDrumstickBite, faPlateWheat, faUser } from '@fortawesome/free-solid-svg-icons'

export const userNavbarLinks = [
    { path: "/user/home", icon: faCalendarDays, title: "Mealplan" },
    { path: "/user/profile", icon: faUser, title: "Profile" },
    { path: "/user/meals", icon: faPlateWheat, title: "Meals" },
    { path: "/user/foods", icon: faDrumstickBite, title: "Foods" },
    { path: "/user/weight", icon: faChartLine, title: "Weight" },
    { path: "/user/dietlog", icon: faNoteSticky, title: "Diet Log" },
    { path: "/user/chat", icon: faMessage, title: "Chat" },
    { path: "/user/logout", icon: faRightFromBracket, title: "Logout" },
];

//Consts for admin pages
export const adminNavbarLinks = [
    { path: "/admin/users", icon: faUser, title: "Users" },
    { path: "/admin/meals", icon: faPlateWheat, title: "Meals" },
    { path: "/admin/foods", icon: faDrumstickBite, title: "Foods" },
    { path: "/admin/recipes", icon: faBookOpen, title: "Recipes" },
    { path: "/admin/chat", icon: faMessage, title: "Chat Requests" },
    { path: "/admin/logout", icon: faRightFromBracket, title: "Logout" },
];

//Profile page
export const goalButtonValues = ["Lose Weight", "Maintain", "Gain Muscle"];
export const bfButtonValues = ["Lean", "Medium", "High"];
export const sexButtonValues = ["Male", "Female"];
export const activityOptions = ["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extremely Active"];

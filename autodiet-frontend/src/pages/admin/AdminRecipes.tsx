import { useEffect, useState } from "react"
import { getMeals } from "../../api/services/Meals"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { AdminBase } from "../../layouts/AdminBase"
import { adminNavbarLinks } from "../../types/consts"

export const AdminRecipes = () => {
    
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals();
    }, [])

    const fetchMeals = async () => {
        setMeals((await getMeals())?.response.meals);
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={adminNavbarLinks}/>
            <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                <AdminTopNavbar title={"Recipes"} username="Admin">
                </AdminTopNavbar>
                <div className="h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                    {meals?.map((meal: any) => (<div>{meal.title}</div>))}
                </div>
            </div>
        </div>
    )
}
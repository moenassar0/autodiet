import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { getFoods } from "../../api/services/Foods";
import { LineChart } from "../../components/charts/LineChart";
import Meal from "../../components/user/Meal";
import { Button } from "../../components/utility/Button";
import { useTheme } from "../../context/ThemeContext";
import { MealInterface, Recipe } from "../../types/types";
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
export const Landing = () => {
    const [inView, setInView] = useState(false);
    const animRef = useRef<HTMLDivElement>(null);
    const {themeType, setCurrentTheme} = useTheme();
    const [recipes, setRecipes] = useState([]);

    const styles = {
        active: " bg-slate-400",
        meal: "bg-[rgba(31,31,31)] flex w-full h-10 border-b border-slate-100 dark:border-slate-700 py-2 pl-8 text-ad-golden font-medium text-sm cursor-pointer "
    }

    const navigate = useNavigate();

    const goToRegisterPage = async () => {
        navigate("/register");
    }
    
    console.log(inView, "sad")
    useEffect(() => {
        setCurrentTheme('dark');
        document.documentElement.classList.add("dark");
        const obs = new IntersectionObserver(entries => {
            const entry = entries[0];
            setInView(entry.isIntersecting);
        })
        if(animRef.current) 
        obs.observe(animRef.current);
    }, [])

    const meal: MealInterface = {
        id: 1,
        title: "Overnight Oats",
        protein: 30,
        carbohydrate: 60,
        fat: 20,
        picture_url: "../oat.png",
        calories: 500,
        type: "Snack",
        multiplier: 1
      }
    useEffect(() => {
        fetchFoods();
    }, [])

    const fetchFoods = async () => {
        setRecipes((await getFoods())?.response.foods);
    }

    return(
        <>
        <div className="flex flex-col w-full h-screen">
            <div className="flex items-center bg-black h-14 w-full p-2 z-20">
                <div className="w-26 h-12"><img className="w-full h-full" src="../AutoDiet-1.png"></img></div>
                <div className="flex h-full w-1/2 grow justify-end">
                    <button className="w-24 h-full bg-ad-golden font-medium text-black rounded-full hover:opacity-80">LOGIN</button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-5/6 grow relative">
                <div className="grad"></div>
                <div className="flex flex-col flex-wrap items-center justify-center w-[400px] sm:w-[600px] h-full relative z-10 gap-3">
                    <span className="stroke-black text-4xl sm:text-5xl text-ad-golden text-center font-medium text-stroke-black">AUTOMATE YOUR DIET</span>
                    <span className="text-xl text-white text-center">You don't have to waste your time, we will do all the work for you. With a click of a button generate your daily mealplan.</span>
                    <button onClick={goToRegisterPage} className="border-2 border-black bg-ad-golden rounded-full w-32 h-10">Get started</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full h-screen bg-ad-lightgrey">
        <div className="text-4xl text-ad-golden text-center font-medium w-full h-10 mt-1 z-20 text-stroke-black">FEATURES</div>
            <div ref={animRef} className="overflow-hidden flex flex-wrap w-full h-full items-center justify-center gap-2 z-20">
                <div className={(inView ? " animated" : "") + " flex flex-col w-[300px] bg-[rgba(31,31,31)]/[.65] h-5/6 p-2"}>
                    <div className="flex w-full h-3/6">
                    <div className="flex flex-wrap overflow-auto content-start h-full w-full rounded bg-white drop-shadow">
                    {recipes?.length > 0 
                                ? recipes.map((recipe: Recipe) => (
                                    <div key={recipe.id} className={styles.meal}>
                                        {recipe.title}
                                    </div>
                                )): ""}
                    </div></div>
                    <div className="w-full h-3/6 flex items-center justify-center text-lg text-ad-golden">
                        Diet logger and recipe lists
                    </div>
                </div>
                <div className={(inView ? " fadeAbove" : "") + " flex flex-col w-[300px] bg-[rgba(31,31,31)]/[.65] h-5/6"}>
                    <div className="flex w-full h-3/6"><Meal meal={meal}></Meal></div>
                    <div className="w-full h-3/6 flex items-center justify-center text-lg text-ad-golden">
                        Auto-generated meals
                    </div>
                </div>
                <div className={(inView ? " fadeInRight" : "") + " flex flex-col w-[300px] bg-[rgba(31,31,31)]/[.65] rounded-lg h-5/6 px-4 py-2"}>
                    <div className="flex w-full h-3/6 items-center"><LineChart styling="w-full" labels={["11", "12", "13","14","15"]} dataFields={[50, 49, 46.8, 45, 46]}></LineChart></div>
                    <div className="w-full h-3/6 flex items-center justify-center text-lg text-ad-golden">
                        Weight Logger
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

/*

        <section className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
            
            <div className="h-screen w-full snap-start">
                
            </div>
            <div className="flex justify-center items-center w-full h-screen snap-start">
                <div ref={animRef} className="flex justify-center gap-2 ">
                    <div className={(inView ? " animated" : "") + " "}></div>
                    <div className="animated"></div>
                    <div className="animated"></div>
                </div>
            </div>
        </section>


*/



/*
        <div className="flex flex-col w-full h-screen">
            <div className="flex items-center bg-black h-14 w-full p-2">
                <div className="w-26 h-12"><img className="w-full h-full" src="../AutoDiet-1.png"></img></div>
                <div className="flex h-full w-1/2 grow justify-end">
                    <button className="w-24 h-full bg-ad-golden font-medium text-black rounded-full hover:opacity-80">LOGIN</button>
                </div>
            </div>
            <div className="flex w-full h-5/6 grow grad">

            </div>
        </div>


*/
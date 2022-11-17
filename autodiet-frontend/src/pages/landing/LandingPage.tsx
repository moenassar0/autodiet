import { useState, useEffect, useRef } from "react";
import { Navbar } from "../../components/landing/Navbar"
import Meal from "../../components/user/Meal";
import { MealInterface } from "../../types/types";

export const LandingPage = () => {
  
    const [inView, setInView] = useState(false);
    const animRef = useRef<HTMLDivElement>(null);
    console.log(inView, "sad")
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            const entry = entries[0];
            setInView(entry.isIntersecting);
        })
        if(animRef.current) 
        obs.observe(animRef.current);
    }, [])

    const navigation: Array<Object> = [
        { name: 'Why use AutoDiet?', href: '#' },
        { name: 'Why use AutoDiet?', href: '#' },
        { name: 'Why use AutoDiet?', href: '#' }
      ]

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

    return(
      <section className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className='translucent-overlay'></div>
        <section className=" h-screen snap-start">
          <Navbar />
          <div className='navbar-line'><hr></hr></div>

          <div className='hero-content'>
            <span className='hero-title'>AUTOMATE YOUR DIET</span>
            <span className='hero-subtitle'>You don't have to waste your time.<br></br>We'll do the work for you.</span>
            <span className='hero-description'>With a click of a button, generate the next<br />week’s entire meal plan and grocesseies list:</span>
            <img className='hero-image' src="../../hero.png"></img>
          </div>
        </section>
        
        <div className="flex h-96 w-full mt-[23px] snap-center bg-admin-dark-background">
          
          <div ref={animRef} className="flex flex-col w-full items-center justify-center gap-2 px-4">
            <div className={(inView ? " animated" : "") + " flex items-center justify-center text-ad-golden h-10 w-full font-medium text-3xl mt-3"}>Why Use AutoDiet?</div>
            <div className="flex flex-col w-full h-full">
              <div className={(inView ? " animated" : "") + " flex flex-col items-center justify-center text-ad-golden text-xl"}>
                <span>Immediately figure out the next week's meal plan and macros depending on your goals.</span>
                <span>Meals are auto-generated and the recipes are gived to you with a click of a button!</span>
                <span>Check out the example meals shown below</span>
              </div>
              <div className={(inView ? " animated" : "") + " flex w-full justify-center h-full"}>
                <div className="w-full flex justify-center sm:w-1/2"><Meal meal={meal}></Meal></div>
                <div className="w-full flex justify-center sm:w-1/2"><Meal meal={meal}></Meal></div>
                <div className="w-full flex justify-center sm:w-1/2"><Meal meal={meal}></Meal></div>
              </div>
            </div>
            <div className="animated"></div>
            <div className="animated"></div>
          </div>
        </div>
        <div className="flex h-96 w-full snap-center bg-ad-golden">
          
          <div ref={animRef} className="flex flex-col w-full items-center justify-center gap-2 px-4">
            <div className={(inView ? " animated" : "") + " flex items-center justify-center text-black h-10 w-full font-medium text-3xl mt-3"}>Why Use AutoDiet?</div>
            <div className="flex flex-col w-full h-full">
              <div className={(inView ? " animated" : "") + " flex flex-col items-center justify-center text-black text-xl"}>
                <span>Immediately figure out the next week's meal plan and macros depending on your goals.</span>
                <span>Meals are auto-generated and the recipes are gived to you with a click of a button!</span>
                <span>Check out the example meals shown below</span>
              </div>
              <div className={(inView ? " animated" : "") + " flex w-full justify-center h-full"}>
                <div className="w-full flex justify-center sm:w-1/2"><Meal meal={meal}></Meal></div>
                <div className="w-full flex justify-center sm:w-1/2"><Meal meal={meal}></Meal></div>
                <div className="w-full flex justify-center sm:w-1/2"><Meal meal={meal}></Meal></div>
              </div>
            </div>
            <div className="animated"></div>
            <div className="animated"></div>
          </div>
        </div>
      </section>
    )
}
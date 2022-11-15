import { Navbar } from "../../components/landing/Navbar"
import { SlideThroughMeals } from "../../components/landing/SlideThroughMeals"

export const LandingPage = () => {
    
    const navigation: Array<Object> = [
        { name: 'Why use AutoDiet?', href: '#' },
        { name: 'Why use AutoDiet?', href: '#' },
        { name: 'Why use AutoDiet?', href: '#' }
      ]

    return(
        <div className="relative min-h-screen h-auto w-full">
          <div className='translucent-overlay'></div>
          <Navbar />
          <div className='navbar-line'><hr></hr></div>
          <div className='hero-content'>
            <span className='hero-title'>AUTOMATE YOUR DIET</span>
            <span className='hero-subtitle'>You don't have to waste your time.<br></br>We'll do the work for you.</span>
            <span className='hero-description'>With a click of a button, generate the next<br />week’s entire meal plan and grocesseies list:</span>
            <div className="overflow-hidden relative flex h-screen items-center">
              <SlideThroughMeals />
            </div>
            <img className='hero-image' src="../../hero.png"></img>
          </div>   
        </div>
    )
}
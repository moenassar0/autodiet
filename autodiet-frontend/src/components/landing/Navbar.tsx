import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
export const Navbar = () => {
    return(
        <div className='navbar'>
        <Link to="/"><div className='navbar-icon'></div></Link>
        <ul>
          <li>Why use AutoDiet?</li>
          <li>Features</li>
          <li>Features</li>
        </ul>
        <div className='w-1/4 flex flex-col items-center justify-center'>
          <Link to="/register">
            <button className='w-20 h-10 rounded bg-ad-golden'>Sign Up</button>
          </Link>
          <Link to="/login">
            <div className='w-full text-center h-full'>Already have an account? Login.</div>
          </Link>
        </div>
      </div>
    )
}
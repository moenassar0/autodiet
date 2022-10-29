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
        <div className='navbar-register'>
          <button>Sign Up</button>
          <Link to="/login">
            <span>Already have an account? Login.</span>
          </Link>
        </div>
      </div>
    )
}
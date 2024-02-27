import './header.css'
import { Outlet, Link, NavLink } from "react-router-dom";


function header() { 
  return (    
    <>    
    <header className='haeder-sticky'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
          <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">          
              <Link className="navbar-brand" to="/"><span>Coin</span>Toss</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">  
                <li class="nav-item">
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}>Home</NavLink>                    
                  </li>                
                 
                  <li class="nav-item">                    
                    <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}>About Us</NavLink>
                  </li>
                  <li class="nav-item">
                     <NavLink to="/tournament" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}>Tournament</NavLink>                   
                  </li>                     
                  {/* <li class="nav-item">
                    <NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}>Sign up</NavLink>                   
                  </li>   */}
                  {/* <li class="nav-item">
                    <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}>Contact Us</NavLink>                     
                    </li> */}
                   <li class="nav-item">
                    <NavLink to="/profile" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}>My Profile</NavLink>                     
                    </li>
                  <li class="nav-item">
                    <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "nav-link active" : "nav-link"}>Logout</NavLink>                     
                  </li>  
                </ul>                
              </div>           
          </nav>         
          </div>
        </div>
      </div>
    </header>
   
    </>
  )
}
export default header

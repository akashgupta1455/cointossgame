import './footer.css'
import { Outlet, Link } from "react-router-dom";

function footer() {
  return (
    <>
      <footer className='footer-bg py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-12'>
              <div className='footer-column-one'>
                <a class="navbar-brand" href="#"><span>Coin</span>Toss</a>
                <p>Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod.</p>                
              </div>
            </div>
            <div className='col-md-2 col-12'>
              <div className='footer-column-two'>
                <h2>QUICK LINK</h2>
                <ul>                
                  <li><Link to="/">Home</Link></li>  
                  <li><Link to="/register">Sign up</Link> </li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/">Tournament</Link> </li>                  
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className='col-md-2 col-12'>
              <div className='footer-column-two'>
                <h2>SUPPORTS</h2>
                <ul>
                  <li><a href='#'>Privacy Policy</a></li>  
                  <li><a href='#'>Terms & Condition</a></li>  
                  <li><Link to="/contact">Help & Support</Link></li>                                              
                </ul>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='footer-column-three'>    
                <h2>NEWSLETTER</h2>            
                <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>   
                <div class="offCanvas__newsletter-form">
                <input type="email" name="EMAIL" placeholder="Get News &amp; Updates" required=""/>
                <button type="submit">Send</button>
            </div>             
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className='copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='copytext text-center'>
                <p>COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY <Link to="/">CoinToss</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default footer

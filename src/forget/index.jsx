import './forget.css'
import { Outlet, Link } from "react-router-dom";
import Header from '../include/header';
import Footer from '../include/footer';

function forget() {
  return (
    <>
     <Header/>
      <section className='login-bg py-5'>
        <div className='container h-100'>
          <div className='row align-items-center justify-content-center h-100'>
           
            <div className='col-lg-6 col-sm-6 col-12'>
              <div className='login-controls'>
              <div className='login-form'>
                <h2>Forget Password</h2>
                <p>Enter the email address associated with your account and we'll send you a link to reset your password</p>
                <div className='form-group mb-3'>
                  <label>Email address <span>*</span></label>
                  <input type="text" className='form-control'/>
                </div>               
              </div>             
              <div className='row mt-5'>
                <div className='login-btn'>
                  <button type='button' className='btn'> Continue</button>
                </div>
              </div>
              <div class="or">
                  <p>OR</p>
              </div>
                <div class="account">
                  <p>Don't have an account? <Link to="/register">Sign Up Here</Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
export default forget

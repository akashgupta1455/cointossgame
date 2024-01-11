import './register.css'
import { Outlet, Link } from "react-router-dom";
import Header from '../include/header';
import Footer from '../include/footer';

function register() {
  return (
    <>
    <Header/>
      <section className='login-bg py-5'>
        <div className='container h-100'>
          <div className='row align-items-center justify-content-center h-100'>
           
            <div className='col-lg-6 col-sm-6 col-12'>
              <div className='login-controls'>
              <div className='login-form'>
                <h2>Sign up</h2>
                <div className='form-group mb-3'>
                  <label>Email <span>*</span></label>
                  <input type="text" className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                  <label>Username<span>*</span></label>
                  <input type="text" className='form-control'/>
                </div>
                <div className='form-group mb-3'>
                  <label>Password <span>*</span></label>
                  <input type="password" className='form-control'/>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <div className='remtext'>
                    <label>
                     <input type='checkbox' className='formcheck'/> Remember me
                    </label>
                  </div>
                </div>
                <div className='col-md-6 col-12'>
                  <div className='lostlink'>
                  <Link to="/forget">Lost your password?</Link>
                  </div>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='login-btn'>
                  <button type='button' className='btn'> Login</button>
                </div>
              </div>

              <div class="or">
                                    <p>OR</p>
                                </div>

                                <div class="account">
                                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
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
export default register

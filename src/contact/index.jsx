import './contact.css'
import Header from '../include/header';
import Footer from '../include/footer';
import Abtbnr from './images/breadcrumb_img04.png';
import Abtcoin from './images/coin.png';

function contact() {
  return (
    <>
    <Header/>
    <section className='about-banner py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 col-12'>
            <div className='abtbner-text'>
              <h2><span>Contact</span> US</h2>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div className='abtbner-img breadcrumb-img-two text-center'>
              <img src={Abtbnr} className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className='py-5 background-bg'>
        <div className='container my-5'>
          <div className='row justify-content-center'>           
            <div className='col-md-7 col-12'>
              <div className='contact-form'>                
              <div class="contact-area">
                        <div class="contact-header">
                            <h3 class="sub-title">Need some help?</h3>
                            <h2 class="title">Get in Touch</h2>
                            <p>Whatever your question we are here to help</p>
                        </div>
                        <div class="contact-form-area">
                            <form class="contact-form">
                                <div class="row">
                                    <div class="col-lg-12 form-group">
                                        <label>Name<span>*</span></label>
                                        <input type="text" className='form-control' name="name"/>
                                    </div>
                                    <div class="col-lg-12 form-group">
                                        <label>Email<span>*</span></label>
                                        <input type="email" className='form-control' name="email"/>
                                    </div>
                                    <div class="col-lg-12 form-group">
                                        <label>Subject<span>*</span></label>
                                        <input type="text" className='form-control' name="subject"/>
                                    </div>
                                    <div class="col-lg-12 form-group">
                                        <label>Message<span>*</span></label>
                                        <textarea className='form-control' rows="4"></textarea>
                                    </div>
                                    <div class="col-lg-12 form-group text-center">                                       
                                        <div class="login-btn">
                                          <button type="button" class="btn">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
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
export default contact

import './about.css'
import Header from '../include/header';
import Footer from '../include/footer';
import Abtbnr from './images/breadcrumb_img04.png';
import Abtcoin from './images/coin.png';

function about() {
  return (
    <>
    <Header/>
    <section className='about-banner py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 col-12'>
            <div className='abtbner-text'>
              <h2><span>ABOUT</span> US</h2>
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
          <div className='row align-items-center'>
            <div className='col-md-6 col-12'>
              <div className='abtcoin'>
              <img src={Abtcoin} className='img-fluid'/>
              </div>
            </div>
            <div className='col-md-6 col-12'>
              <div className='abt-text'>
                <h4>ABOUT COINTOSS</h4>
                <h2><span>COINTOSS</span> THE BEST GAMING STUDIO FOR ALL GAMER.</h2>
                <p>It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.</p>
                <p>It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>     
    <Footer/>
    </>
  )
}
export default about

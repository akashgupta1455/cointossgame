import './home.css';
import Header from '../include/header';
import Footer from '../include/footer';
import coinone from './images/slider_shape01.png';
import cointwo from './images/slider_shape02.png';
import cointhree from './images/slider_shape03.png';
import coinfour from './images/slider_shape04.png';
import gameone from './images/01.png';
import gametwo from './images/02.png';
import gamethree from './images/03.png';

function home() {
  return (
    <>
    <Header/>
     <section className='banner-img py-5'>
     <div class="slider__shapes">
              <img src={coinone} width="35" alt=""/>
              <img src={cointwo} width="35" alt=""/>
              <img src={cointhree} width="33" alt=""/>
              <img src={coinfour} width="50" alt=""/>
              <img src={cointwo} width="35" alt=""/>
      </div>
        <div className='container h-100'>
          <div className='row h-100 align-items-center'>
            <div className='col-md-12 col-12'>
              <div className='bnr-text text-center'>             
                <h1>COINTOSS LIVE GAMING experience</h1>
                 <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p> 
                <div className='playbtn'>
                  <a className='btn tg-btn-1' href='#'><span>Play Now</span><svg preserveAspectRatio="none" viewBox="0 0 197 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="cls-1" fill-rule="evenodd" clip-rule="evenodd" d="M30.976 0.755987L0.75499 30.977L29.717 58.677H165.717L195.938 30.977L165.717 0.755987H30.976Z" stroke="white" stroke-width="1.5"></path>
                                <path class="cls-2" fill-rule="evenodd" clip-rule="evenodd" d="M166.712 2.01899L196.933 30.98L166.712 58.68L188.118 29.719L166.712 2.01899Z" fill="white"></path>
                                <path class="cls-2" fill-rule="evenodd" clip-rule="evenodd" d="M30.235 2.01899L0.0139923 30.977L30.235 58.677L8.82899 29.719L30.235 2.01899Z" fill="white"></path>
                            </svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section className='py-5 background-bg'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-12'>
            <div class="section-header">
                <h2 class="title">About <span>CoinToss</span></h2>
            </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-12'>
              <div className='game-box'>
                <img src={gameone}/>
                <h2 className='game-title'>Update Game</h2>
                <p>Donec ad diam amet. Potenti volutpat metus egestas, urna maecenas arcu mollis pellentesque maecenas nisl, eget morbi diamsus</p>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='game-box box-active'>
                <img src={gametwo}/>
                <h2 className='game-title'>Update Game</h2>
                <p>Donec ad diam amet. Potenti volutpat metus egestas, urna maecenas arcu mollis pellentesque maecenas nisl, eget morbi diamsus</p>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='game-box'>
                <img src={gamethree}/>
                <h2 className='game-title'>24/7 Support</h2>
                <p>Donec ad diam amet. Potenti volutpat metus egestas, urna maecenas arcu mollis pellentesque maecenas nisl, eget morbi diamsus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5 background-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
            <div class="section-header">
                <h2 class="title">How Can You <span>Play</span></h2>
            </div>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-12'>
            <div class="how-wrapper">
                <div class="how-item">
                    <div class="how-thumb">01</div>
                    <h5 class="title">Sign up</h5>
                </div>
                <div class="how-item">
                    <div class="how-thumb">02</div>
                    <h5 class="title">choose game</h5>
                </div>
                <div class="how-item">
                    <div class="how-thumb">03</div>
                    <h5 class="title">get bounses</h5>
                </div>
                <div class="how-item">
                    <div class="how-thumb">04</div>
                    <h5 class="title">withdraw</h5>
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
export default home

import './profile.css'
import { Outlet, Link } from "react-router-dom";
import Header from '../include/header';
import Footer from '../include/footer';
import Userimg from '../userprofile/images/user.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FlagIcon from '@mui/icons-material/Flag';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function profile() {
  return (
    <>
     <Header/>
        <section className='py-5 profile-bg'>
            <div className='container'>
             <div className='row'>
                <div className='col-md-12 col-12'>
                    <div className='profile-banner'>
                      <img src={Userimg} alt="user" />
                      <h2>Adam Smith</h2>
                    </div>
                </div>
              </div>
            </div>
      </section>
      <section className='py-5 black-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-12'>
              <div className='custom-tablist'>
              <Tabs
                    defaultActiveKey="overview"
                    id="uncontrolled-tab-example"
                    className="mb-4"
                  >
                    <Tab eventKey="overview" title="Overview">
                    <div className='overview-tab'>
                      <ul>
                        <li>
                          <div className='overview-flex'>
                            <div className='overview-icons'>
                            <EmojiEventsIcon />                            
                          </div>
                          <div className='overview-text'>
                            <h3>12</h3>
                            <p>Rank</p>
                          </div>
                          </div>
                        </li>
                         <li>
                          <div className='overview-flex'>
                            <div className='overview-icons'>
                            <MilitaryTechIcon />                            
                          </div>
                          <div className='overview-text'>
                            <h3>68%</h3>
                            <p>Winrate</p>
                          </div>
                          </div>
                        </li>
                          <li>
                          <div className='overview-flex'>
                            <div className='overview-icons'>
                            <EditCalendarIcon />                            
                          </div>
                          <div className='overview-text'>
                            <h3>20</h3>
                            <p>Total Events</p>
                          </div>
                          </div>
                        </li>
                          <li>
                          <div className='overview-flex'>
                            <div className='overview-icons'>
                            <EmojiEventsIcon />                            
                          </div>
                          <div className='overview-text'>
                            <h3>50</h3>
                            <p>Win</p>
                          </div>
                          </div>
                        </li>
                        <li>
                          <div className='overview-flex'>
                            <div className='overview-icons'>
                            <FlagIcon />                            
                          </div>
                          <div className='overview-text'>
                            <h3>10</h3>
                            <p>Loose</p>
                          </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className='row mt-5'>
                      <div className='col-md-6'>
                        <div className='balance-tab'>
                          <h3>Your Balance</h3>
                          <div className='row mt-4'>
                            <div className='col-md-6 col-12'>
                              <div className='allbalance'>
                                <h5>Total Balance</h5>
                                <h2> 500 INR</h2>
                              </div>                              
                            </div>
                             <div className='col-md-6 col-12'>
                               <div className='allbalance'>
                                <h5>Total Profit</h5>
                                <h2> 300 INR</h2>
                              </div>                              
                            </div>
                          </div>
                       </div>
                      </div>
                       <div className='col-md-6'>
                        <div className='balance-tab referral-system'>
                          <h3>Referral system</h3>
                          <div className='row mt-4'>
                            <div className='col-md-4 col-12'>
                              <div className='allbalance'>                               
                                <h2>12</h2>
                                <h5>Invited</h5>
                              </div>                              
                            </div>
                             <div className='col-md-4 col-12'>
                               <div className='allbalance'>
                                 <h2>21</h2>
                                <h5>Earned</h5>
                              </div>                              
                            </div>
                             <div className='col-md-4 col-12'>
                               <div className='allbalance'>
                                 <h2>20%</h2>
                                <h5>Your Fee</h5>
                              </div>                              
                            </div>
                          </div>
                          <div className='row mt-4'>
                            <div className='col-md-12 col-12'>
                              <div className='referrl-link'>                               
                                  <span>Referral Link</span>  
                                  <input type="text" className='form-control' value="cointossgame.online/referral?"/>
                                  <button type="button" className='btn'>Copy Link</button>                               
                              </div>
                            </div>
                          </div>
                       </div>
                      </div>
                    </div>
                    </Tab>                    
                    <Tab eventKey="account" title="My Account">
                    <div className='row myaccount'>
                      <div className='col-md-4 col-12'>
                        <div class="form-group mb-4">
                          <label>Full Name </label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div className='col-md-4 col-12'>
                        <div class="form-group mb-4">
                          <label>Email <span>*</span></label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>                      
                       <div className='col-md-4 col-12'>
                        <div class="form-group mb-4">
                          <label>Mobile No <span>*</span></label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                       <div className='col-md-4 col-12'>
                        <div class="form-group mb-4">
                          <label>Username <span>*</span></label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                       <div className='col-md-4 col-12'>
                        <div class="form-group mb-4">
                          <label>Password <span>*</span></label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div className='col-md-4 col-12'>
                        <div class="login-btn">
                           <label>&nbsp;</label>
                          <button type="button" class="btn">Submit</button>
                        </div>
                      </div>
                    </div>
                    
                     </Tab>
                     <Tab eventKey="wallet" title="My Wallet">
                    <div className='wallet-box'>
                      <div className='row'>
                      <div class="col-md-3 col-12">
                        <div class="allbalance wallet-balance">
                          <h5>Total Wallet Balance</h5>
                          <h2><AccountBalanceWalletIcon/> 500 INR</h2>
                        </div>
                      </div>
                      <div className='col-md-6 col-12'>
                        <div className='walllet-field'>
                          <div className='form-group'>
                            <label>Add Money to <span>Wallet<KeyboardArrowDownIcon/></span></label>
                            <input type="text" className='form-control'/>
                            </div>
                            <div className='rupee-btn'>
                              <button type='button' className='btn'><span>+</span><CurrencyRupeeIcon/>100</button>
                              <button type='button' className='btn'><span>+</span><CurrencyRupeeIcon/>200</button>
                              <button type='button' className='btn'><span>+</span><CurrencyRupeeIcon/>500</button>
                              <button type='button' className='btn'><span>+</span><CurrencyRupeeIcon/>1000</button>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 col-12'>
                          <div className='apply-btn'>                            
                            <button type='button' className='btn'>Proceed to Add</button>
                          </div>
                        </div>
                      </div>
                      </div>
                    </Tab>
                </Tabs>
                </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
export default profile

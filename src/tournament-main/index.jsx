import React from "react";
import './tournament-main.css'
import User from '../tournament-main/images/user.png'
import Head from '../tournament-main/images/head.png'



const MainGame =()=>{
    return(
        <>
            <div className="body-bg main_tournament">
                <div className="header-game">
                    <div className="game-user">
                        <img src={User} alt="userBG" />
                        <span>Akash 123</span>
                    </div>
                    <div className="wallet-bg">
                        <button type="button">250</button>
                    </div>
                </div>
                <div className="flooring-wrap">
                    <div className="floor-map">
                        <div className="flooring-coins">
                            <img src={Head} alt="coin" />
                            {/* <div className="coin-animate"></div> */}
                        </div>                  
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainGame
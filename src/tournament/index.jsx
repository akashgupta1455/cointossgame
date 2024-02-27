import React from "react";
import './tournament.css'
import User from '../tournament/images/user.png'
import Head from '../tournament/images/head.png'
import Minusbtn from '../tournament/images/minus-btn.png'
import Plusbtn from '../tournament/images/plus-btn.png'
import Nextbtn from '../tournament/images/next-btn.png'
import Sound from '../tournament/images/sound-on.png'
import Tail from '../tournament/images/tail.png'



const Tournament = () => {
    return (
        <>
            <div className="body-bg">
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
                            <img src={Head} alt="coin"/>
                        </div>
                        <div className="woodfloor">
                            <div className="left-btn">
                                <button type="button" className="sound">
                                    <img src={Sound} alt="Sound"/>
                                </button>
                                <button type="button" className="sound minus-btn">
                                    <img src={Minusbtn} alt="Minusbtn"/>
                                </button>
                            </div>
                            <div className="input-box">
                                <input type="text" value="120" className="form-control" readOnly/>
                            </div>
                            <div className="right-btn">
                                <button type="button" className="sound plus-btn">
                                    <img src={Plusbtn} alt="Plusbtn"/>
                                </button>
                                <button type="button" className="sound next-btn">
                                    <img src={Nextbtn} alt="Nextbtn"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="floor-select">
                        <div className="floor-wraping">
                            <div className="coin-wrap">
                                <h2>Head</h2>
                                <button className="btn">
                                    <img src={Head} alt="Head" />
                                </button>
                            </div>
                             <div className="coin-wrap">
                                <h2>Tail</h2>
                                <button className="btn">
                                    <img src={Tail} alt="Tail" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tournament;
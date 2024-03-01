import React from "react";
import './tournament.css'
import User from '../tournament/images/user.png'
import Head from '../tournament/images/head.png'
import Minusbtn from '../tournament/images/minus-btn.png'
import Plusbtn from '../tournament/images/plus-btn.png'
import Nextbtn from '../tournament/images/next-btn.png'
import Sound from '../tournament/images/sound-on.png'
import Tail from '../tournament/images/tail.png'
import Woodflooring from '../tournament/images/bottom-frame.png'
import CoinFrame from '../tournament/images/coin_frame.png'
import ScoreFrame from '../tournament/images/score_frame.png'
import { Link } from "react-router-dom";



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
                            <img src={Woodflooring} alt="wood-floor" className="wood-flooring"/>
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
                                <Link to="/tournament-main" className="sound next-btn">
                                    <img src={Nextbtn} alt="Nextbtn"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="floor-select">
                        <div className="floor-wraping">
                            <img src={CoinFrame} alt="CoinFrame"/>
                            <div className="coin-frame">
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
                    <div className="bet-history">
                        <img src={ScoreFrame} alt="ScoreFrame" className="ScoreFrame"/>
                        <div className="bet-wrap">
                            <div className="bet-assets">
                                <div className="bet-coin">
                                    <img src={Head} alt="head"/>
                                </div>
                                <div className="bet-game">
                                    <h4>10</h4>
                                </div>
                                <div className="bet-profit">
                                    <h4>20</h4>
                                </div>
                            </div>
                            <div className="bet-assets">
                                <div className="bet-coin">
                                    <img src={Tail} alt="head"/>
                                </div>
                                <div className="bet-game">
                                    <h4>10</h4>
                                </div>
                                <div className="bet-profit">
                                    <h4>20</h4>
                                </div>
                            </div>
                            <div className="bet-assets">
                                <div className="bet-coin">
                                    <img src={Head} alt="head"/>
                                </div>
                                <div className="bet-game">
                                    <h4>10</h4>
                                </div>
                                <div className="bet-profit">
                                    <h4>20</h4>
                                </div>
                            </div>
                            <div className="bet-assets">
                                <div className="bet-coin">
                                    <img src={Tail} alt="head"/>
                                </div>
                                <div className="bet-game">
                                    <h4>10</h4>
                                </div>
                                <div className="bet-profit">
                                    <h4>20</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tournament;
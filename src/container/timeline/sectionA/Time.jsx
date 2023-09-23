import React from 'react';
import Timer from '../../../components/timer/Timer';
import { chain, fire, bulb, man, circlel } from '../../../constant/Images';
import "./time.css"

const Time = () => {
return (
    <main>
        <section className='container'>
            <article className='row'>
                <div className="time__content">

                    <div className="time__text">
                    <div className="time__bulb">
                                <img src={bulb} alt="bulb" />
                            </div>
                        <div className="time__text-heading">

                            <div className="time__bulb-text">
                            <p>getlinked Tech</p>
                            </div>

                            <div className="row items__center">
                                <p>Hackathon 1.0</p>
                                <div className="time__chain-image">
                                    <img src={chain} alt="chain" />
                                </div>
                                <div className="time__fire-image">
                                    <img src={fire} alt="fire" />
                                </div>
                            </div>
                        </div>
                        <div className="time__text-info">
                                    <p>Participate in getlinked tech Hackathon 2023 stand 
                                        a chance to win a Big prize</p>
                        </div>
                        <div className="btn">
                            <button className='custom__button'>Register</button>
                        </div>

                        <div className="time__timer row text__white my-2">
                            <h1><Timer duration={5 * 24 * 60 * 60 * 1000}/></h1>
                        </div>

                    </div>
                </div>

                <div className="time__images">
                    <div className="time__circle">
                        <img src={circlel} alt="" />
                    </div>
                    <div className="time__man">
                        <img src={man} alt="man" />
                    </div>
                </div>

            </article>
        </section>
    </main>
)
}

export default Time

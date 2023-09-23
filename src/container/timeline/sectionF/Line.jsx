import React from 'react';
import Lines from '../../../components/lines/Lines';
import {timeLine, timeR} from "../../../constant/Data"
import "./line.css";

const Line = () => {
return (
<main>
    <section className='container'>
        <article className='line__container'>
            <div className="line__header">
                <p>Timeline</p>
            </div>
            <div className='line__text' >
            <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>

            <div className="row items__center items__start-sm py-3 my-2 ">
                <div className="col__1  pc__only-sm">
                    <div className="linetime__left">
                    {
                        timeLine.map( (x)=>{
                            const {title, text, date}=x
                            return(
                                <ul>
                                    <li className='time__title timeline__right'>{title}</li>
                                    <li className='timeline__right'>{text}</li>
                                    <li className='date timeline__right'>{date}</li>
                                </ul>
                            )
                        })
                    }
                    </div>
                </div>

                <div className="col__lines">
                    <Lines/>
                </div>
                <div className="col__1">
                <div className="linetime__left">
                    {
                        timeR.map( (x)=>{
                            const {title, text, date}=x
                            return(
                                <ul>
                                    <li className='time__title'>{title}</li>
                                    <li>{text}</li>
                                    <li className='date'>{date}</li>
                                </ul>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </article>
    </section>
</main>
)
}

export default Line

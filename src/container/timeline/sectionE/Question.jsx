import React from 'react';
import StarsP from '../../../components/starPurple/StarsP';
import SubHeading from '../../../components/subHeading/SubHeading';
import  Stars from "../../../components/star/Stars";
import { casual } from '../../../constant/Images';
import { faq } from '../../../constant/Data';
import "./question.css";

const Question = () => {
return (
<main>
    <section className='container'>
        <StarsP/>
        <article className='row question__container items__center justify__between columns__sm'>
            
            <div className="question__info">

                <div className="question__heading">
                    <SubHeading title=" Frequently Ask" text=" Question"/>
                </div>
                <div className="question__sub">
                    <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                </div>
                {
                    faq.map( (x, index)=>{
                        const {text}= x
                        return(
                            <ul key={index}>
                                <div className='row span'>
                                <li>{text}</li>
                                <p className='plus'>+</p>
                                </div>
                            </ul>
                        )
                    })
                }
            </div>

            <div className="question__image">
                <div className="question__position">
                    <StarsP/>
                </div>
                <div className="question__star">
                    <Stars/>
                </div>

                <div className="question__img">
                    <img src={casual} alt="" />
                </div>

            </div>
        </article>
            
    </section>
</main>
)
}

export default Question

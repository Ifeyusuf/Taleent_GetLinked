import React from 'react';
import { both, ellipsec, purpleCircle } from '../../../constant/Images';
import StarsP from '../../../components/starPurple/StarsP';
import SubHeading from '../../../components/subHeading/SubHeading';
import { criteria } from '../../../constant/Data';
import "./criteria.css";

const Criteria = () => {
return (
<main className='bg__criteria' >
            <div className="criteria__lens">
                <img src={purpleCircle} alt="" />
            </div>
    <section className='container' >
        <article className='row criteria__container items__center columns__sm' >

            <div className="criteria__image">
            <div className="criteria__starp">
                    <StarsP/>
                </div>
                
                <div className="criteria__img-circle">
                <img src={both} alt="" className='img' />
                <div className="criteria__ellipse">
                <img src={ellipsec} alt="" />
                </div>
                </div>

            </div>

            <div className="criteria__content">
                <SubHeading title="Judging Criteria" text="Key attributes" />
                <div className="criteria__info">
                    {
                        criteria.map( (x, index)=>{
                            const {text, title} = x;
                            return(
                                <ul key={index}>
                                    <li className='bg__color' >{title}</li>
                                    <li className='text__white2'>{text}</li>
                                </ul>
                            )
                        })
                    }
                    <div className="criteria__btn">
                        <button className='custom__button'>Read More</button>
                    </div>
                </div>
            </div>

        </article>
    </section>
</main>
)
}

export default Criteria

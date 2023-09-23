import React from 'react';
import SubHeading from '../../../components/subHeading/SubHeading';
import { starpu, star, lady, purpleCircle, ellipsec, lens } from '../../../constant/Images';
import "./guide.css";

const Guide = () => {
return (
<main className='bg__guide'>
    <div className="bg__guide-img">
        <img src={lens} alt="" />
    </div>
    <section className='container' >
        <article className='row giude__container columns__sm' >
            <div className="guide__text">
            <div className="guide__circle">
                <img src={purpleCircle} alt="" />
            </div>
                <div className="subheading__star row">
                    <SubHeading title="Rules and" text="Guidelines" />
                    <div className="guide__star">
                        <img src={starpu} alt="" />
                    </div>
                </div>

                <div className="guide__info">
                    <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>
                        <div className="guide__stars">
                            <img src={star} alt="" />
                        </div>
                </div>
            </div>

            <div className="guide__images">
                <div className="guide__img">
                    <img src={lady} alt=""  className='lady'/>
                    
                    <div className="guide__ellipse">
                        <img src={ellipsec} alt="" />
                    </div>
                </div>
            </div>
        </article>
    </section>
</main>
)
}

export default Guide

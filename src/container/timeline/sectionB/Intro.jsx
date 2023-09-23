import React from 'react';
import SubHeading from '../../../components/subHeading/SubHeading';
import { idea, starpu, sata } from '../../../constant/Images';
import "./intro.css";

const Intro = () => {
return (
<main>
    <section className='container py-3'>
        <article className=' intro__content py-3 row columns__sm'>
            <div className="intro__images row">
                <div className="intro__sata row items__center">
                    <img src={sata} alt="star" />
                </div>
                <img src={idea} alt="big idea" />
            </div>

            <div className="intro__text">
                <div className="row justify__between items__center">
                <SubHeading title="Introduction to getlinked" text="tech Hackathon 1.0" />
                <div className="intro__star">
                    <img src={starpu} alt="star" />
                </div>
                </div>
                
                <div className="intro__info">
                    <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a 
                        design maverick, or a concept wizard, you'll have the chance to transform 
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>
                </div>
            </div>
        </article>
    </section>
</main>
)
}

export default Intro

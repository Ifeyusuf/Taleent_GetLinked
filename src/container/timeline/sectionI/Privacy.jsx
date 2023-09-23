import React from 'react';
import SubHeading from '../../../components/subHeading/SubHeading';
import { starpu } from '../../../constant/Images';
import { vectork, key, list, purpleCircle } from '../../../constant/Images';
import "./privacy.css"

const Privacy = () => {
return (
<main className='privacy__bg'>
    <section className='container'>
        <article className='row privacy__container flex__col-reverse_sm columns__md'>
            <div className="privacy__info">
                <SubHeading title=" Privacy Policy and " text="Terms"/>
                <div className="privacy__text-small">
                    <p>Last updated on September 12, 2023</p>
                </div>
                <div className="privacy__text-small_second">
                    <p>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                </div>
                <div className="privacy__box">
                    <div className="privacy__text-small_third">
                        <p>At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose, 
                            and safeguard your data when you participate in our tech 
                            hackathon event. By participating in our event, you consent to the practices described in this policy.
                        </p>
                    </div>
                    <div className="privacy__subheading">
                        <p>Licensing Policy</p>
                        <p>Here are terms of our Standard License:</p>
                    </div>

                    <div className="privacy__list">
                        <ul>
                            <li className=' flex'  > 
                            <p className='mt-2'><img src={list} alt="" /></p>
                           <p className='ms-1'> The Standard License grants you a non-exclusive right tonavigate and register for our event</p></li>

                            <li className=' flex mt-1'>
                                <p className='mt-2 '><img src={list} alt="" /></p>
                                <p className='ms-1'>You are licensed to use the item available at any free sourcesites, for your project developement </p>
                            </li>
                        </ul>
                    </div>
                    <div className="my__2 privacy__btn">
                        <button className='custom__button'>Read More</button>
                    </div>

                </div>
            </div>

            <div className="privacy__image">
                <img src={vectork} alt="" />
                <div className="privacy__key">
                    <img src={key} alt="" />
                </div>

            </div>
        </article>
    </section>
    <div className="privacy__purple">
        <img src={purpleCircle} alt="" />
    </div>
</main>
)
}

export default Privacy

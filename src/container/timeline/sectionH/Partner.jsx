import React from 'react';
import { partner } from '../../../constant/Images';
import "./partner.css";

const Partner = () => {
return (
<main>
    <section className='container py-3'>
        <article className='partner__header'>
            <h1>Partners and Sponsors</h1>
            <div className="partner__header-text">
                <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            </div>
        </article>
        <article className=' partner__img'>
            <img src={partner} alt="" />
        </article>
    </section>
</main>
)
}

export default Partner

import React from 'react';
import {line, purpleCircle} from "../../../constant/Images";
import Stars from '../../../components/star/Stars';
import "./possibility.css"

const Possibility = () => {
return (
<main>
    <section className='container' >
        <article className='row py-2 possibility__content flex__col-reverse_sm' >
            <div className="possibility__bg-star">
                <Stars/>
                <div className="possibility__bg-circle">
                    <img src={purpleCircle} alt="purpleCircle" />
                </div>
            </div>
            <div className="possibility__text">
                <p>Igniting a Revolution in HR Innovation</p>
                <div className="possibility__text-line">
                    <img src={line} alt="" />
                </div>
            </div>

        </article>
    </section>
</main>
)
}

export default Possibility

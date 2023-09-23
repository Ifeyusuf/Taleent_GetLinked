import React from 'react';
import { starpu } from '../../../constant/Images';
import { light, rewardsp, prize, position } from '../../../constant/Images';
import "./prizes.css";

const Prizes = () => {
return (
<main>
    <section className='container bg__prize'>
        <article className='row prize__container flex__col-reverse_sm'>
            <div className="prize__header-img">
                <img src={starpu} alt="" />
            </div>
            <div className="prize__header-info">
                <img src={rewardsp} alt="" className='rewardsp'/>
                <div>
                <img src={light} alt="" />
                </div>
            </div>
        </article>

        <article className='row columns__sm items__center position__container'>
            <div className="prize__reward">
                <img src={prize} alt="" />
            </div>
            <div className="prize__position">
                <img src={position} alt="" />
            </div>
        </article>
    </section>
</main>
)
}

export default Prizes

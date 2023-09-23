import React from 'react';
import { winm, win, emoji } from '../../constant/Images';
import "./modal.css";

const Modal = () => {
return (
<section className='section'>
    <article className='modal__overlay'>
        <div className="modal__content">
            <div className="flex items__center modal__images">
                <div className='winm'>
                    <img src={winm} alt="" />
                </div>
                <div className="modal__win">
                    <img src={win} alt="" />
                </div>
            </div> <br /><br /><br /><br /><br /><br />

            <div className="modal__text">
                <div className="modal__first-text">
                    <p className='text__white'>Congratulations you have successfully Registered!</p>
                </div>
                <div className="modal__text-second">
                    <p className='text__white'>Yes, it was easy and you did it! check your mail box for next step <img src={emoji} alt="" /></p>
                </div>
                <div className="modal__btn">
                    <button>Back</button>
                </div>
            
            </div>
        </div>
    </article>
</section>
)
}

export default Modal

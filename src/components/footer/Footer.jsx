import React from 'react';
import "./footer.css";
import { getlinked } from '../../constant/Images';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <section className='container'>
        <article className='row footer__container justify__between columns__sm'>
          <div className="flex__1">
            <div className="footer__logo">
              <img src={getlinked} alt="" />
              <div className="footer__text">
                <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
              </div>
              <div className="footer__terms flex items__center">
              <p><a href="#">Terms of Use</a></p> 
                <div className='footer__line'></div>      
              <p><a href="#">Privacy Policy</a></p>
            </div>
            </div>
          </div>

          <div className="flex__1 justify__end">
            <div className="footer__links">
              <ul>
                <h4>Useful Links</h4>
                <li>Overview</li>
                <li>Timeline</li>
                <li>Timeline</li>
                <li>FAQs</li>
                <li>Register</li>
                <li className='flex social__icons items__center'>
                  <p>Follow us</p>
                  <p><FiInstagram style={{ fontSize: 20}}/></p>
                  <p><FiFacebook style={{ fontSize: 20 }}/></p>
                  <p><FiTwitter style={{ fontSize: 20 }}/></p>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex__1 justify__end">
          <div className="footer__links">
              <ul>
                <h4><a href="#">Contact Us</a></h4>
                <li>+234 7060966702</li>
                <li>27,Alara Street Yaba 100012 Lagos State</li>
              </ul>
            </div>
          </div>
        </article>
        <div className="footer__copyright">
          <p>All rights reserved. © getlinked Ltd.</p>
        </div>
        <div className="footer__developer">
          <p>Developed by Yusful_Tech @ {new Date().getFullYear()}</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer

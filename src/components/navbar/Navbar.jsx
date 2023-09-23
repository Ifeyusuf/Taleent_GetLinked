import React from 'react';
import {Link} from "react-router-dom";
import { menu } from '../../constant/Images';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import {getlinked} from "../../constant/Images"
import "./navbar.css";

const Navbar = () => {

    const [toggleMenu, setToggleMenu]= React.useState(false)

return (
<nav>
    <div className="container nav__heading">

    <article className='row justify__between items__center'>
        <div className="nav__logo">
        <a href="/"><img src={getlinked} alt="" /></a>
        </div>

        <div className="nav__btns row gap__1 pc__only-sm nav__btns-special items__center">

        <div className="nav__links-container pc__only-sm pc__only-md me">
            <ul className="nav__links row">
            <li className="p__opensans"><a href="#timeline">Timeline</a></li>
            <li className="p__opensans"><a href="#overview">Overview</a></li>
            <li className="p__opensans"><a href="#faqs">FAQs</a></li>
            <li className="p__opensans"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
            <div className='pc__only pc__only-md'>
            <button className=" custom__button"><Link to="/register" >Registar</Link></button>
            </div>
        </div>

        <article className='nav__smallscreen mobile__only mobily__only-sm mobile__only-md'>
        <img src={menu} alt="" className='text__white font__27 cursor' onClick={()=> setToggleMenu(true)} />

    {
        toggleMenu ?
        <div className="nav__smallscreen-overlay">
        <MdOutlineClose className="nav__overlay-close font__27 text__white" onClick={()=> setToggleMenu(false)}/>
            <ul className="nav__smallscreen-links">
            <li className="p__opensans"><a href="#timeline">Timeline</a></li>
            <li className="p__opensans"><a href="#overview">Overview</a></li>
            <li className="p__opensans"><a href="#faqs" >FAQs</a></li>
            <li className="p__opensans"><a href="#contact" >Contact</a></li>
            </ul>
            <div className='mobile__only-sm ms__sm-1 ms__md-1 '>
            <button className=" custom__button "><Link to="/register" >Registar</Link></button>
            </div>
        </div>
        : null
    }
    </article>
    </article>


    </div>
    </nav>
)
}

export default Navbar

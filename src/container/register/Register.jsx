import React, {useState} from 'react';
import { reg, purpleCircle } from '../../constant/Images';
import StarsP from '../../components/starPurple/StarsP';
import Stars from '../../components/star/Stars';
import Modal from '../../components/modal/Modal';
import Axios from "axios";
import "./register.css";


const Register = () => {

    const [modal, setModal] =useState(false);

    const url= "https://backend.getlinked.ai"

    const [data, setData] =useState( {
        name: "",
        phone: "",
        email: "",
        topic:"",
        category:"",
        size:"",
        idUser:""
    })

    const handlerChange= (e)=>{
        const newData= {...data}
        newData[e.target.id]= e.target.value
        setData(newData)
        console.log(newData);
    }
    const submit= (e)=>{
        e.preventDefaullt();
        Axios.post(url,{
            name: data.name,
            phone: data.phone,
            email: data.email,
            topic:data.topic,
            category: data.category,
            size:data.size,
            idUser: data.idUser,
        })
        .then(res=>{
            console.log(res.data);
        })
    }

return (
<main>
    <section className='container'>
        <article className='row columns__sm'>
            
            <div className="flex__1">
                <div className="register__image-container">
                    
                    <StarsP/>
                    <div className="register__purple">
                        <img src={purpleCircle} alt="" />
                    </div>
                    <div className="register__image">
                        <img src={reg} alt="" />
                    </div>
                    <Stars/>
                </div>
            </div>

            <div className="flex__1 register__bg">

                <div className="register__input">
                    <p className='reg'>Register</p>
                    <div className="input__heading mb__1">
                        <p>CREATE YOUR ACCOUNT</p>
                    </div>

                {
                    <Modal/> ?

                    <form action="Post" onSubmit={(e)=> submit(e)} >

                    <article className="row  gap__2 columns__sm width__sm">       
                        <div className="flex__1 width__sm">
                            <div className="name ">
                                <p className='text__white'>Team's Name</p>
                                <input type="text" onChange={(e)=> handlerChange(e)}  className='custom__input' placeholder='Enter the name of your group' id='name' value={data.name}/>
                            </div>
                        </div>
                        <div className="flex__1 width__sm">
                            <div className="Phone">
                                <p className='text__white'>Phone</p>
                                <input type="text" onChange={(e)=> handlerChange(e)} className='custom__input ' placeholder='Enter your phone number' id='number' value={data.number} />
                            </div>
                        </div>

                        <div className="flex__1">
                            <div className="name">
                                <p className='text__white'>Email</p>
                                <input type="email" onChange={(e)=> handlerChange(e)}   className='custom__input' placeholder='Enter your email address' id='email' value={data.email}/>
                            </div>
                        </div>
                        <div className="flex__1">
                            <div className="Phone">
                                <p className='text__white'>Project Topic</p>
                                <input type="text" onChange={(e)=> handlerChange(e)}  className='custom__input' placeholder='What is your group project topic' id='topic' value={data.topic}/>
                            </div>
                        </div>

                        <div className="flex__1">
                            <div className="name">
                                <p className='text__white'>Category</p>
                                <select name="category" onChange={(e)=> handlerChange(e)}  id="category" value={data.category} className='custom__input'>
                                    <option value="select">Select your category</option>
                                    <option value="one">1</option>
                                    <option value="2">2</option>
                                    <option value="three">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex__1">
                            <div className="name">
                                <p className='text__white'>Group Size</p>
                                <select name="size" onChange={(e)=> handlerChange(e)}  id="size" value={data.size} className='custom__input'>
                                    <option value="select">Select</option>
                                    <option value="one">1</option>
                                    <option value="2">2</option>
                                    <option value="three">3</option>
                                </select>
                            </div>
                        </div>
                    </article>
                    <div className="registar__text-small">
                        <p>Please review your registration details before submitting</p>
                    </div>
                    <div className="register__checkbox flex">
                                <input type="checkbox" className='checkbox' />
                                <p className='text__white'>I agreed with the event terms and conditions  and privacy policy</p>
                    </div>
                    
                    <div className="register__btn">
                        <button onClick={()=>setModal(!modal)}>Register Now</button>
                    </div>
                </form>
                :null
                }
                </div>
            </div>
        </article>
    </section>
</main>
)
}

export default Register

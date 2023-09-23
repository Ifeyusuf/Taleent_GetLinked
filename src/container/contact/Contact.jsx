import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Axios from "axios";
import "./contact.css";

const Contact = () => {

    const url= "https://backend.getlinked.ai"

    const [data, setData] = React.useState( {
        name: "",
        mail: "",
        message: "",
        idUser: "",
    });

    const handlerChange= (e)=>{
        const newData= {...data}
        newData[e.target.id]= e.target.value
        setData(newData)
        console.log(newData);
    };
    const submit= (e)=>{
        e.preventDefaullt();
        Axios.post(url,{
            name: data.name,
            mail: data.mail,
            message:data.message,
            idUser: data.idUser,
        })
        .then(res=>{
            console.log(res.data);
        })
    }
return (
<main>
    <section className='container'>
        <article className='row columns__md contact__container columns__sm'>
            <div className="flex__1">
                <div className="contact__info">
                    <h1>Get in touch</h1>
                    <p>Contact Information</p>
                    <p>27,Alara Street Yaba 100012 Lagos State</p>
                    <p>Call Us : 07067981819</p>
                    <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
                <div className='flex social__icons items__center'>
                    <p className='follow'>Follow us</p>
                    <p><FiInstagram style={{ fontSize: 20}}/></p>
                    <p><FiFacebook style={{ fontSize: 20 }}/></p>
                    <p><FiTwitter style={{ fontSize: 20 }}/></p>
                </div>
                </div>
            </div>

            <div className="flex__1 register__bg">

                <div className="contact__form">
                    <p>Questions or need assistance?</p>
                    <p>Let us know  about it!</p>

                    <form action="post" className='form'  onSubmit={(e)=> submit(e)}>
                    <input type="text"className='form__input width__sm' placeholder='First Name' onChange={(e)=> handlerChange(e)}   id='name' value={data.name}/>
                    <input type="email"className='form__input width__sm' placeholder='Mail'  onChange={(e)=> handlerChange(e)}   id='mail' value={data.name}/>
                    <input type="email"className='form__message ' placeholder='Message'   onChange={(e)=> handlerChange(e)}   id='message' value={data.name}/>

                    <div className="contact__btn">
                        <button>Submit</button>
                    </div>

                    </form>
                </div>
            </div>
        </article>
    </section>
</main>
)
}

export default Contact

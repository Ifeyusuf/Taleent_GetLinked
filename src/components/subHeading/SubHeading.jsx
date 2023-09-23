import React from 'react';
import "./subHeading.css";

const SubHeading = ({title, text}) => {
return (
<main>
        <article className='subheading__content' >
            <div className="subheading__title">
                <p>{title}</p>
            </div>
            <div className="subheading__text">
                <p>{text}</p>
            </div>

        </article>
</main>
)
}

export default SubHeading

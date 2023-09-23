import React from 'react';
import {star} from "../../constant/Images"
import "./star.css"

const Stars = () => {
return (
<main>
    <section>
        <div className="app__star">
            <img src={star} alt="" />
        </div>
    </section>
</main>
)
}

export default Stars

import React from 'react';
import Footer from "../components/footer/Footer";
import {TimeLine, Possibility, Intro, Guide, Criteria, Question, Line, Prizes, Partner, Privacy} from '../container/timeline/index';

const TimeLinee = () => {
return (
    <div>
        <Possibility/>
        <TimeLine/>
        <Intro/>
        <Guide/>
        <Criteria/>
        <Question/>
        <Line/>
        <Prizes/>
        <Partner/>
        <Privacy/>
        <Footer/>
    </div>
)
}

export default TimeLinee

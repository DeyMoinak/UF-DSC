import React from 'react';
import ProfilePic from './../../images/diversity-graphic.png';

import './intro.css';

const Introduction = () => {
    return (
        <body>
            <div class="tile__intro">
                <div class="intro">
                    <img class="self_image" src={ProfilePic}/>
                    <div class="intro__section">
                        <h1 class="intro__title">Hi, welcome to UF Developer Student Club (DSC)! </h1>
                        <p class="intro__subtitle">A Google Developers program for university students</p>
                        <p class="intro__memo">DSC promotes the learning of Google Developer technologies, as well as, mobile and web development skills essential for industry.</p>
                        <p class="infrot_memo"> We focus on helping students improve their project development skills. Our goal is for our members to become familiar with how a full stack application is made and help them create their own! </p>
                        <p class="intro_memo">We strive to ensure everyone regardless of ability or background is welcome. </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;

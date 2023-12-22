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
                        <h1 class="intro__title">Hi, welcome to UF Google Developer Student Club (GDSC). </h1>
                        <p class="intro__subtitle">A Google Developers program for university students across the U.S.</p>
                        <p class="intro__memo">GDSC promotes the learning of Google Developer technologies, as well as, mobile and web development skills essential for industry. </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Introduction;
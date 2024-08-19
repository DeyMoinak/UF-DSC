import React from 'react';

import Image1 from './../../images/HarshilPahuja2.jpg';
import Image2 from './../../images/1615834215781.jpg';
import Image3 from './../../images/1651879915810.jpg';
import Image4 from './../../images/1694738658095.jpg';
import "./officers.css";

const Officers = () => {
    return (
        <body>
            <h3 class="exp__title">Meet the Team</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    <div class="exp">
                        <img src={Image3}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Moinak Dey - President & Lead</h1>
                            <p class="exp__body">Master's Computer Science student at UF specializing in Machine Learning.</p>
                            <br /> 
                            <p class="exp__body"> Moinak has interned at Mayo Clinic and Florida Blue as a Full-Stack Software Engineer intern and is passionate about helping students gain exposure to project development and industry level software engineering practices.</p>
                        </div> 
                    </div>
                    <div class="exp">
                        <img src={Image4}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Harshil Pahuja - Vice President</h1>
                            <p class="exp__body">Junior Computer Science student at UF interested in real-world applications of computing.</p>
                            <br /> 
                            <p class="exp__body">Harshil completed a Software Engineer internship at L3Harris in Sunrise, Florida where he helped create electronic warfare technology for military and law enforcement applications. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Oliver Jen - Treasurer</h1>
                            <p class="exp__body"Sophomore Computer Science student passionate about undergraduate research involving Full-Stack applications</p>
                            <br /> 
                            <p class="exp__body">Oliver is interested in learning more about Artifical Intelligence and incorporating modern frameworks in his research.</p>
                        </div>
                    </div>
            </div>
        </body>
    );
};

export default Officers;

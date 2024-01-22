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
                            <p class="exp__body">Senior Computer Science student at UF pursuing the Combined BS/MS program.</p>
                            <br /> 
                            <p class="exp__body"> Moinak has interned at Mayo Clinic and Florida Blue as a Full-Stack Software Engineer intern and is passionate about helping students gain exposure to project development and real-world software engineering practices.</p>
                        </div> 
                    </div>
                    <div class="exp">
                        <img src={Image4}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Andrew Delpuech - Vice President</h1>
                            <p class="exp__body">Senior Computer Science student at UF passionate about using AI in the defense industry.</p>
                            <br /> 
                            <p class="exp__body">Recently, Andrew has been working on programing electro-optical sensors, and other advanced electronics systems for airborne, naval and ground based military applications at Raytheon. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Maclane Fisher - Treasurer</h1>
                            <p class="exp__body">Senior Aerospace Engineering student at UF interested in applied computing in engineering contexts.</p>
                            <br /> 
                            <p class="exp__body">Maclane recently interned at CAE USA in Tampa, Florida where he worked on improving flight simulation technologies.</p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image1}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Harshil Pahuja - Advertising Lead</h1>
                            <p class="exp__body">Sophomore Computer Science student at UF interested in real-world applications of computing.</p>
                            <br /> 
                            <p class="exp__body">Harshil is an incoming Software Engineer intern at L3Harris in Melbourne, Florida where he will help create electronic warfare technology for military and law enforcement applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Officers;

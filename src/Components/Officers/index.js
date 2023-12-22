import React from 'react'

import Image1 from './../../images/HarshilPahuja2.jpg'
import Image2 from './../../images/1615834215781.jpg'
import Image3 from './../../images/1651879915810.jpg'
import Image4 from './../../images/1694738658095.jpg'
import "./officers.css";

const Officers = () => {
    return (
        <body>
            <h3 class="exp__title">Meet the Team</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <img src={Image3}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Moinak Dey - President</h1>
                            <p class="exp__body">Senior undergraduate CS student at UF who is passionate about giving members the skills they need to succeed in the tech industry.</p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <img src={Image4}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Andrew Delpuech - Vice President</h1>
                            <p class="exp__body">Senior undergraduate CS student at UF who is passionate about software engineering. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Maclane Fisher - Treasurer</h1>
                            <p class="exp__body">Senior undergraduate Aerospace Engineering at UF who is interested in applying computer science knowledge in engineering contexts. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={Image1}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Harshil Pahuja - Advertising Lead</h1>
                            <p class="exp__body">Sophomore undergraduate CS student at UF who is passionate about gaining Computer Science knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Officers;
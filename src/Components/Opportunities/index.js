import React from 'react'
import img1 from '../../images/knowledge.png'
import img2 from '../../images/apps.jpg'
import img3 from '../../images/inspiration.jpeg'
import "./Opportunities.css";

const Opportunities = () => {
    return (
        <body>
            <h3 class="exp__title">Opportunities that DSCs provide students with</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    <div class="exp">
                        <img src={img1}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Grow their knowledge on developer technologies</h1>
                            <p class="exp__body">Google provides development skills, mobile, and web development skills for students, towards employability. </p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <img src={img2}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Showcase their prototypes and solutions to their local community and in competitions</h1>
                            <p class="exp__body">DSC is intended for university faculty and students interested in solving problems through technology. Check out the 
                            DSC Solution Challenge to learn more. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <img src={img3}/>
                        <div class="exp__desc">
                            <h1 class="exp__name">Getting inspiration to become world-class developers and changemakers from sharing success stories</h1>
                            <p class="exp__body">No experience or talent level is required. Learning from others can make a challenging process enjoyable. </p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Opportunities;

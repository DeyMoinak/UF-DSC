import React from 'react'

import "./Opportunities.css";

const Opportunities = () => {
    return (
        <body>
            <h3 class="exp__title">Opportunities that DSCs provide students with</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <div class="exp__desc">
                            <h1 class="exp__name">Grow their knowledge on developer technologies</h1>
                            <p class="exp__body">Google provides development skills, mobile, and web development skills for students, towards employability. </p>
                        </div>
                    </div>
                    {/* COPY PASTE END HERE */}
                    <div class="exp">
                        <div class="exp__desc">
                            <h1 class="exp__name">Showcase their prototypes and solutions to their local community and competitions such as the DSC Solution Challenge</h1>
                            <p class="exp__body">DSC is intended for university faculty and students interested in solving problems through technology. Check out the 
                            DSC Solution Challenge information in this website to learn about how you can create some innovative solutions for a good cause. </p>
                        </div>
                    </div>

                    <div class="exp">
                        <div class="exp__desc">
                            <h1 class="exp__name">Getting inspiration to become world-class developers and changemakers from sharing others' success stories.</h1>
                            <p class="exp__body">DSC activities are targeted at university faculty and students who want to work to solve real-life problems. No experience or talent level is required.</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Opportunities;
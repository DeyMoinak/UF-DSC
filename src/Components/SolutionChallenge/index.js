import React from 'react'
import img1 from '../../images/solutionchallenge.jpg'
const Challenge = () => {
    return (
        <body>
            <h3 class="exp__title">DSC Solution Challenge</h3>
            <div class="ornament"></div>
            <div class="exp__tile">
                <div class="exp__list">
                    {/* COPY PASTE FROM HERE */}
                    <div class="exp">
                        <img src={img1}/>
                        <p>The Solution Challenge is a contest held in the spring where DSCs create innovative solutions to local community problems using Google products or platforms.</p>
                        <p>We will begin creating teams and brainstorming ideas in January. Join our Discord to stay updated.</p>
                        <p>Check out the following Codelabs: https://events.withgoogle.com/dsc-solution-challenge/ to learn more. </p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Challenge;
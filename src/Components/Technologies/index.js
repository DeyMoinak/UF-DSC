import React from 'react';
import {useNavigate} from 'react-router-dom';


import Tech1 from '../../images/android.png';
import Tech2 from '../../images/web.png';
import Tech3 from '../../images/cloud.png';
import Tech4 from '../../images/mi.png';

import './technologies.css';

const Technologies= () => {
    let navigate = useNavigate();

    return (
        <body id="portfolio" class="port__tile">
            <h1 class="port__title">Technologies We're Excited About</h1>
            
            <section class="port__grid">
                {/*Copy Paste Starts here */}
                <div class="proj">
                    <img src={Tech1}/>
                    <h3>Android Development</h3>
                </div>
                {/*Copy Paste Ends here */}

                <div class="proj">
                    <img src={Tech2}/>
                    <h3>Web Development</h3>
                </div>
                
                <div class="proj">
                    <img src={Tech3}/>
                    <h3>Cloud Computing</h3>
                </div>

                <div class="proj">
                    <img src={Tech4}/>
                    <h3>Machine Learning</h3>
                </div>

            </section>

            <button onClick={() => {navigate("/projects")}} class="port__btn">See More</button>
        </body>
    )
}

export default Technologies;

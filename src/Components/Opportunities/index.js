import React from 'react';
import img1 from '../../images/knowledge.png';
import img2 from '../../images/apps.jpg';
import img3 from '../../images/inspiration.jpeg';
import "./Opportunities.css";

const Opportunities = () => {
    return (
        <div className="opportunities-container">
            <h3 className="exp__title">Opportunities that DSCs provide students with</h3>
            <div className="ornament"></div>
            <div className="exp__tile">
                <div className="exp__list">
                    <div className="exp">
                        <img src={img1} alt="Grow their knowledge on developer technologies" />
                        <div className="exp__desc">
                            <h1 className="exp__name">Grow their knowledge on developer technologies</h1>
                            <p className="exp__body">Google provides development skills, mobile, and web development skills for students, towards employability.</p>
                        </div>
                    </div>

                    <div className="exp">
                        <img src={img2} alt="Showcase their prototypes and solutions to their local community and in competitions" />
                        <div className="exp__desc">
                            <h1 className="exp__name">Showcase their prototypes and solutions</h1>
                            <p className="exp__body">DSC is intended for university faculty and students interested in solving problems through technology. Check out the DSC Solution Challenge to learn more.</p>
                        </div>
                    </div>

                    <div className="exp">
                        <img src={img3} alt="Getting inspiration to become world-class developers and changemakers from sharing success stories" />
                        <div className="exp__desc">
                            <h1 className="exp__name">Getting inspiration to become world-class developers</h1>
                            <p className="exp__body">No experience or talent level is required. Learning from others can make a challenging process enjoyable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opportunities;

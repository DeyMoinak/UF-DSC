import React from 'react';

import Image1 from './../../images/HarshilPahuja2.jpg';
import Image2 from './../../images/IMG_0583.jpg';
import Image3 from './../../images/1651879915810.jpg';
import Image4 from './../../images/1694738658095.jpg';
import "./officers.css";

const Officers = () => {
    return (
        <div>
            <h3 className="exp__title">Meet the Team</h3>
            <div className="ornament"></div>
            <div className="exp__tile">
                <div className="exp__list">
                    <div className="exp">
                        <img src={Image3} alt="Moinak Dey" />
                        <div className="exp__desc">
                            <h1 className="exp__name">Moinak Dey - President & Lead</h1>
                            <p className="exp__body">Master's Computer Science student at UF specializing in Machine Learning.</p>
                            <br /> 
                            <p className="exp__body">Moinak has interned at Mayo Clinic and Florida Blue as a Full-Stack Software Engineer intern and is passionate about helping students gain exposure to project development and industry-level software engineering practices.</p>
                        </div> 
                    </div>
                    <div className="exp">
                        <img src={Image1} alt="Harshil Pahuja" />
                        <div className="exp__desc">
                            <h1 className="exp__name">Harshil Pahuja - Vice President</h1>
                            <p className="exp__body">Junior Computer Science student at UF interested in real-world applications of computing.</p>
                            <br /> 
                            <p className="exp__body">Harshil completed a Software Engineer internship at L3Harris in Sunrise, Florida where he helped create electronic warfare technology for military and law enforcement applications. </p>
                        </div>
                    </div>

                    <div className="exp">
                        <img src={Image2} alt="Oliver Jen" />
                        <div className="exp__desc">
                            <h1 className="exp__name">Oliver Jen - Treasurer</h1>
                            <p className="exp__body">Sophomore Computer Science student passionate about undergraduate research involving Full-Stack applications.</p>
                            <br /> 
                            <p className="exp__body">Oliver is interested in learning more about Artificial Intelligence and incorporating modern frameworks in his research.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Officers;

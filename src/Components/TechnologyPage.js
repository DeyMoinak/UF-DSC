import React from 'react';
import { useNavigate } from 'react-router-dom';
//images
import Tech1 from '../images/android.png';
import Tech2 from '../images/web.png';
import Tech3 from '../images/cloud.png';
import Tech4 from '../images/mi.png';

//Components
import Header from './Header';

import './TechnologyPage.css';


const TechnologyPage = () => {
    let navigate = useNavigate();
    return (
        <div >
            <Header/>
            <section class="technologies">
                <div class="technology">
                    <img src={Tech1}/>
                    <h3>Android Development</h3>
                    <p>Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.
                       Check out the following link for Google-made Codelabs to learn more: https://codelabs.developers.google.com/?cat=Android 
                    </p>
                </div>

                <div class="technology">
                    <img src={Tech2}/>
                    <h3>Web Development</h3>
                    <p>Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.
                       Check out the following link for Google-made Codelabs to learn more: https://codelabs.developers.google.com/?cat=Web 
                    </p>
                </div>

                <div class="technology">
                    <img src={Tech3}/>
                    <h3>Cloud Computing</h3>
                    <p>For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to ridges gaps between data, insight, and action.
                       Check out the following link for Google-made Codelabs to learn more: https://codelabs.developers.google.com/?cat=Cloud 
                    </p>
                </div>

                <div class="technology">
                    <img src={Tech4}/>
                    <h3>Machine Learning</h3>
                    <p>Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to utomatically learn and improve from experience without being explicitly programmed.
                       Check out the following link for Google-made Codelabs to learn more: https://codelabs.developers.google.com/?cat=TensorFlow 
                    </p>
                </div>

                <button onClick={() => {navigate("/")}} class="proj_btn">Go Home</button>
            </section>
        </div>
    )
}

export default TechnologyPage;

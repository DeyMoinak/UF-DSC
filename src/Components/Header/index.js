import React from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '../../images/google.png';


import './Header.css'

const Header = () => {
    let navigate = useNavigate();

    return (
        <body>
            <header>
                <img class="logo" src={logo}/>
                <nav class="nav">
                    <u1 class="nav__list">
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#home" class="nav__link">Home</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#projects" class="nav__link">Technologies We're Excited About</a></l1>
                        <l1 class="nav__item" onClick={() => {navigate("/")}}><a href="#membership" class="nav__link">Become a Member</a></l1>
                    </u1>
                </nav>
            </header>
        </body>
    )
}

export default Header;
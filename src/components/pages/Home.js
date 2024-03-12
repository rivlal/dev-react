import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import Countries from '../Countries';



const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Countries/>
            <br/><br/>
            <h1>ACCUEIL</h1>
            <img src="./papaniko.jpg" alt="papaniko" />
            <h2 id="guy">Jean Guy Nicolas RANDRIAMPARANY </h2>
            <h1>Bonjour daoly nareo.<br/> Premier projet ReactJS sy mise en ligne ty e!!</h1>
        </div>
    );
};

export default Home;
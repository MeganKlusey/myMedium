import React from 'react';
import './style.css';

/**
* @author
* @function Landing
**/

const Landing = (props) => {
    return (
        <div id='landingDiv'>
            <h1 id='landingH1'>myMedium</h1>
            <h2 id='landingH2'>Dive deeper on topics that matter to you.</h2>
            <a id='landingA2' href='/home'><button id='landingButton'>Get started</button></a>
            <p id='landingP'>Already have an account? <a id='landingA' href='#'>Sign In</a></p>
        </div>
    )

}

export default Landing;
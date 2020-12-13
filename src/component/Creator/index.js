import React from 'react';
import './style.css';

/**
* @author
* @function Creator;
**/

const Creator = (props) => {
    return (
        <div id='creatorDiv'>
            <div>
                <p id='creatorName'>{props.namesrc}</p>
                <a id='creatorProfA'><p id='creatorProf'>{props.profsrc}</p></a>
            </div>
            <button id='creatorBtn'>Follow</button>
        </div>
    )

}

export default Creator
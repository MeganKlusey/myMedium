import React from 'react';
import Header from '../../component/Header';
import FullArticle from '../../component/FullArticle';
import './style.css';

/**
* @author
* @function Article
**/

const Article = (props) => {
    return (
        <div id='article' >
            <Header />
            <FullArticle />
        </div >
    )
}

export default Article
import React from 'react';
import Header from '../../component/Header';
import ListedArticle from '../../component/ListedArticle';
import './style.css';

/**
* @author
* @function Likes
**/

const Likes = (props) => {
    return (
        <div id='likes'>
            <Header />
            <div id='likesBody'>
                Likes
                <ListedArticle />
                <ListedArticle />
                <ListedArticle />
                <ListedArticle />
                <ListedArticle />
                <ListedArticle />
            </div>
        </div>
    )

}

export default Likes
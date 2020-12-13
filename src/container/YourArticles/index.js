import React from 'react';
import './style.css';
import Header from '../../component/Header';
import ListedArticles from '../../component/ListedArticle';

/**
* @author
* @function YourArticles
**/

const YourArticles = (props) => {
    return (
        <div id='yourArticles'>
            <Header />
            <div id='yourArticlesBody'>
                Your Articles
                <ListedArticles />
                <ListedArticles />
                <ListedArticles />
                <ListedArticles />
                <ListedArticles />
            </div>
        </div>
    )

}

export default YourArticles
import React from 'react';
import Header from '../../component/Header';
import ListedArticle from '../../component/ListedArticle';
import './style.css';

/**
* @author
* @function Notifications
**/

const Notifications = (props) => {
    return (
        <div id='notifications'>
            <Header />
            <div id='notificationsBody'>
                Notifications
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

export default Notifications
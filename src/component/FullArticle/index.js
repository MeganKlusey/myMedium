import React, { Component } from 'react';
import './style.css';

/**
* @author
* @function FullArticle
**/

class FullArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://content.guardianapis.com/search?api-key=39c771fc-53b1-4b9a-b55c-9d8fb7192251&page-size=7&section=technology&show-fields=thumbnail,standfirst&show-tags=contributor')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div id='fullArticle'>
                    <p id='fullArticleTitle'>Full Article Title: {items.response.results[0].webTitle}</p>
                </div >
            )
        }
    }

}

export default FullArticle
import React, { Component } from 'react';
import './style.css';

/**
* @author
* @function BigArticle
**/

class BigArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://content.guardianapis.com/search?api-key=39c771fc-53b1-4b9a-b55c-9d8fb7192251&page-size=1&section=technology&show-fields=thumbnail,standfirst&show-tags=contributor')
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
                <div id='bigArticleDiv'>
                    <img id='bigArticleImg' src={items.response.results[0].fields.thumbnail} />
                    <p id='author'>WRITTEN BY <span id='authorSpan'>{items.response.results[0].tags[0].webTitle}</span></p>
                    <a id='bigArticleTitleA'><p id='title'>{items.response.results[0].webTitle}</p></a>
                    <p id='date'>{items.response.results[0].webPublicationDate.replace(/T/g, " · ").replace(/Z/g, " ")} <span id='star'>&#9733;</span></p >
                    <br />
                    <p>{items.response.results[0].fields.standfirst.replace(/<\/?p[^>]*>/g, "").replace(/(<br>)/g, "")}</p>
                </div>
            )
        }
    }
}

export default BigArticle;
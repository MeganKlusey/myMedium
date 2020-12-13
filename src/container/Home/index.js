import React, { Component } from 'react';
import Header from '../../component/Header';
import SmallArticle from '../../component/SmallArticle';
import BigArticle from '../../component/BigArticle';
import Creator from '../../component/Creator';
import Topic from '../../component/Topic';
import './style.css';
import { render } from '@testing-library/react';

/**
* @author
* @function Home;
**/

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://content.guardianapis.com/search?api-key=39c771fc-53b1-4b9a-b55c-9d8fb7192251&page-size=50&section=technology&show-fields=thumbnail,standfirst&show-tags=contributor')
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
                <div id='home'>
                    <Header />
                    <div id='homeBody'>
                        <div id='homeContainer'>
                            <div id='homeLeft'>
                                <div id='bigArticles'>
                                    <BigArticle id='bigArticle' />
                                </div>
                                <div id='smallArticles'>
                                    <SmallArticle
                                        imgsrc={items.response.results[1].fields.thumbnail}
                                        authsrc={items.response.results[1].tags[0].webTitle}
                                        titlesrc={items.response.results[1].webTitle}
                                        datesrc={items.response.results[1].webPublicationDate.replace(/T/g, " · ").replace(/Z/g, " ")}
                                        class='smallArticle'
                                    />
                                    <SmallArticle
                                        imgsrc={items.response.results[2].fields.thumbnail}
                                        authsrc={items.response.results[2].tags[0].webTitle}
                                        titlesrc={items.response.results[2].webTitle}
                                        datesrc={items.response.results[2].webPublicationDate.replace(/T/g, " · ").replace(/Z/g, " ")}
                                        class='smallArticle'
                                    />
                                    <SmallArticle
                                        imgsrc={items.response.results[3].fields.thumbnail}
                                        authsrc={items.response.results[3].tags[0].webTitle}
                                        titlesrc={items.response.results[3].webTitle}
                                        datesrc={items.response.results[3].webPublicationDate.replace(/T/g, " · ").replace(/Z/g, " ")}
                                        class='smallArticle'
                                    />
                                    <SmallArticle
                                        imgsrc={items.response.results[4].fields.thumbnail}
                                        authsrc={items.response.results[4].tags[0].webTitle}
                                        titlesrc={items.response.results[4].webTitle}
                                        datesrc={items.response.results[4].webPublicationDate.replace(/T/g, " · ").replace(/Z/g, " ")}
                                        class='smallArticle'
                                    />
                                </div>
                            </div>
                            <div id='homeRight'>
                                <div id='creators'>
                                    <p id='creatorsTitle'>CREATORS</p>
                                    <Creator
                                        namesrc={items.response.results[20].tags[0].webTitle}
                                        profsrc={items.response.results[20].tags[0].id}
                                        class='creator' />
                                    <Creator
                                        namesrc={items.response.results[30].tags[0].webTitle}
                                        profsrc={items.response.results[30].tags[0].id}
                                        class='creator' />
                                </div>
                                <div id='topics'>
                                    <p id='topicsTitle'>TOPICS</p>
                                    <Topic
                                        topictitle="Social Media"
                                        class='topic' />
                                    <Topic
                                        topictitle='Coronavirus'
                                        class='topic' />
                                    <Topic
                                        topictitle='Robots'
                                        class='topic' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Home
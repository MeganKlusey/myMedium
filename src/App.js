import React from 'react';
import './App.css';
import Landing from './container/Landing';
import Home from './container/Home';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Notifications from './container/Notifications';
import Likes from './container/Likes';
import Write from './container/Write';
import YourArticles from './container/YourArticles';
import Article from './container/Article';
import FullArticle from './component/FullArticle';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route path='/' exact component={Landing} />
          <Route path='/home' component={Home} />
          <Route path='/full' component={Article} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/likes' component={Likes} />
          <Route path='/write' component={Write} />
          <Route path='/your-articles' component={YourArticles} />
        </div>
      </Switch>
    </BrowserRouter >
  );
}

export default App;

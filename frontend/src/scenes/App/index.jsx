import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import DetailsPost from '../Home/scenes/Post/scenes/Details';

const App = () => (
  <Switch>
    <Route path="/:category/:post_id" component={DetailsPost} />
    <Route path="/:category" render={() => <h1>Alguma category</h1>} />
    <Route exact path="/" component={Home} />
    <Route path="*" render={() => <h1>That is bad :(  - You is lost take home</h1>} />
  </Switch>
);

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import DetailsPost from '../Home/scenes/Post/scenes/Details';
import NotFoundPage from '../../components/NotFoundPage';
import PostsByCategory from '../Home/scenes/Post/scenes/PostsByCategory';

const App = () => (
  <Switch>
    <Route path="/:category/:post_id" component={DetailsPost} />
    <Route path="/:category" render={props => <PostsByCategory {...props} />} />
    <Route exact path="/" component={Home} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default App;

import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import DetailsPost from '../Home/scenes/Post/scenes/Details';

const App = () => (
  <Route render={({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/:category/:post_id" component={DetailsPost} />
          <Route exact path="/:category" render={() => (
            <h1>Alguma category</h1>
          )} />
          <Route path="*" render={() => (
            <h1>That's bad :(  - You is lost take home</h1>
          )} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )}
  />
);

export default App;
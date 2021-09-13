import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Main from './components/main/main';

const App = ({ authService, video }) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={['/newtube_project', '/']}>
            <Login authService={authService} />
          </Route>
          <Route exact path="/newtube_project/main">
            <Main authService={authService} video={video} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

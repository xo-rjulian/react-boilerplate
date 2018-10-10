import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading';
import App from './App';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

const Routes: React.SFC<{}> = props => {
  return (
    <React.Fragment>
      <App />
      <Loading />

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;

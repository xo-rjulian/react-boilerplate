import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// tslint:disable-next-line:no-submodule-imports
import 'semantic-ui-css/semantic.min.css';
import AppStore from './redux/store';
import Routes from './scenes';

ReactDOM.render(
  <Provider store={AppStore}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
);

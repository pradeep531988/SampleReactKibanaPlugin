import React from 'react';
import { Alerts } from '../alerts/alerts';
import './main.less';
import PropTypes from 'prop-types';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

 
  render() {

    return (

      <Router>
        <Switch>
          <Route path="/">
            <Alerts />
          </Route>
        </Switch>
      </Router>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import NotFound from './components/NotFound/NotFound';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/privacy_policy' component={PrivacyPolicy} />
            <Route exact path='/*' component={NotFound} />
          </Switch>
        </div>
      </Router>
      )
  }
}

export default Routes;
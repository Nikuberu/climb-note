import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import NotFound from './components/NotFound/NotFound';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-72083066-6');

const GoogleAnalytics = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  return null;
};

class Routes extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <GoogleAnalytics />
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
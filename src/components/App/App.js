import React, { Component } from 'react';
import Slideshow from '../Slideshow/Slideshow';
import AppStoreLinks from '../AppStoreLinks/AppStoreLinks';
import './App.css';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="App-header">
          <div className="App-title">
            <h2>Climb Note</h2>
            <p className="App-subtitle">
              Find climbing locations, parking locations, and other climber's activities.
            </p>
          </div>
        </div>
        <div className='App-body'>
          <Slideshow />
          <AppStoreLinks />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

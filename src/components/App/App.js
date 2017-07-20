import React, { Component } from 'react';
import './App.css';
import screen1 from '../../images/screen1.png'
import screen2 from '../../images/screen2.png'
import screen3 from '../../images/screen3.png'
import Footer from '../Footer/Footer'

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
        <div className="App-body">
          <img src={screen3} alt='screenshot1'/>
          <img src={screen1} alt='screenshot2'/>
          <img src={screen2} alt='screenshot3'/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

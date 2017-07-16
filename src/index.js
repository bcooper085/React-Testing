import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAy5n808GrubDUiKTBFdRMTCyOmmRTTFGY",
    authDomain: "brew-board.firebaseapp.com",
    databaseURL: "https://brew-board.firebaseio.com",
    projectId: "brew-board",
    storageBucket: "brew-board.appspot.com",
    messagingSenderId: "368770351741"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const App = () => (
  <MuiThemeProvider>
    <MyApp />
  </MuiThemeProvider> 
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

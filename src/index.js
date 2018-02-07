import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
import store from './store.js';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

ReactDOM.render(
       <Provider store={ store }>
            <MuiThemeProvider muiTheme={getMuiTheme( darkBaseTheme)}>
                <App />
            </MuiThemeProvider>
        </Provider>,
    
    document.getElementById('root'));



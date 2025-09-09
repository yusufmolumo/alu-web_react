import React from 'react';
import './App.css';
import logo from './Holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';


const App =() => {
    return (
        <div>
            <div className="App-header">
                
                <img src={logo} alt="Logo" />
                <h1>School dashboard</h1>
                
            </div>
            <hr style={{ borderTop: '3px solid red', marginTop: '1px'}}/>

            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <div className="App-login">
                    <label htmlFor="email" style={{ marginRight: '10px'}}>Email:</label>
                    <input type="email" id="email" name="email" style={{ marginRight: '10px'}}/>
                    <label htmlFor="password"style={{ marginRight: '10px'}}>Password:</label>
                    <input type="password" id="password" name="password" style={{ marginRight: '10px'}}/>
                    <button>OK</button>
                </div>
            </div>
            <hr style={{ borderTop: '3px solid red', marginTop: '300px'}}/>

            <div className="App-footer">
                <p>
                    Copyright {getFullYear()} - {getFooterCopy(true)}
                </p>
            </div>
        </div>
    );
}

export default App
import React from 'react';
import './App.css';
import logo from './Holberton-logo.jpg';


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
            </div>
            <hr style={{ borderTop: '3px solid red', marginTop: '500px'}}/>

            <div className="App-footer">
                <p>Copyright 2020 - holberton School</p>
            </div>
        </div>
    );
}

export default App
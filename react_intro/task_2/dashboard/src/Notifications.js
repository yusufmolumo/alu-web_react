import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

const notification = () => {
    return (
        <div>
            <div className="Notifications">
                
                <button style={{ background: 'transparent', border: 'none', float: 'right'}} aria-label="Close" onClick={() => console.log('Close button has been clicked')}><img src={closeIcon} alt="close-icon" style={{ width: '30px', height: '30px' }}/></button>
                <p>Here is the list of notifications</p>

                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent">{getLatestNotification()}</li>

                </ul>
            </div> 
        </div>
    );
}

export default notification
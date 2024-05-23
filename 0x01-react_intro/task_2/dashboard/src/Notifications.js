// task_2/dashboard/src/Notifications.js
import React from 'react';
import { getLatestNotification } from './utils';
import closeIcon from './assets/close-icon.png';

function Notifications() {
    const handleButtonClick = () => {
        console.log("Close button has been clicked");
    };

    return (
        <div className="Notifications">
            <button 
                onClick={handleButtonClick} 
                aria-label="Close" 
                style={{ position: 'absolute', right: '10px', top: '10px', border: 'none', background: 'none' }}
            >
                <img src={closeIcon} alt="close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}

export default Notifications;

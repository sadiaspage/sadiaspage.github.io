import { useState } from 'react';

function Popup(props) {
    console.log('test:');
    const [buttonPopup, setButtonPopup] = useState(false);
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-header'>
                    {props.headerName}
                </div>
                <button className='close-btn' onClick={() => props.setTrigger(false)}><img src='./src/assets/closeButton.png' width='15px'></img></button>
                { props.children }
            </div>
        </div>
    ) : "";
};

export default Popup;
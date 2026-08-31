import { useState } from 'react';

function Popup(props) {
    console.log('test:');
    const [buttonPopup, setButtonPopup] = useState(false);
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";
};

export default Popup;
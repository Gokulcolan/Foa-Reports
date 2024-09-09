import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                zIndex: 9999 // Ensure it is above other content
            }}
        >
            <ReactLoading
                type="spinningBubbles"  // Type of loading animation
                color="rgb(0, 87, 172)" // Loader color
                height={50}   // Size of the loader
                width={50}    // Size of the loader
            />
            
        </div>
    );
};

export default Loader;

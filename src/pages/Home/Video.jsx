import React from 'react';

const Video = () => {
    return (
        <div className="bg-gray-100 py-10 flex justify-center items-center bg-custom-gradient text-white">
            <div className="w-full max-w-5xl px-4">
                <div style={{ position: 'relative', paddingBottom: '64.5933014354067%', height: '0' }}>
                    <iframe
                        src="https://www.loom.com/embed/e340ed746bda488caf5b531d41ba0ff0?autoplay=1&sid=43092e32-c76e-44a4-89da-d569a5c2b58a"
                        frameBorder="0"
                        webkitAllowFullScreen
                        mozAllowFullScreen
                        allowFullScreen
                        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Video;

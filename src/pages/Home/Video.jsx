import React from 'react';

const Video = () => {
    return (
        <div className="bg-gray-100 py-10 flex justify-center items-center bg-custom-gradient text-white">
            <div className="w-full max-w-5xl px-4">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        <div>
                            <iframe
                                src="https://www.loom.com/embed/e340ed746bda488caf5b531d41ba0ff0?sid=17b38290-90a0-4d95-95c8-8d19e0beecf9"
                                title="Loom Video"
                                allow="autoplay; encrypted-media"
                                frameBorder="0"
                                allowFullScreen
                                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                            ></iframe>
                        </div>
                    </div>
                    <div className="bottom-gradient"></div>
                </div>
            </div>
        </div>
    );
}

export default Video;


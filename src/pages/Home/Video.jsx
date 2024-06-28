import React from 'react'

const Video = () => {

    return (
        <div className="bg-gray-100 py-10 flex justify-center items-center bg-custom-gradient text-white">
            <div className="w-full max-w-5xl px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Featured Video</h2>
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0&showinfo=0"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Video

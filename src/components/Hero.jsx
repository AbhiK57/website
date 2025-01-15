import React from "react";
import SpotifyEmbed from './spotifyembed';

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <img 
                className='top-0 left-0 w-full h-screen object-cover'
                src="https://pbs.twimg.com/media/F-bBbuba4AABZyV?format=jpg&name=4096x4096" 
                alt="/"
            />
            <div className='bg-black/25 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start text-white p-4'>
                <div className='max-w-[50%]'>
                    <h1 className='font-bold text-2xl md:text-4xl drop-shadow-3xl mb-4'>1/14/2025</h1>
                    <p>
                        One day, or day one?
                    </p>
                </div>
            </div>
            <div className="absolute top-0 right-0 m-4 w-[30vw] max-w-[400px] min-w-[150px] md:w-[30vw] sm:w-[40vw]">
                <SpotifyEmbed />
            </div>
        </div>
    );
};

export default Hero;

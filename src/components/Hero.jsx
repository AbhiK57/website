import React from "react"

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img 
                className='top-0 left-0 w-full h-screen object-cover'
                src="https://pbs.twimg.com/media/F-bBbuba4AABZyV?format=jpg&name=4096x4096" 
                alt="/"
            />
            <div className='bg-black/25 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[25%] max-w-[50%] m-auto absolute p-4'>
                    <p>Abhi's Blog</p>
                    <h1 className='font-bold text-2xl md:text-4xl drop-shadow-3xl'>5/22/2024</h1>
                    <p>
                        So this is the start of my website, and the next step in my CS career.{"\n"} 
                        Once I learn how to, you should be able to see this image that shows how my website looked like today.
                    </p>
                    <button className='bg-white text-black relative left-[45%]'>Test</button>
                </div>
            </div>
        </div>
    );
};

export default Hero
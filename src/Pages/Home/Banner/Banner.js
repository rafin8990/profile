import React from 'react';
import banner from '../../../assets/banner.webp'

const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px] lg:max-w-[1440px] mx-auto" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">WELCOME TO <span className='text-success'>FLAVORS OF NATURE</span></h1>
                        <p className="mb-5">Explore the nature and enjoy the most wonderfull invention of nature.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
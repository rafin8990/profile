import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import blank from '../../../assets/blank-profile-picture.webp'

const DisplayPostCard = ({ mypost }) => {
    const { placeName, userName, time, text, image } = mypost;
    const { user } = useContext(AuthContext)
    return (
        <div className='mt-10 lg:max-w-[1440px] mx-auto border shadow-xl rounded-lg p-5'>
            <div>
                <div className='flex items-center'>
                    {
                        user?.photoURL ?
                            <img className='w-20 h-20 rounded-full' src={user?.photoURL} alt="" />
                            :
                            <img className='w-20 h-20 rounded-full' src={blank} alt="" />
                    }

                    <div className='ml-5'>
                        <h1 className='text-xl font-bold'>{userName} added a post</h1>
                        <p>{time}</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-xl font-bold'>{placeName}</h1>
                    <p>{text}</p>
                </div>
                <div>
                    <img className=' w-full ' src={image} alt="" />
                </div>
                <div>
                    <h1>800 peoples See this</h1>
                    <div className='border flex justify-around p-5 mt-5'>
                        <div className='flex items-center'>
                            <FcLike className='text-xl'></FcLike>
                            <h1 className='ml-2 text-xl'> Like</h1>
                        </div>
                        <div className='flex items-center'>
                            <FcComments className='text-xl'></FcComments>
                            <h1 className='ml-2 text-xl'> Comment</h1>
                        </div>
                        <div className='flex items-center'>
                            <FcShare className='text-xl'></FcShare>
                            <h1 className='ml-2 text-xl'> Shere</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayPostCard;
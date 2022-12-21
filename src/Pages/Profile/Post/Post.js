import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import blank from '../../../assets/blank-profile-picture.webp'

const Post = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex items-center justify-between lg:max-w-[1440px] mx-auto mt-10 md:border md:p-10 rounded-2xl shadow-lg'>
            <div className='flex items-center'>
                <div className='ml-5 md:ml-0'>
                    {
                        user?.photoURL ?
                            <img className='h-20 w-20 rounded-full' src={user?.photoURL} alt="" />
                            :
                            <img className='h-20 w-20 rounded-full' src={blank} alt="" />
                    }

                </div>
                <h1 className='ml-5'>Whats On Your Mind?<br /> <span className='text-sm md:text-xl text-success font-semibold'>Click POST to Add a POST</span></h1>
            </div>
            <div>
                <label htmlFor="PostModal" className='btn btn-outline btn-success md:w-32 mr-5 md:mr-0'>Post</label>
            </div>
        </div>
    );
};

export default Post;
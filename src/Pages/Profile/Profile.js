import React, { useContext } from 'react';
import profileBanner from '../../assets/sajek.jpg'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import DisplayPost from './DisplayPost/DisplayPost';
import Post from './Post/Post';
import PostModal from './PostModal/PostModal';
import blank from '../../assets/blank-profile-picture.webp'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="hero h-[600px] lg:max-w-[1440px] mx-auto" style={{ backgroundImage: `url(${profileBanner})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold"> <span className='text-success'>MY Profile</span></h1>
                    </div>
                </div>
            </div>
            <div className='lg:max-w-[1440px] mx-auto mt-[-80px] flex items-center'>
                <div className='lg:ml-20'>
                    {
                        user?.photoURL ?
                            <img className=' w-64 h-64 rounded-full' src={user?.photoURL} alt="" />
                            :
                            <img className=' w-64 h-64 rounded-full' src={blank} alt="" />
                    }

                </div>
                <div>
                    <h1 className='text-4xl font-bold ml-5'>{user?.displayName}</h1>
                </div>
            </div>

            <PostModal></PostModal>
            <Post></Post>
            <DisplayPost></DisplayPost>
        </div>
    );
};

export default Profile;
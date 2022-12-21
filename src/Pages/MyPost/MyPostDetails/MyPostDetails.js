import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import blank from '../../../assets/blank-profile-picture.webp'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UpdatePost from '../UpdatePost/UpdatePost';

const MyPostDetails = ({ mypost }) => {
    const [id, setId]=useState('')
    const { placeName, userName, time, text, image, _id } = mypost;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

const handleUpdate=id=>{
setId(id)
}

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure to delete this')
        if (proceed) {
            fetch(`https://profile-server-ten.vercel.app/posts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("Deleted Successfully!")
                        navigate('/')
                    }
                })
        }
    }
    return (
        <div className='mt-10 lg:max-w-[1440px] mx-auto border shadow-xl rounded-lg p-5'>
            <UpdatePost 
            id={id}
            ></UpdatePost>
            <div>
                <div className='flex items-center'>
                    {
                        user?.photoURL ?
                            <img className='w-20 h-20 rounded-full' src={user?.photoURL} alt="" />
                            :
                            <img className='w-20 h-20 rounded-full' src={blank} alt="" />
                    }
                    <div className='ml-5'>
                        <h1 className='text-xl font-bold'>{userName} </h1>
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
                            <label onClick={()=>handleUpdate(_id)}  htmlFor="update-modal" className="ml-2 text-md btn btn-success">Update Post</label>
                        </div>
                        <div className='flex items-center'>
                            <h1 onClick={() => handleDelete(_id)} className='ml-2 text-md btn btn-success'> Delete Post</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostDetails;
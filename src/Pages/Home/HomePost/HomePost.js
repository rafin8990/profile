import React, { useEffect, useState } from 'react';
import HomePostDetails from '../HomePostDetails/HomePostDetails';

const HomePost = () => {
    const [allPost, setAllPost]=useState([])
    useEffect(()=>{
        fetch('https://profile-server-ten.vercel.app/posts')
        .then(res=>res.json())
        .then(data=>{
            setAllPost(data)
        })
    },[])
    return (
        <div>
            {
                allPost?.map(post=><HomePostDetails 
                key={post?._id}
                post={post}
                ></HomePostDetails>)
            }
        </div>
    );
};

export default HomePost;
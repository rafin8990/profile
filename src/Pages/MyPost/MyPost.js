import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import MyPostDetails from './MyPostDetails/MyPostDetails';


const MyPost = () => {
    const [post, setPost] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://profile-server-ten.vercel.app/posts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    }, [user?.email])
    return (
        <div>
            
         
            {
                post.sort((a, b) => a.time > b.time ? -1 : 1).map(mypost => <MyPostDetails

                    key={mypost?._id}
                    mypost={mypost}
                ></MyPostDetails>)
            }
        </div>
    );
};

export default MyPost;
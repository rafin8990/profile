import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DisplayPostCard from '../DisplayPostCard/DisplayPostCard';

const DisplayPost = () => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/posts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [user?.email])



    return (
        <div>
            {
                posts.sort((a, b) => a.time > b.time ? -1 : 1).map(mypost => <DisplayPostCard

                    key={mypost?._id}
                    mypost={mypost}
                ></DisplayPostCard>)
            }
        </div>
    );
};

export default DisplayPost;
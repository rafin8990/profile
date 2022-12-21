import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PostModal = () => {
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()

    const handlePost = event => {
        event.preventDefault()
        const form = event.target;
        const image = form.image.value;
        const email = form.email.value;
        const name = form.name.value;
        const text = form.text.value;
        const time= new Date().toLocaleDateString();
        console.log(image, email, name, text)

        const posts={
            image,
            email,
            placeName: name,
            text,
            userName:user?.displayName,
            time: time,
        }
        fetch('http://localhost:5000/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(posts)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Post added successfully')
                navigate('/mypost')
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="PostModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="PostModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handlePost}>

                    <input type="text" name='image'  placeholder="Photo URL" className="input input-bordered w-full mt-2" />

                        <input type="text" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full mt-2" />

                        <input type="text" name='name'  placeholder="Place name" className="input input-bordered w-full mt-2" />

                        <textarea name='text' className="textarea w-full textarea-bordered mt-2" placeholder="Add Details"></textarea>

                        <button type='submit' className='w-full btn btn-success mt-5'>Post</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
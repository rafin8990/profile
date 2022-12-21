
import React, { useContext} from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

 const UpdatePost = ({id}) => {
    const { user } = useContext(AuthContext);
    const navigate=useNavigate()

  const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const image = form.image.value;
        const email = form.email.value;
        const name = form.name.value;
        const text = form.text.value;
        const time = new Date().toLocaleDateString();

        const UpdateData= {
            image:image,
            email:email,
            placeName: name,
            text:text,
            userName: user?.displayName,
            time: time,
        }
         fetch(`http://localhost:5000/posts/${id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdateData)
        })
       
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                toast.success('Updated successfully!!!')
                navigate('/profile')
            }
        })
        
    }

    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpdate}>

                        <input type="text" name='image' required placeholder="Photo URL" className="input input-bordered w-full mt-2" />

                        <input type="text" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full mt-2" />

                        <input type="text" name='name' required placeholder="Place name" className="input input-bordered w-full mt-2" />

                        <textarea name='text' required className="textarea w-full textarea-bordered mt-2" placeholder="Add Details"></textarea>

                        <button type='submit' className='w-full btn btn-success mt-5'>update</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePost;
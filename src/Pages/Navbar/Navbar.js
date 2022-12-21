import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import blank from '../../assets/blank-profile-picture.webp'

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    return (
        <div className="navbar shadow lg:max-w-[1440px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-black hover:text-success'><Link to='/'>Home</Link></li>
                        <li className='text-black hover:text-success'><Link to='/mypost'>My Post</Link></li>
                        <li className='text-black hover:text-success'><Link to='/profile'>Profile</Link></li>
                    </ul>
                </div>
                <Link to='/' className=" normal-case text-xl">
                    <div className='flex items-center'>
                        <img className='w-20' src={logo} alt="" />
                        <h1 className='text-sm md:text-xl font-bold text-success'>Flavors of Nature</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-black hover:text-success'><Link to='/'>Home</Link></li>
                    <li className='text-black hover:text-success'><Link to='/mypost'>My Post</Link></li>
                    <li className='text-black hover:text-success'><Link to='/profile'>Profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user?.uid ?
                            <div className='mr-3 flex items-center'>
                                <div className='hidden md:block'>
                                    {
                                        user?.displayName ?
                                            <h1 className='text-xl font-semibold text-success'>{user?.displayName}</h1>
                                            :
                                            ''
                                    }
                                </div>
                                <div className='ml-3 hidden md:block'>

                                    {
                                        user?.photoURL ?
                                            <img className='h-10 w-10 rounded-full' src={user?.photoURL} alt="" />
                                            :
                                            <img className='h-10 w-10 rounded-full' src={blank} alt="" />
                                    }
                                </div>
                            </div>
                            :
                            ''
                    }
                </div>
                <div>
                    {
                        user?.uid ?
                            <button onClick={logOut} className='btn btn-outline btn-success btn-sm'>Log Out</button>
                            :
                            <Link to='/login' className="btn btn-sm btn-outline btn-success">Login</Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import cartImag from '../../../assets/img/products/shopping-cart.png';
import MidNav from './MidNav';

const Nav = () => {
    return (
        <div className='max-w-6xl mx-auto px-6'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <MidNav></MidNav>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl   text-indigo-600">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <MidNav></MidNav>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <img src={cartImag} alt="" className='w-6 h-6 mr-4 ' />
                    <a href="">Login</a>
                    <a className="btn bg-radial from-violet-900 to-violet-700 text-blue-100 font-medium rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
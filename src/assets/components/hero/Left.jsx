import React from 'react';

const Left = () => {
    return (
        <div className='my-auto mx-8 px-6'>
            <button className=" text-violet-600 rounded-4xl bg-indigo-100 font-medium text-xs flex items-center gap-1 py-2 px-3 mb-5">
                <div className='w-2 h-2 bg-violet-600 rounded-full border-2 border-violet-400 blur-[.5px] '></div>
                New: Al-Powered Tools Available</button>
                
            <h1 className='font-bold text-5xl mb-1'>Supercharge Your Digital Workflow</h1>
            <p className='text-sm text-gray-500 mb-6'>Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.
                Explore Products
            </p>
            <button className="btn font-light rounded-4xl bg-violet-800 text-amber-50">Explore Products</button>
            <button className="btn font-light rounded-4xl bg-violet-800 text-amber-50">Explore Products</button>
        </div>
    );
};

export default Left;
import React from 'react';

const UserInfo = () => {
    return (
        <div className='max-w-6xl mx-auto bg-linear-to-l from-violet-800 to-blue-800 flex justify-center items-center gap-12 text-white py-8 rounded-lg'>
            <div className='text-center text-2xl'>
                <h2>50K+</h2>
                <p className='text-xs mt-2 text-gray-400'>Active Users</p>
            </div>
            <div className='border-l border-gray-500 h-9'></div>
            <div className='text-center text-2xl'>
                <h2>200+</h2>
                <p className='text-xs mt-2 text-gray-400'>Premium Tools</p>
            </div>
            <div className='border-l border-gray-500 h-9'></div>
            <div className='text-center text-2xl'>
                <h2>4.9</h2>
                <p className='text-xs mt-2 text-gray-400'>Rating</p>
            </div>

        </div>
    );
};

export default UserInfo;
import React from 'react';
import Left from './Left';
import Right from './Right';

const Hero = () => {
    return (
        <div className='max-w-6xl mx-auto my-12 mr-9 flex flex-col-reverse gap-8 items-center lg:flex-row md:flex-col-reverse'>
            <Left></Left>
            <Right></Right>
        </div>
    );
};

export default Hero;
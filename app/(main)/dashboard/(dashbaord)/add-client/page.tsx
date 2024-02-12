import React from 'react';
import AddClient from './AddClient';

const page = () => {
    return (
        <div className='h-full flex justify-center items-center'>
           <div className='w-96'>
                <AddClient/>
           </div>
        </div>
    );
};

export default page;
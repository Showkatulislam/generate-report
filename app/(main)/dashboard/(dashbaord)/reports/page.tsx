import { GetReports } from '@/actions/GetReports';
import React from 'react';
import Reports from './components/Reports';

const page = async() => {
    const reports=await GetReports()
    
    return (
        <div className='h-full flex justify-center items-center'>
            <Reports reports={reports}/>
        </div>
    );
};

export default page;
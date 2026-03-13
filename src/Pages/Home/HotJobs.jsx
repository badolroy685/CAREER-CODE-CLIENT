import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div className=' mx-auto'>
            <h2 className='text-4xl font-bold text-center py-6'>Hot Jobs of The Day</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-10 gap-6 justify-items-center px-24'> 
            {
                jobs.map ( job => <JobCard key={job._id} job={job}></JobCard>)
            }
           </div>
        </div>

    );
};

export default HotJobs;
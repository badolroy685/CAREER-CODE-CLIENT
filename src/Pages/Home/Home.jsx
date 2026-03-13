import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .catch(error => {
        console.error('Error fetching jobs:', error);
        return [];
    });
    return (
        <div>
          <Banner></Banner>
          <Suspense fallback={<div>Loading jobs...</div>}>
                <HotJobs jobsPromise={jobsPromise} />
            </Suspense>
        </div>
    );
};

export default Home;
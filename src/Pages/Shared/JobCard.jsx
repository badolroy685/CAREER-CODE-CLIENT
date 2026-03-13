import React from 'react';
import { MdLocationPin } from "react-icons/md";

const JobCard = ({job}) => {
    const { title, company, location, jobType, category, description, company_logo, status,  } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border-amber-300 border-2">
           <div className='flex m-4  gap-4'>
             <figure>
                <img
                className='w-16'
                    src={company_logo}
                    alt={company}
                    />
            </figure>
            <div>
                <h4 className='text-2xl'>{company}</h4>
                <p className='flex items-center gap-2'><MdLocationPin /> {location}</p>
            </div>
           </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
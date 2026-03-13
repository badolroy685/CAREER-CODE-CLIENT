import React from 'react';
import { motion} from "motion/react"
import team1 from '../../assets/Teams/Team1.jpg'
import team2 from '../../assets/Teams/Team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className='flex-1'>
                 <motion.img
                    src={team1}
                    alt="Team 1"
                    animate={{
                        y: [100, 130, 100],
                        transition:{
                            duration: 5,
                            repeat: Infinity
                        }
                    }}
                    className="max-w-sm border-blue-600  border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px]  shadow-2xl mb-4"
                />
                <motion.img
                    src={team2}
                    alt="Team 2"
                    animate={{
                        x: [100, 150, 100],
                        transition:{
                            duration: 10,
                            delay: 1,
                            repeat: Infinity
                        }
                    }}
                    className="max-w-sm border-blue-600  border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px]  shadow-2xl mb-4"
                />
               </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Latest <motion.span 
                    animate = {
                        {
                            color : ['#44A4E9',"#C71044",'#CC3378', '#1AD9D9'],
                            transition :{
                                duration : 2,
                                repeat : Infinity,
                                repeatType : "reverse"
                            }
                        }
                    }
                    >Jobs</motion.span> for you!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React, { use } from 'react';
import Lottie from 'lottie-react';
import signinAnimation from '../../assets/Lotties/login.json';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Signin = () => {
       const {createUser} = use(AuthContext);
        const handleRegister = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
    
            //create user with firebase
            createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
        }
    return (
         <div className='hero bg-base-100'>
            
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:text-left">
                    <Lottie style={{width : "300px"}} animationData={signinAnimation} loop={true}></Lottie>
                  
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                       <form onSubmit={handleRegister} >
                         <fieldset className="fieldset">
                            <h1 className="text-5xl font-bold">Login!</h1>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
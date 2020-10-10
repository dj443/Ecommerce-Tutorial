import React from 'react';

const SignUp = () => {

    const showSignUpForm = () => {
        <form className='signup-form'>
            {/* usernamej*/}
            <div className='form-group input-group'>
                <div clssName='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input
                    name=''
                    className='form-control'
                    placeholder='Username'
                    type='text'
                />
            </div>
            {/* email */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span claaName='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input
                    name=''
                    className='form-control'
                    placeholder='Email'
                    type='email'
                />
            </div>
            {/* Password */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                />
            </div>
            {/* password2 */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input
                    className='form-control'
                    placeholder='Confirm password'
                    type='password'
                />
            </div>
        </form>
    }

    return <h1>SignUp</h1>
};

export default SignUp;
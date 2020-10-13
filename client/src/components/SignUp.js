import React, {useState} from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import {Link} from 'react-router-dom';
import {showErrorMsg, showSuccessMsg} from '../Helpers/message';
import {showLoading} from '../Helpers/loading';
import './Signup.css';
import { signup } from '../api/auth';

const SignUp = () => {
    const[formData, setFormData] = useState({
        username: 'dj',
        email: 'dj@email.com',
        password: '123',
        password2: '123',
        successMsg: false,
        errorMsg: false,
        loading: false
    })
    const {username, email, password, password2, successMsg, errorMsg, loading} = formData;

    /* EVENT HANDLERS */
    const handleChange = evt => {
        //console.log(evt)
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: '',
        });
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        //Client side validation
        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData({
                ...formData, errorMsg: "All fields required"
            })
        } else if(!isEmail(email)){
            setFormData({
                ...formData, errorMsg: 'Email required'
            })            
        } else if (!equals(password, password2)) {
            setFormData({
                ...formData, errorMsg: 'Passwords do not match!'
            })
        } else {
            const {username, email, password} = formData;
            const data = {username, email, password};

            setFormData({...formData, loading: true});

            signup(data)
                .then((response) => {
                    console.log('Axios signup success', response);
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage
                    })
                })
                .catch((err) => {
                    console.log("Axios singup error: ", err);
                    setFormData({...formData, loading: false});
                });
        }
    }

    /* VIEWS */
    const showSignUpForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            {/* usernamej*/}
            <div className='form-group input-group'>
                <div clssName='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input
                    name='username'
                    value={username}
                    className='form-control'
                    placeholder='Username'
                    type='text'
                    onChange={handleChange}
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
                    name='email'
                    value={email}
                    className='form-control'
                    placeholder='Email'
                    type='email'
                    onChange={handleChange}
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
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder='Create password'
                    type='password'
                    onChange={handleChange}
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
                    name='password2'
                    value={password2}
                    className='form-control'
                    placeholder='Confirm password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            {/* submit button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Sign Up!
                </button>
            </div>
            {/* Already have account */}
            <p className='text-center text-white'>
                Have an account? <Link to='/SignIn'>Log In</Link>
            </p>
        </form>
    )
    
    /* Renderer */
    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {successMsg && showSuccessMsg(successMsg)}
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && <div className="text-center pb-4">{showLoading()}</div>}
                    {showSignUpForm()}
                    {/*JSON.stringify(formData)*/}
                </div>
            </div>
        </div>
    ) 
    
};

export default SignUp;
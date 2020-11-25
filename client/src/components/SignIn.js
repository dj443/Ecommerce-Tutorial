import React, {useState, useEffect} from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import {Link, useHistory} from 'react-router-dom';
import {showErrorMsg} from '../Helpers/message';
import {showLoading} from '../Helpers/loading';
import {setAuthentication, isAuthenticated} from '../Helpers/auth';
import {signin} from '../api/auth';


const SignIn = () => {
    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1){
            history.push('/admin/dashboard');
        }else if(isAuthenticated() && isAuthenticated().role === 0){
            history.push('/user/dashboard');
        }
    }, [history]);

    //Set State
    const [formData, setFormData] = useState({
        email: 'dj@email.com',
        password: '123456',
        errorMsg: false,
        loading: false,
    });

    //Destructure State
    const {email, password, errorMsg, loading} = formData;

     /* EVENT HANDLERS */
     const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: '',
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        //Client side validation
        if(isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData, errorMsg: "All fields required"
            })
        } else if(!isEmail(email)){
            setFormData({
                ...formData, errorMsg: 'Email required'
            })            
        } else {
            const {email, password} = formData;
            const data = {email, password};

            setFormData({...formData, loading: true});

            signin(data)
                .then((response) => {
                    console.log('Axios signIn success', response);
                    setAuthentication(response.data.token, response.data.user);

                    if (isAuthenticated() && isAuthenticated().role === 1){
                        console.log('Redirecting to admin dashboard');
                        history.push('/admin/dashboard');
                    }else{
                        console.log('Redirecting to user dashboard');
                        history.push('/user/dashboard');
                    }
                })
                .catch(err => {
                    console.log('signin api function error: ', err);
                })
        } 
    }; 

    /* VIEWS */
    const showSignInForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            {/* email */}
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
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
            {/* submit button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Sign In!
                </button>
            </div>
            {/* Dont have account */}
            <p className='text-center text-white'>
                Dont have an account? <Link to='/SignUp'>Register here!</Link>
            </p>
        </form>
    );

     /* Renderer */
     return (
        <div className='signin-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && <div className="text-center pb-4">{showLoading()}</div>}
                    {showSignInForm()}
                    {/*JSON.stringify(formData)*/}
                </div>
            </div>
        </div>
    );
};

export default SignIn;
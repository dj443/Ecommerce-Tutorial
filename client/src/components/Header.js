import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    //Views
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <Link className="navbar-toggler-icon" to='/'></Link>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">Logo</Link>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SignUp">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SignIn">Sign In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

    //Render
    return <header id='header'>{ showNavigation() }</header>   
}

export default Header;
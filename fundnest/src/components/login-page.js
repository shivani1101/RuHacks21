import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState({ email: false, password: false });
    const [errorMsg, setError] = useState('');

    function handleLogin(event) {
        let success = true;
        let errMsg = '';

        /** Handle login submission.
         *
         * @param {*} event - the submit event
         */
        event.preventDefault();

        // Ensure email and password are not empty strings
        if (email.length === 0) {
            success = false;
            errMsg = 'Please enter your email';
            toggleError({ email: true });
        } else if (password.length === 0) {
            success = false;
            errMsg = 'Please enter your password';
            toggleError({ password: true });
        } else {
            toggleError({ email: false, password: false });
        }

        if (!success) {
            setError(errMsg);
            return;
        }
    }

    return (
        <div id="login-page" className="page">
            <form id="login-form" onSubmit={handleLogin}>
                <h1 className="title">Log In</h1>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    size="small"
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    size="small"
                    margin="dense"
                    variant="outlined"
                />
                <div>
                    <Link to="/" className="button-link">
                        <Button color="primary" variant="outlined" size="small">
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        size="small"
                    >
                        Log In
                    </Button>
                </div>
                {/* <Link to="/create-account">Create Account</Link> */}
            </form>
        </div>
    );
}

export default LoginPage;
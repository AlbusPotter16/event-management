import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = function(event) {
        event.preventDefault();

        axios.post('http://localhost:3001/login', { email, password })
            .then(function (result) {
                console.log(result);
                if (result.data === "Success") {
                    console.log("Login Success");
                    alert('Login successful!');
                    navigate('/');
                } else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: "d-flex justify-content-center align-items-center text-center vh-100", style: { backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" } },
            React.createElement(
                'div',
                { className: "bg-white p-3 rounded", style: { width: '40%' } },
                React.createElement('h2', { className: 'mb-3 text-primary', style: { marginLeft: '245px', fontSize: '30px', fontWeight: '500', color: '#068bea' } }, 'Login'),
                React.createElement(
                    'form',
                    { onSubmit: handleSubmit },
                    React.createElement(
                        'div',
                        { className: "mb-3 text-start" },
                        React.createElement('label', { htmlFor: "exampleInputEmail1", className: "form-label" }, React.createElement('strong', null, 'Email Id')),
                        React.createElement('input', {
                            type: "email",
                            placeholder: "Enter Email",
                            className: "form-control",
                            id: "exampleInputEmail1",
                            onChange: function (event) { setEmail(event.target.value); },
                            required: true
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: "mb-3 text-start" },
                        React.createElement('label', { htmlFor: "exampleInputPassword1", className: "form-label" }, React.createElement('strong', null, 'Password')),
                        React.createElement('input', {
                            type: "password",
                            placeholder: "Enter Password",
                            className: "form-control",
                            id: "exampleInputPassword1",
                            onChange: function (event) { setPassword(event.target.value); },
                            required: true
                        })
                    ),
                    React.createElement('button', { type: "submit", className: "btn btn-primary" }, 'Login')
                ),
                React.createElement(
                    'p',
                    { className: 'container my-2' },
                    'Don\'t have an account?'
                ),
                React.createElement(
                    Link,
                    { to: '/register', className: "btn btn-secondary" },
                    'Register'
                )
            )
        )
    );
}

export default Login;

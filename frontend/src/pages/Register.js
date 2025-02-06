import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = function (event) {
        event.preventDefault();

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(function (result) {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
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
                React.createElement('h2', { className: 'mb-3 text-primary' }, 'Register'),
                React.createElement(
                    'form',
                    { onSubmit: handleSubmit },
                    React.createElement(
                        'div',
                        { className: "mb-3 text-start" },
                        React.createElement('label', { htmlFor: "exampleInputname", className: "form-label" }, React.createElement('strong', null, 'Name')),
                        React.createElement('input', {
                            type: "text",
                            placeholder: "Enter Name",
                            className: "form-control",
                            id: "exampleInputname",
                            onChange: function (event) { setName(event.target.value); },
                            required: true
                        })
                    ),
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
                    React.createElement('button', { type: "submit", className: "btn btn-primary" }, 'Register')
                ),
                React.createElement(
                    'p',
                    { className: 'container my-2' },
                    'Already have an account ?'
                ),
                React.createElement(
                    Link,
                    { to: '/login', className: "btn btn-secondary" },
                    'Login'
                )
            )
        )
    );
}

export default Register;

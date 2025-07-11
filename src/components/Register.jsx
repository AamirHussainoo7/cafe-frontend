import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
    const [error, setError] = useState();
    const [user, setUser] = useState({});
    const API_URL = import.meta.env.VITE_API_URL

    const handleSubmit = async () => {
        try {
            const url = "https://cafe-backend-three.vercel.app/api/users/register";
            // const url = `${API_URL}/api/users/register`;
            const result = await axios.post(url, user);
            setError("Data saved successfully");
        } catch (err) {
            console.log(err);
            setError("Something went wrong");
        }
    };

    return (
        <div className="register-container">
            <h2>Registration Form</h2>
            {error && <div className="error-message">{error}</div>}
            <p>
                <input type="text" placeholder="First name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
            </p>
            <p>
                <input type="text" placeholder="Last name" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
            </p>
            <p>
                <input type="text" placeholder="Email address" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </p>
            <p>
                <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </p>
            <p>
                <button onClick={handleSubmit}>Submit</button>
            </p>
        </div>
    );
}

export default Register;

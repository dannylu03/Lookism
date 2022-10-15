import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function LoginModal ({ closeModal, setUser }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        axios.post("http://localhost:8000/users/login", {
            username: username,
            password: password,
        }).then(res => {
            console.log(res.data)
            setUser(res.data)
            closeModal(false);
            navigate("/home");
        }).catch(err => console.log(err.message))
    };

    return (
        <div className="w-screen h-screen bg-transparent/[0.5] fixed flex justify-center items-center">
            <div className="w-1/2 rounded-md bg-timberwolf flex flex-col p-6">
                <div className="flex justify-end text-camel text-bold text-xl border-none">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                {/* Title */}
                <div className="inline-block text-left text-camel font-bold mt-2 text-3xl mb-5">
                    <h1 className="md-2 text-center">Welcome to Lookism</h1>
                </div>
                {/* Body */}
                <div className="flex justify-center items-center font-md text-center">
                    {/* Register Form */}
                    <form>  
                        <input label="Username" type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-md border-2 border-solid border-camel block p-1"/>
                        <input label="Password" type="password" placeholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-md border-2 border-solid border-camel block mt-2 p-1"/>
                    </form>
                </div>
                <div className="flex justify-center">
                    {/* login button */}
                    <button onClick={handleSubmit}
                        className="w-1/2 inline-block px-6 py-2.5 bg-camel text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:shadow-lg transition duration-150 ease-in-out mt-3">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
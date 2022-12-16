import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useState } from "react";

export default function Login() {

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setType('text');
            setIcon(eye);
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    }
    return (
        <div className="form_wrapper">
            <form className="grid place-items-center bg-green-700" >
                <br />
                <div className="input"><input name={"user"} autoFocus type="text" placeholder={"Email"} size={"25"} /><br /><br /></div>
                <div className="input"><input name={"user"} autoFocus type={type} placeholder={"Password"} size={"24"} /><span onClick={handleToggle}><Icon icon={icon}></Icon></span><br /><br /></div>

                <input type="submit" className="text-white bg-green-800 hover:cursor-pointer hover:bg-green-500" value="   Login    " /><br />
                <div className="text-white">______________________________________________</div><br />
                <Link to={"/register"}><input type="submit" className="text-white bg-green-800 hover:cursor-pointer hover:bg-green-500" value=" New User? Create Account  " /></Link><br />
            </form>
        </div>
    )
}
import React from "react";
import './Register.css';
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useState } from "react";

export default function Register() {
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

    const [type_, setType_] = useState('password');
    const [icon_, setIcon_] = useState(eyeOff);

    const handleToggle_ = () => {
        if (type_ === 'password') {
            setType_('text');
            setIcon_(eye);
        } else {
            setType_('password');
            setIcon_(eyeOff);
        }
    }
    return (
        <div>
            <div className="form_wrapper">
                <form className="grid place-items-center bg-green-700" >
                    <br />
                    <div className="input"><input name={"user"} autoFocus type="text" placeholder={" First Name"} size={"25"} /><br /><br /></div>
                    <div className="input"><input name={"user"} autoFocus type="text" placeholder={" Last Name"} size={"25"} /><br /><br /></div>
                    <div className="input"><input name={"user"} autoFocus type="text" placeholder={" Email"} size={"25"} /><br /><br /></div>
                    <div className="input"><input name={"user"} autoFocus type={type} placeholder={" Password"} size={"24"} /><span onClick={handleToggle}><Icon icon={icon}></Icon></span><br /><br /></div>
                    <div className="input"><input name={"user"} autoFocus type={type_} placeholder={" Confirm password"} size={"24"} /><span onClick={handleToggle_}><Icon icon={icon_}></Icon></span><br /><br /></div>
                    <input type={"button"} className="text-white bg-green-800 hover:cursor-pointer hover:bg-green-500" value="   Register Now    " /><br />
                </form>
            </div>
        </div>
    )
}
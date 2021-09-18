import React, { useState } from 'react'
import Input from '../../utils/input/Input';
import './autorization.css';
import { registration } from '../../actions/user';
const Registration = () => {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")


        return (
            <div className='autorization'>
                <div className="autorization__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите имя ..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль ..."/>
                        <button className="autorization__btn" onClick={()=> registration(email, password)}>Зарегистрироватся</button>  
            </div>
        )
    }

    export default Registration

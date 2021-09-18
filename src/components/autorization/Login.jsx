import React, { useState } from 'react'
import Input from '../../utils/input/Input';
import './autorization.css';
import {useDispatch} from 'react-redux';
import { login } from '../../actions/user';

const Login = () => {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
const dispatch = useDispatch() 

        return (
            <div className='autorization'>
                <div className="autorization__header">Авторизация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите имя ..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль ..."/>
                        <button className="autorization__btn" 
                        onClick={()=> dispatch(login(email,password))}>ВОЙТИ</button>  
            </div>
        )
    }

    export default Login

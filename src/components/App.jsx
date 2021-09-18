import React from 'react';
import Navbar from './navbar/Navbar';
import './app.css'
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import Registration from './autorization/Registration';
import Login from './autorization/Login';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react'
import {auth} from '../actions/user'
import Disk from './disk/Disk';

function App() {

const isAuth = useSelector(state=> state.user.isAuth)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(auth())
}, [])

  return (
<BrowserRouter>
   <div className="app">
    <Navbar/>
    <div className="wrap">
    {!isAuth ?
                        <Switch>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/login" component={Login}/>
                            <Redirect to='/login'/>
                        </Switch>
                        :
                        <Switch>
                            <Route exact path="/" component={Disk}/>
                            <Redirect to="/"/>
                        </Switch>
                    }
    
    </div> 
    
   </div>
   </BrowserRouter>
  );
}

export default App;

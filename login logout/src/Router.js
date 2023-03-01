import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Userinfo from './Userinfo'
import App from './App'
import Registration from './Registration'
import Navbar from './Navbar'
import { UserProvider } from './Usercontext'
import Login from './Login'


const Router = () => {
    return (
        <>
            <App />
            <Routes>
                {/* <Route path='/' element={<App />} />    */}
                <Route path='/Registration' element={<Registration />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Userinfo' element={<Userinfo />} />
            </Routes>
        </>
    )
}

export default Router
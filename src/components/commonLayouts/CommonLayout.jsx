import React from 'react'
import Container from './Container'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const CommonLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <footer>Footer</footer>
        </>
    )
}

export default CommonLayout
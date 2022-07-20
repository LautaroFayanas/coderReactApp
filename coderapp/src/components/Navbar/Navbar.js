import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink, Outlet } from 'react-router-dom'


export const Navbar = () => {
    return (
        <>
            <nav className=" navbar  navbar-expand-lg bg-dark ">
                <div className="container-fluid ">
                    <NavLink className={'text-decoration-none p-2 text-white'} to="/">Inicio</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <NavLink className={'text-decoration-none p-2 text-white'} to="/Tienda"> Tienda </NavLink>
                            <NavLink className={'text-decoration-none p-2 text-white'} to="/Formasdepago">Formas de pago</NavLink>
                            <NavLink className={'text-decoration-none p-2 text-white'} to="/Contacto">Contacto</NavLink>
                        </div>
                        <CartWidget count={1} />
                    </div>
                </div>
            </nav>
                <div className='m-auto w-100 text-center h5 p-4'>
                    <NavLink className={'text-decoration-none p-2 text-danger w-100 text-center'} to="/men's clothing">Hombres</NavLink>|
                    <NavLink className={'text-decoration-none p-2 text-danger w-100 text-center'} to="/jewelery">Joyas</NavLink>|
                    <NavLink className={'text-decoration-none p-2 text-danger w-100 text-center'} to="/electronics">Electronica</NavLink> |
                    <NavLink className={'text-decoration-none p-2 text-danger w-100 text-center'} to="/women's clothing">Mujeres</NavLink>
                </div>

                
            <Outlet />
        </>
    )
}


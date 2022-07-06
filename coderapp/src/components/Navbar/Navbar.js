import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'



export const Navbar = () => {
    return (

        <nav className=" navbar  navbar-expand-lg bg-dark ">
            <div className="container-fluid ">
                <a className="navbar-brand text-white" href="#">native.net</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active text-white" aria-current="page" href="#">Eventos</a>
                        <a className="nav-link text-white" href="#">Shopping</a>
                        <a className="nav-link text-white" href="#">Formas de pago</a>
                        <a className="nav-link text-white" href="#">Contacto</a>
                    </div>
                    <CartWidget count={1}/>
                </div>
            </div>
        </nav>

    )
}
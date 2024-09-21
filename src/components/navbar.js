import React from "react";
import Contact from "./contact_us/contact";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-dark d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-white"></i> <a href="#" className="text-white text-truncate">HTC Building, 250 Hoang Quoc Viet, Co Nhue, Cau Giay, Hanoi, Vietnam</a></small>
                        <small className="me-3"><i className="fas fa-envelope me-2 text-white"></i><a href="#" className="text-white">info@example.com</a></small>
                    </div>
                    <div className="top-link pe-2">
                        <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" className="text-white"><small className="text-white mx-2">Your Account</small>/</a>
                        <a href="#" className="text-white"><small className="text-white ms-2">Cart</small></a>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-dark navbar-expand-xl">
                    <Link to={'/'} className="navbar-brand"><h1 className="text-white display-6">HOMESTYLER</h1></Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-dark" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to={'/'} className="nav-item nav-link text-white active">Home</Link>
                            <Link to={'/designers-gallery'} className="nav-item nav-link text-white ">Designers Gallery</Link>
                            <Link to={'/shop'} className="nav-item nav-link text-white ">Products</Link>
                            <Link to={'/professtion'} className="nav-item nav-link text-white ">Professional Interior</Link>
                            <Link to={'/contact'} className="nav-item nav-link text-white ">Contact Us</Link>
                            <Link to={'/feedback'} className="nav-item nav-link text-white ">Feedback</Link>
                            <Link to={'/about'} className="nav-item nav-link text-white ">About Us</Link>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
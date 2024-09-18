import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div class="container-fluid fixed-top">
            <div class="container topbar bg-dark d-none d-lg-block">
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-white"></i> <a href="#" class="text-white">123 Street, New York</a></small>
                        <small class="me-3"><i class="fas fa-envelope me-2 text-white"></i><a href="#" class="text-white">Email@Example.com</a></small>
                    </div>
                    <div class="top-link pe-2">
                        <a href="#" class="text-white"><small class="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" class="text-white"><small class="text-white mx-2">Terms of Use</small>/</a>
                        <a href="#" class="text-white"><small class="text-white ms-2">Sales and Refunds</small></a>
                    </div>
                </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light bg-dark navbar-expand-xl">
                    <Link to={'/'} class="navbar-brand"><h1 class="text-white display-6">HOMESTYLER</h1></Link>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-dark" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">
                            <Link to={'/'} class="nav-item nav-link text-white active">Home</Link>
                            <Link to={'/'} class="nav-item nav-link text-white ">Design Styles</Link>
                            <Link to={'/'} class="nav-item nav-link text-white ">Professional Interior Designers Gallery </Link>
                            <Link to={'/'} class="nav-item nav-link text-white ">Products</Link>
                            <Link to={'/'} class="nav-item nav-link text-white ">Contact Us</Link>
                            <Link to={'/'} class="nav-item nav-link text-white ">Feedback</Link>
                            <Link to={'/'} class="nav-item nav-link text-white ">About Us</Link>

                            {/* <Link to={'/shop'} class="nav-item nav-link">Shop</Link>
                            <Link to={'/shop-detail/1'} class="nav-item nav-link">Shop Detail</Link> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
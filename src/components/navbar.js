import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div class="container-fluid fixed-top">
        <div class="container topbar bg-primary d-none d-lg-block">
            <div class="d-flex justify-content-between">
                <div class="top-info ps-2">
                    <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" class="text-white">123 Street, New York</a></small>
                    <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#" class="text-white">Email@Example.com</a></small>
                </div>
                <div class="top-link pe-2">
                    <a href="#" class="text-white"><small class="text-white mx-2">Privacy Policy</small>/</a>
                    <a href="#" class="text-white"><small class="text-white mx-2">Terms of Use</small>/</a>
                    <a href="#" class="text-white"><small class="text-white ms-2">Sales and Refunds</small></a>
                </div>
            </div>
        </div>
        <div class="container px-0">
            <nav class="navbar navbar-light bg-white navbar-expand-xl">
                <Link  to={'/'} class="navbar-brand"><h1 class="text-primary display-6">Fruitables</h1></Link>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <Link to={'/'} class="nav-item nav-link active">Home</Link>
                        <Link to={'/shop'} class="nav-item nav-link">Shop</Link>
                        <Link to={'/shop-detail/1'} class="nav-item nav-link">Shop Detail</Link>
                        
                    </div>
                    <div class="d-flex m-3 me-0">
                        
                        <a href="#" class="position-relative me-4 my-auto">
                            <i class="fa fa-shopping-bag fa-2x"></i>
                            <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: '-5px', left: '15px', height: '20px', minWidth: '20px'}}>3</span>
                        </a>
                        <Link to={'/login'} class="my-auto">
                            <i class="fas fa-user fa-2x"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    )
}
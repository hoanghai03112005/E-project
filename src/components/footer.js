export default function footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <div className="pb-4 mb-4" style={{ borderBottom: '1px solid #fff' }}>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <a href="#">
                                    <h1 className="text-white mb-0">HOMESTYLER</h1>
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mx-auto">
                                    <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
                                    <button type="submit" className="btn btn-dark border-1 border-white py-3 px-4 position-absolute rounded-pill text-white" style={{ top: '0', right: '0' }}>Subscribe Now</button>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">
                                    <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Why People Like us!</h4>
                                <p className="mb-4">typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                                <a href="/about" className="btn border-white py-2 px-4 rounded-pill text-white">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3" href="/">Home</h4>
                                <a className="btn-link" href="/professtion">Professional Interior</a>
                                <a className="btn-link" href="/designers-gallery">Designers Gallery</a>
                                <a className="btn-link" href="/shop">Products</a>
                                <a className="btn-link" href="/contact">Contact Us</a>
                                <a className="btn-link" href="/about">About Us</a>
                                <a className="btn-link" href="/about">Feedback</a>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Account</h4>
                                <a className="btn-link" href="">My Account</a>
                                <a className="btn-link" href="">Shop details</a>
                                <a className="btn-link" href="">Shopping Cart</a>
                                <a className="btn-link" href="">Wishlist</a>
                                <a className="btn-link" href="">Order History</a>
                                <a className="btn-link" href="">International Orders</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Contact</h4>
                                <p>Address: HTC Building, 250 Hoang Quoc Viet, Co Nhue, Cau Giay, Hanoi, Vietnam</p>
                                <p>Email: info@example.com</p>
                                <p>Phone: (+012) 3456 7890</p>
                                <p>Payment Accepted</p>
                                <img src="img/payment.png" className="img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
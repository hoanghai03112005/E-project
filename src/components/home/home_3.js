export default function Home_3() { // Featurs
    return (
        <>
            <div className="container service py-5">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <h1 className="tw-bold">Our Services</h1>
                        <div className="col-md-6 col-lg-4">
                            <a href="/designers-gallery">
                                <div className="service-item bg-white border-3 border-secondary border-dark hover-zoom">
                                    <img src="img/homeImage/bookcase1.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-dark text-center p-4 rounded">
                                            <h5 className="text-white">Interior Design</h5>
                                            <h3 className="mb-0 text-white">Villa</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="/designers-gallery">
                                <div className="service-item bg-white border-3 border-secondary border-dark">
                                    <img src="img/homeImage/sofa2.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-dark text-center p-4 rounded">
                                            <h5 className="text-white">Interior Design</h5>
                                            <h3 className="mb-0 text-white">Apartment</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="/designers-gallery">
                                <div className="service-item bg-white border-3 border-secondary border-dark">
                                    <img src="img/homeImage/sofa3.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-dark text-center p-4 rounded">
                                            <h5 className="text-white">Interior Design</h5>
                                            <h3 className="mb-0 text-white">Townhouse</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
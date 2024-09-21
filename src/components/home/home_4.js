export default function Home_4() { //Banner Section
    return (
        <>
            <div className="container-fluid banner bg-white my-5">
                <div className="container py-5">
                    <div className="row g-4 align-items-center">
                        <h1 classNameName="tw-bold">Design Interior</h1>
                        <div className="col-lg-7">
                            <a href="/shop">
                                <img src="img/homeImage/sofa1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                <div className="px-6 py-0">
                                    <div className="service-content bg-dark text-center p-4 rounded-bottom py-12">
                                        <h5 className="text-white">Living Room Furniture </h5>
                                        <button type="submit" className="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-5">
                            <a href="/shop">
                                <div className="px-6 py-0">
                                    <div className="service-content bg-dark text-center p-4 rounded-top">
                                        <h5 className="text-white">Bedroom Furniture</h5>
                                        <button type="submit" className="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
                                    </div>
                                </div>
                                <img src="img/homeImage/sofa2.jpg" className="img-fluid w-100 rounded-bottom" alt="" />
                            </a>
                        </div>
                        <div className="col-lg-5">
                            <a href="/shop">
                                <div className="px-6 py-0">
                                    <div className="service-content bg-dark text-center p-4 rounded-top">
                                        <h5 className="text-white">Kitchen Furniture</h5>
                                        <button type="submit" className="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
                                    </div>
                                </div>
                                <img src="img/homeImage/sofa3.jpg" className="img-fluid w-100 rounded-bottom" alt="" />
                            </a>
                        </div>

                        <div className="col-lg-7">
                            <a href="/shop">
                                <img src="img/homeImage/bookcase1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                <div className="px-6 py-0">
                                    <div className="service-content bg-dark text-center p-4 rounded-bottom">
                                        <h5 className="text-white">Children Furniture</h5>
                                        <button type="submit" className="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
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
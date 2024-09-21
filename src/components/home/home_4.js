export default function Home_4() { //Banner Section
    return (
        <>
            <div class="container-fluid banner bg-white my-5">
                <div class="container py-5">
                    <div class="row g-4 align-items-center">
                        <h1 className="tw-bold">Design Interior</h1>
                        <div class="col-lg-7">
                            <a href="/shop">
                                <img src="img/homeImage/sofa1.jpg" class="img-fluid w-100 rounded-top" alt="" />
                                <div class="px-6 py-0">
                                    <div class="service-content bg-dark text-center p-4 rounded-bottom py-12">
                                        <h5 class="text-white">Living Room Furniture </h5>
                                        <button type="submit" class="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-5">
                            <a href="/shop">
                                <div class="px-6 py-0">
                                    <div class="service-content bg-dark text-center p-4 rounded-top">
                                        <h5 class="text-white">Bedroom Furniture</h5>
                                        <button type="submit" class="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
                                    </div>
                                </div>
                                <img src="img/homeImage/sofa2.jpg" class="img-fluid w-100 rounded-bottom" alt="" />
                            </a>
                        </div>
                        <div class="col-lg-5">
                            <a href="/shop">
                                <div class="px-6 py-0">
                                    <div class="service-content bg-dark text-center p-4 rounded-top">
                                        <h5 class="text-white">Kitchen Furniture</h5>
                                        <button type="submit" class="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
                                    </div>
                                </div>
                                <img src="img/homeImage/sofa3.jpg" class="img-fluid w-100 rounded-bottom" alt="" />
                            </a>
                        </div>

                        <div class="col-lg-7">
                            <a href="/shop">
                                <img src="img/homeImage/bookcase1.jpg" class="img-fluid w-100 rounded-top" alt="" />
                                <div class="px-6 py-0">
                                    <div class="service-content bg-dark text-center p-4 rounded-bottom">
                                        <h5 class="text-white">Children Furniture</h5>
                                        <button type="submit" class="btn btn-dark bg-white border-1 border-dark rounded text-dark h-150">View</button>
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
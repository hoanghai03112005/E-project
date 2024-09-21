export default function Home_5() { //Fact 
    return (
        <>
            <div className="container-fluid py-5 mb-5  ">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7" style={{ position: 'relative' }} >
                            <img src="img/homeImage/banner1.jpg" className="img-fluid w-100 h-150 bg-secondary rounded" alt="First slide" />
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <h1 className="mb-4 display-5 text-dark">SOPHISTICATED INTERIOR</h1>
                            <p className="py-3">With over 24 years of experience in interior finishing, Nha Xinh offers comprehensive solutions including design, decoration and providing complete interior. With a professional team and a system of 10 stores, Nha Xinh is the choice for sophisticated and modern spaces.</p>
                            <a href="/about" type="submit" className="btn btn-dark border-2 rounded-pill text-white h-150">About Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
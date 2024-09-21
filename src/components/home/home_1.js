import { useNavigate } from 'react-router-dom';
export default function Home_1() { // carousel

    const navigate = useNavigate();
    var onSearch = (event) => {
        event.preventDefault()
        var keyword = event.target.keyword.value
        navigate(`/search/?query=${keyword}`, { replace: true });
    }

    return (
        <>
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active rounded">
                                        <img src="img/banner/banner1.jpg" className="img-fluid w-100 h-150 bg-secondary rounded" alt="First slide" />
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src="img/banner/banner2.jpg" className="img-fluid w-100 h-150 rounded" alt="Second slide" />
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src="img/banner/banner3.jpg" className="img-fluid w-100 h-150 rounded" alt="Third slide" />
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src="img/banner/banner4.jpg" className="img-fluid w-100 h-150 rounded" alt="Fourth slide" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <h1 className="mb-5 display-5 text-white">HOME IS THE SOURCE OF ALL HAPPINESS</h1>
                            <form className="position-relative mx-auto" onSubmit={onSearch}>
                                <input className="form-control border-2 border-secondary w-100 py-3 px-4 rounded-pill" type="text" placeholder="Search" name="keyword" />
                                <button type="submit" className="btn btn-dark border-2  py-7 px-4 position-absolute rounded-pill text-white h-100" style={{ top: "0", right: "0%" }}>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
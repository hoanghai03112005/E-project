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
            <div class="container-fluid py-5 mb-5 hero-header">
                <div class="container py-5">
                    <div class="row g-5 align-items-center">
                        <div class="col-md-12 col-lg-7">
                            <div id="carouselId" class="carousel slide position-relative" data-bs-ride="carousel">
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active rounded">
                                        <img src="img/banner/banner1.jpg" class="img-fluid w-100 h-150 bg-secondary rounded" alt="First slide" />
                                    </div>
                                    <div class="carousel-item rounded">
                                        <img src="img/banner/banner2.jpg" class="img-fluid w-100 h-150 rounded" alt="Second slide" />
                                    </div>
                                    <div class="carousel-item rounded">
                                        <img src="img/banner/banner3.jpg" class="img-fluid w-100 h-150 rounded" alt="Third slide" />
                                    </div>
                                    <div class="carousel-item rounded">
                                        <img src="img/banner/banner4.jpg" class="img-fluid w-100 h-150 rounded" alt="Fourth slide" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-5">
                            <h1 class="mb-5 display-5 text-white">HOME IS THE SOURCE OF ALL HAPPINESS</h1>
                            <form class="position-relative mx-auto" onSubmit={onSearch}>
                                <input class="form-control border-2 border-secondary w-100 py-3 px-4 rounded-pill" type="text" placeholder="Search" name="keyword" />
                                <button type="submit" class="btn btn-dark border-2  py-7 px-4 position-absolute rounded-pill text-white h-100" style={{ top: "0", right: "0%" }}>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
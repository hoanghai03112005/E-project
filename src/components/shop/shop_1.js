import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ReactPaginate from 'react-paginate';
export default function Shop_1() {
    const [sortOrder, setSortOrder] = useState("");
    var [test, setTest] = useState(false)
    var [products, setProducts] = useState([])



    const [currentPage, setCurrentPage] = useState(0);
    var [totalProduct, settotalProduct] = useState(0)
    const [itemsPerPage] = useState(6); // cứ 6 item sẽ là 1 trang

    const navigate = useNavigate();
    var onSearch = (event) => {

        var keyword = event.target.keyword.value
        navigate(`/search/${keyword}`, { replace: true });
    }


    useEffect(() => {
        if (!test) {
            fetchData();
        }
    }, [test]);



    var fetchData = async function () {
        setProducts([]) // xóa dữ liệu trước đó để k hiện chung với dữ liệu mới
        var res = await fetch(`http://localhost:3001/Fruits?_sort=${sortOrder}`)
        var data = await res.json()
       
        
            setProducts(prevFruit => [...prevFruit, ...data]);
            setTest(true);
            const totalPage = Math.ceil(data.length / itemsPerPage);
            settotalProduct(totalPage);
        
        
    }


    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
        setTest(false)
    };

    useEffect(() => {
        console.log(products)
    }, [products]);

    const indexOfLastItem = (currentPage + 1) * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItem = products.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    return (
        <>

            <div class="container-fluid fruite py-5">
                <div class="container py-5">
                    <h1 class="mb-4">Fresh fruits shop</h1>
                    <div class="row g-4">
                        <div class="col-lg-12">
                            <div class="row g-4">
                                <div class="col-xl-3">
                                    <form class="input-group w-100 mx-auto d-flex" onSubmit={onSearch}>
                                        <input type="text" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" name="keyword" />
                                        <button id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div class="col-6"></div>
                                <div class="col-xl-3">
                                    <form class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4" onChange={handleSortChange}>
                                        <label for="fruits">Sorting:</label>
                                        <select id="fruits" name="fruitlist" class="border-0 form-select-sm bg-light me-3" form="fruitform">
                                            <option value="">Mặc định</option>
                                            <option value="-price">Giảm dần theo giá</option>
                                            <option value="price">Tăng dần theo giá</option>
                                            <option value="name">Tăng dần theo tên</option>
                                            <option value="-name">Giảm dần theo tên</option>

                                        </select>

                                    </form>
                                </div>
                            </div>
                            <div class="row g-4">
                                <div class="col-lg-3">
                                    <div class="row g-4">
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <h4>Categories</h4>
                                                <ul class="list-unstyled fruite-categorie">
                                                    <li>
                                                        <div class="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i class="fas fa-apple-alt me-2"></i>Apples</a>
                                                            <span>(3)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i class="fas fa-apple-alt me-2"></i>Oranges</a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i class="fas fa-apple-alt me-2"></i>Strawbery</a>
                                                            <span>(2)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i class="fas fa-apple-alt me-2"></i>Banana</a>
                                                            <span>(8)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i class="fas fa-apple-alt me-2"></i>Pumpkin</a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <h4 class="mb-2">Price</h4>
                                                <input type="range" class="form-range w-100" id="rangeInput" name="rangeInput" min="0" max="500" value="0" oninput="amount.value=rangeInput.value" />
                                                <output id="amount" name="amount" min-velue="0" max-value="500" for="rangeInput">0</output>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <h4>Additional</h4>
                                                <div class="mb-2">
                                                    <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
                                                    <label for="Categories-1"> Organic</label>
                                                </div>
                                                <div class="mb-2">
                                                    <input type="radio" class="me-2" id="Categories-2" name="Categories-1" value="Beverages" />
                                                    <label for="Categories-2"> Fresh</label>
                                                </div>
                                                <div class="mb-2">
                                                    <input type="radio" class="me-2" id="Categories-3" name="Categories-1" value="Beverages" />
                                                    <label for="Categories-3"> Sales</label>
                                                </div>
                                                <div class="mb-2">
                                                    <input type="radio" class="me-2" id="Categories-4" name="Categories-1" value="Beverages" />
                                                    <label for="Categories-4"> Discount</label>
                                                </div>
                                                <div class="mb-2">
                                                    <input type="radio" class="me-2" id="Categories-5" name="Categories-1" value="Beverages" />
                                                    <label for="Categories-5"> Expired</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <h4 class="mb-3">Featured products</h4>
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rounded me-4" style={{ width: ' 100px', height: '100px' }}>
                                                    <img src="img/featur-1.jpg" class="img-fluid rounded" alt="" />
                                                </div>
                                                <div>
                                                    <h6 class="mb-2">Big Banana</h6>
                                                    <div class="d-flex mb-2">
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="d-flex mb-2">
                                                        <h5 class="fw-bold me-2">2.99 $</h5>
                                                        <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rounded me-4" style={{ width: '100px', height: '100px' }}>
                                                    <img src="img/featur-2.jpg" class="img-fluid rounded" alt="" />
                                                </div>
                                                <div>
                                                    <h6 class="mb-2">Big Banana</h6>
                                                    <div class="d-flex mb-2">
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="d-flex mb-2">
                                                        <h5 class="fw-bold me-2">2.99 $</h5>
                                                        <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="rounded me-4" style={{ width: '100px', height: '100px' }}>
                                                    <img src="img/featur-3.jpg" class="img-fluid rounded" alt="" />
                                                </div>
                                                <div>
                                                    <h6 class="mb-2">Big Banana</h6>
                                                    <div class="d-flex mb-2">
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star text-secondary"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="d-flex mb-2">
                                                        <h5 class="fw-bold me-2">2.99 $</h5>
                                                        <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-center my-4">
                                                <a href="#" class="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">View More</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="position-relative">
                                                <img src="img/banner-fruits.jpg" class="img-fluid w-100 rounded" alt="" />
                                                <div class="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                                                    <h3 class="text-secondary fw-bold">Fresh Fruits <br /> Banner</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="row g-4 justify-content-center">
                                        {
                                            currentItem.map(item => {
                                                return (
                                                    <div class="col-md-4" >
                                                        <div class="rounded position-relative fruite-item" key={item.id}>
                                                            <div class="fruite-img">
                                                                <Link to={`http://localhost:3000/shop-detail/${item.id}`}><img src={item.img} class="img-fluid w-100 rounded-top" alt="" /></Link>
                                                            </div>
                                                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Fruits</div>
                                                            <div class="p-4 border border-secondary border-top-0 rounded-bottom" >
                                                                <h4>{item.name}</h4>
                                                                <p>{item.description}</p>
                                                                <div class="d-flex justify-content-between flex-lg-wrap">
                                                                    <p class="text-dark fs-5 fw-bold mb-0">${item.price}/ kg</p>
                                                                    <Link to={`http://localhost:3000/shop-detail/${item.id}`} class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> View Detail</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalProduct}
                previousLabel="< previous"

                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"

            />
        </>



    )
}
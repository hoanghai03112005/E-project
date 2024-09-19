import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-responsive-pagination'

export default function Shop_2() {
    const [sortOrder, setSortOrder] = useState("");
    const [products, setProducts] = useState([]);
    const [cats, setCats] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [itemsPerPage] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [sortOrder, selectedCategory]);

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3001/Fruits?_sort=${sortOrder}`);
        const data = await res.json();
        const uniqueCategory = [...new Set(data.map(fruit => fruit.category))];
        setCats(uniqueCategory);

        // Lọc dữ liệu dựa trên danh mục đã chọn
        const filtered = selectedCategory === "" ? data : data.filter(product => product.category === selectedCategory);
        setProducts(filtered);
        setFilteredProducts(filtered);
        setTotalProduct(Math.ceil(filtered.length / itemsPerPage));
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        // Khi lọc hoặc sắp xếp thay đổi, cập nhật trang và số trang
        setTotalProduct(Math.ceil(filteredProducts.length / itemsPerPage));
        setCurrentPage(0);
    }, [filteredProducts]);

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    return (
        <>
            <div className="container-fluid fruite py-6">
                <div className="container py-6">
                    <h1 className="mb-4 py-5"></h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <form className="input-group w-100 mx-auto d-flex" onSubmit={event => {
                                        event.preventDefault();
                                        const keyword = event.target.keyword.value;
                                        localStorage.setItem('searchKeyword', keyword);
                                        navigate(`/search?query=${encodeURIComponent(keyword)}`, { replace: true });
                                    }}>
                                        <input type="text" className="form-control border-2 p-2 " placeholder="search" aria-describedby="search-icon-1" name="keyword" />
                                        <button id="search-icon-1" className="input-group-text p-3 bg-dark"><i className="fa fa-search text-white"></i></button>
                                    </form>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">
                                    <form className="bg-white ps-3 border-2 py-3 rounded d-flex justify-content-between mb-4" onChange={handleSortChange}>
                                        <label htmlFor="fruits">Showing:</label>
                                        <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3">
                                            <option value="">SORT BY</option>
                                            <option value="-price">PRICE (HIGH-LOW)</option>
                                            <option value="price">PRICE (LOW-HIGH)</option>
                                            <option value="name">RISE (NAME)</option>
                                            <option value="-name">DOWN (NAME)</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4 className="text-right">Products Categories</h4>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div onClick={() => handleCategoryClick("")} className="d-flex justify-content-center fruite-name">
                                                            <a className="text-dark fw-bold" href="#">All</a>
                                                        </div>
                                                    </li>
                                                    {cats.map((item, index) => (
                                                        <div class="dropdown">
                                                            <button type="button" className="btn btn-white border-0 border-dark dropdown-toggle w-100" data-bs-toggle="dropdown" key={index}>
                                                                <a className="text-dark fw-bold" href="#">{item}</a>
                                                            </button>
                                                            <ul class="dropdown-menu w-100 justify-content-center">
                                                                {cats.map((item, index) => (
                                                                    <li className="border-1" key={index}><a class="dropdown-item text-dark fw-bold text-center" href="#">{item}</a></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                        {currentItem.map(item => (
                                            <div className="col-md-4" key={item.id}>
                                                <div className="rounded position-relative fruite-item">
                                                    <div className="fruite-img">
                                                        <Link to={`http://localhost:3000/shop-detail/${item.id}`}><img src={item.img} className="img w-100 rounded-top" alt="" /></Link>
                                                    </div>
                                                    <div className="text-white bg-dark px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Sale 15%</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>{item.name}</h4>
                                                        <p className="text-truncate">{item.description}</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">${item.price}/ kg</p>
                                                            <Link to={`http://localhost:3000/shop-detail/${item.id}`} className="btn border border-secondary bg-dark rounded-pill px-3 text-white"><i className="fa fa-shopping-bag me-2 text-white"></i> View Detail</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <nav aria-label="Page navigation example">
                                            <ReactPaginate
                                                breakLabel="..."
                                                nextLabel=">"
                                                onPageChange={handlePageClick}
                                                pageRangeDisplayed={5}
                                                pageCount={totalProduct}
                                                previousLabel="<"
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link bg-dark border-white text-white"
                                                previousClassName="page-item"
                                                previousLinkClassName="page-link bg-dark border-white text-white"
                                                nextClassName="page-item"
                                                nextLinkClassName="page-link bg-dark border-white text-white"
                                                breakClassName="page-item"
                                                breakLinkClassName="page-link"
                                                containerClassName="pagination"
                                                activeClassName="active"
                                            />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

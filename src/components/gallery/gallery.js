import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


export default function Gallery() {
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
        const res = await fetch(`http://localhost:3001/design_styles`);
        const data = await res.json();

        const uniqueCategory = [...new Set(data.map(fruit => fruit.category))];
        setCats(uniqueCategory);

        // Lọc dữ liệu dựa trên danh mục đã chọn
        const filtered = selectedCategory === "" || selectedCategory === "All" ? data : data.filter(product => product.category === selectedCategory);
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

                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">

                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4 className="text-right">Products Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    <li>
                                                        <div onClick={() => handleCategoryClick("All")} className="d-flex justify-content-between fruite-name">
                                                            <Link onClick={() => handleCategoryClick("All")} className="text-dark tw-bold">All</Link>
                                                        </div>
                                                    </li>
                                                    {cats.map((item, index) => (
                                                        <li key={index}>
                                                            <div
                                                                onClick={() => handleCategoryClick(item)}
                                                                className="d-flex justify-content-between fruite-name"
                                                            >
                                                                <Link onClick={() => handleCategoryClick(item)} className="text-dark">{item}</Link>
                                                            </div>
                                                        </li>
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
                                                        <Link to={`http://localhost:3000/design-detail/${item.id}`}><img src={item.img} className="img w-100 rounded-top" alt="" style={{ height: "200px" }} /></Link>
                                                    </div>
                                                    <div className="text-white bg-danger px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Sale 15%</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>{item.name}</h4>
                                                        <p className="text-truncate">{item.description}</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">${item.price}</p>
                                                            <Link to={`http://localhost:3000/design-detail/${item.id}`} className="btn border border-secondary bg-dark rounded-pill px-3 text-white"><i className="fa fa-shopping-bag me-2 text-white"></i> View Detail</Link>
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

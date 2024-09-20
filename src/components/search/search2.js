import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

export default function Search2() {
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    const [totalProduct, setTotalProduct] = useState(0);
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category'); // Lấy `categoryId` từ URL
    const searchQuery = queryParams.get('query') || localStorage.getItem('searchKeyword'); // Lấy từ khóa từ query hoặc localStorage

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3001/products');
            const data = await res.json();
            setProducts(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (category && category !== 'all') {
            filtered = filtered.filter(product => product.categoryId === parseInt(category)); // Lọc theo `categoryId`
        }

        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Lọc theo từ khóa tìm kiếm
            );
        }

        setFilteredProducts(filtered);
    }, [products, category, searchQuery]);



    return (
        <div className="container">
            <div className="row">
                {filteredProducts.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                                <Link to={`http://localhost:3000/shop-detail/${product.id}`}>
                                    <img src={product.img} className="img w-100 rounded-top" alt={product.name} />
                                </Link>
                            </div>
                            <div className="bg-danger text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
                                -15%
                            </div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">{product.price}/ kg</p>
                                    <Link to={`http://localhost:3000/shop-detail/${product.id}`} className="btn  btn-dark border border-secondary rounded-pill px-3 text-white">
                                        <i className="fa fa-shopping-bag me-2 text-white"></i> View Detail
                                    </Link>
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
    );
}

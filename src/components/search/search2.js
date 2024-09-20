import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Search2() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category'); // Lấy `categoryId` từ URL
    const searchQuery = queryParams.get('query') || localStorage.getItem('searchKeyword'); // Lấy từ khóa từ query hoặc localStorage

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
        <div>
            {filteredProducts.map(product => (
                <div className="col-md-4" key={product.id}>
                    <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                            <Link to={`http://localhost:3000/shop-detail/${product.id}`}>
                                <img src={product.img} className="img w-100 rounded-top" alt={product.name} />
                            </Link>
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
                            Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">{product.price}/ kg</p>
                                <Link to={`http://localhost:3000/shop-detail/${product.id}`} className="btn border border-secondary rounded-pill px-3 text-primary">
                                    <i className="fa fa-shopping-bag me-2 text-primary"></i> View Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

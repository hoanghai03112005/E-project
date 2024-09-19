import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

export default function Shop_1() {
    const [sortOrder, setSortOrder] = useState("");
    const [products, setProducts] = useState([]);
    const [cats, setCats] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [itemsPerPage] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openCategory, setOpenCategory] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch danh mục
                const categoriesRes = await fetch('http://localhost:3001/categories');
                const categoriesData = await categoriesRes.json();
                console.log("Categories Data:", categoriesData);

                // Chuyển đổi cấu trúc đối tượng danh mục thành mảng
                const transformedCategories = Object.keys(categoriesData).map(categoryKey => ({
                    name: categoryKey,
                    products: categoriesData[categoryKey]
                }));
                setCats(transformedCategories);

                // Fetch sản phẩm
                const res = await fetch(`http://localhost:3001/products?_sort=${sortOrder}`);
                const data = await res.json();
                console.log("Products Data:", data);

                // Nếu dữ liệu sản phẩm là một mảng chứa một mảng
                const productsArray = Array.isArray(data) && Array.isArray(data[0]) ? data[0] : data;
                console.log("Flattened Products Array:", productsArray);

                let filtered = [];

                if (selectedCategory === "All") {
                    // Hiển thị tất cả sản phẩm nếu "All" được chọn
                    filtered = productsArray;
                } else {
                    // Lọc sản phẩm theo danh mục nếu một danh mục cụ thể được chọn
                    const selectedCat = transformedCategories.find(cat => 
                        cat.products.some(product => product.name === selectedCategory)
                    );

                    if (selectedCat) {
                        filtered = productsArray.filter(product => 
                            selectedCat.products.some(p => p.name === selectedCategory && p.id === product.categoryId)
                        );
                    }
                }

                console.log("Filtered Products:", filtered);

                setProducts(filtered);
                setFilteredProducts(filtered);
                setTotalProduct(Math.ceil(filtered.length / itemsPerPage));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [sortOrder, selectedCategory, itemsPerPage]);

    useEffect(() => {
        setTotalProduct(Math.ceil(filteredProducts.length / itemsPerPage));
        setCurrentPage(0);
        console.log("Filtered Products (useEffect):", filteredProducts);
    }, [filteredProducts, itemsPerPage]);

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleCategoryClick = (category) => {
        if (category === "All") {
            // Khi nhấn vào "All", đặt lại selectedCategory và mở tất cả danh mục
            setSelectedCategory("All");
            setOpenCategory(null); // Đóng tất cả danh mục
        } else {
            // Xử lý nhấn vào danh mục lớn
            setOpenCategory(openCategory === category ? null : category);
            setSelectedCategory("All"); // Đặt lại khi mở danh mục lớn
        }
    };

    const handleSubCategoryClick = (subCategory) => {
        setSelectedCategory(subCategory);
        setOpenCategory(null); // Đóng danh mục khi chọn một danh mục con
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const safeIndexOfLastItem = Math.min(indexOfLastItem, filteredProducts.length);
    const safeIndexOfFirstItem = Math.min(indexOfFirstItem, filteredProducts.length);

    const currentItem = filteredProducts.slice(safeIndexOfFirstItem, safeIndexOfLastItem);

    console.log("Current Item:", currentItem);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Fresh fruits shop</h1>
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
                                        <input type="text" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" name="keyword" />
                                        <button id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">
                                    <form className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4" onChange={handleSortChange}>
                                        <label htmlFor="fruits">Sorting:</label>
                                        <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3">
                                            <option value="">Mặc định</option>
                                            <option value="-price">Giảm dần theo giá</option>
                                            <option value="price">Tăng dần theo giá</option>
                                            <option value="name">Tăng dần theo tên</option>
                                            <option value="-name">Giảm dần theo tên</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    <li>
                                                        <div onClick={() => handleCategoryClick("All")} className="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>All</a>
                                                        </div>
                                                    </li>
                                                    {cats.map((item, index) => (
                                                        <li key={index}>
                                                            <div 
                                                                onClick={() => handleCategoryClick(item.name)} 
                                                                className="d-flex justify-content-between fruite-name"
                                                            >
                                                                <a href="#"><i className="fas fa-apple-alt me-2"></i>{item.name}</a>
                                                            </div>
                                                            {openCategory === item.name && (
                                                                <ul className="list-unstyled ps-4">
                                                                    {item.products.map(product => (
                                                                        <li key={product.id}>
                                                                            <a href="#" onClick={() => handleSubCategoryClick(product.name)}>{product.name}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
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
                                                        <Link to={`http://localhost:3000/shop-detail/${item.id}`}><img src={item.img} className="img w-100 rounded-top" alt="" /></Link>
                                                    </div>
                                                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Fruits</div>
                                                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                        <h4>{item.name}</h4>
                                                        <p>{item.description}</p>
                                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                                            <p className="text-dark fs-5 fw-bold mb-0">${item.price}</p>
                                                            <Link to={`http://localhost:3000/shop-detail/${item.id}`} className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> View Detail</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
    );
}

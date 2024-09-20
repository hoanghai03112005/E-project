import { useParams } from "react-router-dom";
import Search2 from "./search2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Search1() {
    const { name } = useParams();
    const [cats, setCats] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openCategory, setOpenCategory] = useState(null);
    const navigate = useNavigate();
    const [sortOrder, setSortOrder] = useState("");

    const fetchData = async () => {
        const categoriesRes = await fetch('http://localhost:3001/categories');
        const categoriesData = await categoriesRes.json();

        const transformedCategories = Object.keys(categoriesData).map(categoryKey => ({
            name: categoryKey,
            products: categoriesData[categoryKey]
        }));
        setCats(transformedCategories);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCategoryClick = (category) => {
        if (category === "All") {
            setSelectedCategory("All");
            const searchKeyword = localStorage.getItem('searchKeyword') || '';
            navigate(`/search?query=${encodeURIComponent(searchKeyword)}`);
        } else {
            setOpenCategory(openCategory === category ? null : category);
            setSelectedCategory("All");
        }
    };

    const handleSubCategoryClick = (subCategoryId) => {
        const searchKeyword = localStorage.getItem('searchKeyword') || '';
        navigate(`/search?query=${encodeURIComponent(searchKeyword)}&category=${subCategoryId}`);
    };

    return (
        <>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="row g-4 py-6">
                        <div className="col-lg-12 py-6">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <form className="input-group w-100 mx-auto d-flex" onSubmit={event => {
                                        event.preventDefault();
                                        const keyword = event.target.keyword.value;
                                        localStorage.setItem('searchKeyword', keyword);
                                        navigate(`/search?query=${encodeURIComponent(keyword)}`, { replace: true });
                                    }}>
                                        <input type="text" className="form-control" placeholder="Search" aria-describedby="search-icon-1" name="keyword" />
                                        <button id="search-icon-1" className="btn-dark input-group-text p-3 text-white "><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3 py-5">
                                                <h4>Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    <li>
                                                        <div onClick={() => handleCategoryClick("All")} className="d-flex justify-content-between fruite-name">
                                                            <Link onClick={() => handleCategoryClick("All")} className="text-dark tw-bold">All</Link>
                                                        </div>
                                                    </li>
                                                    {cats.map((item, index) => (
                                                        <li key={index}>
                                                            <div
                                                                onClick={() => handleCategoryClick(item.name)}
                                                                className="d-flex justify-content-between fruite-name"
                                                            >
                                                                <Link onClick={() => handleCategoryClick(item.name)} className="text-dark">{item.name}</Link>
                                                                <i class="bi bi-caret-down-fill"></i>
                                                            </div>
                                                            {openCategory === item.name && (
                                                                <ul className="list-unstyled ps-4">
                                                                    {item.products.map(product => (
                                                                        <li className="d-flex justify-content-start" key={product.id}>
                                                                            <Link className="text-dark" onClick={() => handleSubCategoryClick(product.name)}>{product.name}</Link>
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
                                        <Search2 name={name} />
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

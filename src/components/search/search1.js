import { useParams } from "react-router-dom"
import Search2 from "./search2"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Search1() {
    const { name } = useParams()
    const [cats, setCats] = useState([]);
    const navigate = useNavigate()

    const fetchData = async function () {
        var res = await fetch('http://localhost:3001/Fruits')
        var data = await res.json()
        const uniqueCategory = [...new Set(data.map(fruit => fruit.category))];
        setCats(uniqueCategory);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleCategoryClick = (category) => {
        const searchKeyword = localStorage.getItem('searchKeyword') || '';
        navigate(`/search?query=${encodeURIComponent(searchKeyword)}&category=${encodeURIComponent(category)}`);
    };



    return (
        <>

            <div class="container-fluid fruite py-5">
                <div class="container py-5">
                    <h1 class="mb-4">Fresh fruits shop</h1>
                    <div class="row g-4">
                        <div class="col-lg-12">
                            <div class="row g-4">

                                <div class="col-6"></div>
                                <div class="col-xl-3">

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
                                                        <div onClick={() => handleCategoryClick("")} className="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>All</a>
                                                        </div>
                                                    </li>
                                                    {cats.map((item, index) => (
                                                        <li key={index}>
                                                            <div className="d-flex justify-content-between fruite-name" onClick={() => handleCategoryClick(item)}>
                                                                <a href="#"><i className="fas fa-apple-alt me-2"></i>{item}</a>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="row g-4 justify-content-center">
                                        <Search2 name={name} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
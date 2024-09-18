import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
product
export default function Shop_2() {
    var [test, setTest] = useState(false)
    var [product, setProduct] = useState([])

    const [currentPage, setCurrentPage] = useState(0);
    var [totalProduct, settotalProduct] = useState(0)
    const [itemsPerPage] = useState(9); // cứ 9 item sẽ là 1 trang

    useEffect(function() {
        if (!test) {
            fetchData()
        }
    }, [test])

    var fetchData = async function () {
        var res = await fetch('http://localhost:3001/Fruits')
        var data = await res.json()
        setProduct(prevFruit => [...prevFruit, ...data])
        setTest(true)
        const totalPage = Math.ceil(data.length / itemsPerPage)
        settotalProduct(totalPage)
    }

    const indexOfLastItem = (currentPage + 1) * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItem = product.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    return(
        <>
            {
                currentItem.map(item => {
                    return (
                        <div class="col-md-4" >
                                        <div class="rounded position-relative fruite-item" key={item.id}>
                                            <div class="fruite-img">
                                                <Link to={`http://localhost:3000/shop-detail/${item.id}`}><img src={item.img} class="img-fluid w-100 rounded-top" alt="" /></Link>
                                            </div>
                                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: '10px', left: '10px'}}>Fruits</div>
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
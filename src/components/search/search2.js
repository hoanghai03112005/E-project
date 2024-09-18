import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function Search2() {
    var [product, setProduct] = useState([])
    var [test, setTest] = useState(false)
    const {name} = useParams()


    useEffect(function() {
        if( !test ) {
            fetchData()
        }
    }, [test])

    const fetchData = async function () {
        var res = await fetch('http://localhost:3001/Fruits')
        var data = await res.json()
        setProduct(prevFruit => [...prevFruit, ...data])
        setTest(true)
    }


    var selectName = product.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    return (
        <>
            {
                selectName.map(item => {
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
                                                    <p class="text-dark fs-5 fw-bold mb-0">{item.price}/ kg</p>
                                                    <Link to={`http://localhost:3000/shop-detail/${item.id}`} class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> View Detail</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    )
                    
                })
            }
        </>
    )
}
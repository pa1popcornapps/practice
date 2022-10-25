import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css'
import { Link } from 'react-router-dom';
export default function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)
    const { id, title, image, price, category } = products
    return (
        <div className="App">
            <div className="row row-cols-4">
                {
                    products.map((item) => {
                        return (
                            <div className="col">
                                <Link to={`/product/${item.id}`}>
                                <div style={{ height:"350px",background: "white", borderRadius: "25px", margin: "7px", textAlign: "center" }}>
                                    <img src={item.image} alt={title} style={{ width: "150px",height:"150px",padding:"7px"}} />
                                    <div>{item.title}</div>
                                    <div>${item.price}</div>
                                </div>
                                </Link>
                            </div>
                        )
                    })}

            </div>
        </div>
    );
}
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
export default function ProductDetail() {
    const products = useSelector((state) => state.product)
    const { id, title, image, price, category ,description} = products
    const productId = useParams()
    const dispatch = useDispatch()
    console.log(productId)
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log('Err', err)
        })
        dispatch(selectedProduct(response.data))
        console.log()
    }
    useEffect(() => {
        if (productId != "" && productId) {
            fetchProductDetail()
        }
    }, [productId])
    console.log(products)
    return (
        <div className="App">
            <h5>Product Detail</h5>
            {
                products.map((item) => {
                    return (
                        <div className="col">
                                <div style={{ height: "250px", background: "white", borderRadius: "25px", margin: "7px", textAlign: "center" }}>
                                    <img src={item.image} alt={title} style={{ width: "150px", height: "150px", padding: "7px" }} />
                                    <div>{item.title}</div>
                                    <div>${item.price}</div>
                                    <div>${item.description}</div>
                                </div>
                        </div>
                    )
                })}
        </div>
    );
}
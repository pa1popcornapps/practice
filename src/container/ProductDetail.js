import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
export default function ProductDetail() {
    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product
    console.log(product)
    const { productId } = useParams()
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log('Err', err)
        })
        dispatch(selectedProduct(response.data))
        console.log(response.data)
    }
    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail()
        }
    }, [productId])
    return (
        <div className="App p-5">
            <h2>Product Detail</h2>
            <div style={{ height: "auto", background: "white", borderRadius: "25px", margin: "25px", padding: "11px",  textAlign: "center" }}>
                <div><h3>{category} </h3></div>
                <img src={image} alt={title} style={{ width: "150px", height: "150px"}} />
                <div><h5>{title}</h5></div>
                <div><h4>${price}</h4></div>
                <div>{description}</div>
            </div>
        </div>
    );
}
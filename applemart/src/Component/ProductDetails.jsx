import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';
const ProductDetails = () => {
    {/*Now we need a product id which is passed through the product page  */ }
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0]
    console.log(product)
    return (

        <>
            <div className="container my-5  d-flex">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="500px" />
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center mx-auto">
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr />
                    <h2 className='my-4'>{product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                <button className='btn btn-outline-primary my-5'>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails

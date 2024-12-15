import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../data/api';
import ReactImageMagnify from 'react-image-magnify';
const ProductDetail = () => {
    const {id} = useParams();
    const detail = product.find((x)=>x.id ==id )
    const [img , setImg]= useState(detail.image)
  return (
   <div className="container bootdey my-5">
  <div className="row">
    <section className="panel">
      <div className="row">
      <div className="col-md-6">
      <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:img
    },
    largeImage: {
        src: img,
        width: 1200,
        height: 1800
    }
}} />
  {/* Use the img state instead of detail.image */}
  {/* <img 
    src={img} 
    alt="Product" 
    className="img-fluid" 
    style={{ aspectRatio: 3 / 2, objectFit: "contain" }} 
  /> */}
  <div className="pro-img-list">
    {
      detail.images.map((x, index) => {
        return (
          <a href="#" key={index}>
            <img 
              src={x} 
              alt={`Thumbnail ${index + 1}`} 
              style={{ width: "100px", height: "80px", cursor: "pointer" }} 
              onClick={() => setImg(x)} 
            />
          </a>
        );
      })
    }
  </div>
</div>

        <div className="col-md-6">
          <h4 className="pro-d-title">
            <a href="#" className>
              {detail.title}
            </a>
          </h4>
          <p>
          {detail.description}
          </p>
          <div className="product_meta">
            <span className="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">Jackets</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
            <span className="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#">mens</a>, <a rel="tag" href="#">womens</a>.</span>
          </div>
          <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">$544</span>  <span className="pro-price"> $300.00</span></div>
          <div className="form-group">
            <label>Quantity</label>
            <input type="quantiy" placeholder={1} className="form-control quantity" />
          </div>
          <p>
            <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button>
          </p>
        </div>
      </div>
    </section>
  </div>
</div>

  )
}

export default ProductDetail

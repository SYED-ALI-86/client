import React from 'react'
import { saree } from '../data/Saree/lenghaCholiPage2'
import { Link } from 'react-router-dom'

const Saree = () => {
    return (
        <div className='container'>
          <div className="row">
          {
            saree.map((x)=>{
     
              return(
                <div className='col-md-4 col-lg-3 col-sm-6 col-12 my-2'>
    <div className="card" style={{width: '100%'}}>
     <Link to={`/saree/${x.slug}`}>
     <img src={x.image}

      className="card-img-top img-fluid py-3" alt="..."  style={{aspectRatio:3/2, objectFit:"contain", cursor:"pointer"}}/>
     </Link>
      <div className="card-body">
        <h5 className="card-title">{x.title.slice(0,20)}</h5>

    <div className='d-flex justify-content-between'>
    <p>
      <span className='price' >Price: {x.price} $</span>
    
    
    </p>   <p>
    <span>Price: <strong>{x.discountprice}</strong> $</span>
    </p>
    </div>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    
    
                </div>
              )
            })
          }
          
          </div>
    
        </div>
      )
}

export default Saree

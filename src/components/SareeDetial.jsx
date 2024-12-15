import React from 'react'
import { useParams } from 'react-router-dom'
import { saree } from '../data/Saree/lenghaCholiPage2';

const SareeDetial = () => {
    const {slug}= useParams();
    const detail = saree.find((x)=>x.slug == slug)
  return (
    <div>
      <img src={detail.image} alt="" />
    </div>
  )
}

export default SareeDetial

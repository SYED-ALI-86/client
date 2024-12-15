import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Jobdetail = () => {
    const {id}= useParams();
    const [detail , setDetail]= useState(null)
    const getdetail = async()=>{
     let response = await axios.get(`http://localhost:8000/api/getbyid/${id}`)
     setDetail(response.data.job)
    }
    useEffect(()=>{
      getdetail()
    },[detail,id])
  return (
    <div className='detail'>
        {detail && <h1>{detail.title}</h1>}
        {detail && <p>{detail.description}</p>}
        {detail && <p>{detail.location}</p>}
        {detail && <p>{detail.salary}</p>}
        
      
    </div>
  )
}

export default Jobdetail

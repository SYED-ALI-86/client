import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Jobdetail = () => {
    const [data, setData]=useState([])
const getdata= async()=>{
    const response = await axios.get("http://localhost:8000/api/getjob",)
    console.log(response.data.job);
    setData(response.data.job)
}

useEffect(()=>{
    getdata()
},[])

  return (
    <div className=''>
        <h1>Job Details</h1>
 
        {data.map((item)=>(
            <div key={item._id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
   
        {/* <button onClick={handleSubmit}>Submit</button> */}
      
    </div>
  )
}

export default Jobdetail

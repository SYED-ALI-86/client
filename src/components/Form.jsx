import axios from 'axios';
import React, { useState } from 'react'

const Form = ({setShow}) => {
    const [formdata , setFormdata]=useState({
        title:'',
        description:'',
        location:'',
        salary:'',
        company:''
    })
    const submitHandler = async(e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/api/createjob",formdata)
        console.log(response);

        console.log(formdata);
    }
  return (
    <div className='container'>
        <h2>Post job </h2>
        <form onSubmit={submitHandler} className=''>
            <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" className="form-control" id="title" onChange={(e)=>setFormdata({
                    ...formdata, title:e.target.value
                })} placeholder="Enter title" />
            </div>
            <div className="form-group">
                <label for="description">Description:</label>
                <textarea className="form-control" id="description" onChange={(e)=>setFormdata({
                    ...formdata, description:e.target.value
                })} rows="3" placeholder="Enter description" />
            </div>
            <div className="form-group">
                <label for="location">Location:</label>
                <input type="text" className="form-control" id="location" onChange={(e)=>setFormdata({
                    ...formdata, location:e.target.value
                })} placeholder="Enter location" />
            </div>
            <div className="form-group">
                <label for="salary">Salary:</label>
                <input type="number" className="form-control"
                onChange={(e)=>setFormdata({
                    ...formdata, salary:e.target.value
                })} id="salary" placeholder="Enter salary" />
            </div>
            <div className="form-group">
                <label for="company">Company:</label>
                <input type="text" className="form-control" id="company" onChange={(e)=>setFormdata({
                    ...formdata, company:e.target.value
                })} placeholder="Enter your company" />
            </div> 

            <button type="submit" className="btn btn-primary mt-3" onClick={setShow(false)} >Submit</button>
        </form>
      
    </div>
  )
}

export default Form

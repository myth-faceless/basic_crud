import React, { useState } from 'react'

const Register = () => {

    const [getData, setData] = useState({
        name:"",
        email:"",
        occupation:"",
        contact:"",
        address:"",
        description:""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const {name,value} = e.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    return (
        <div className="container">
            <form className='mt-2'>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" value={getData.name} onChange={setdata}/> 
                    </div>
                    
                    <div class="mb-3  col-lg-6 col-md-6 col-12">
                        <label for="" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email' value={getData.email} onChange={setdata} />
                    </div>

                    <div class="mb-3  col-lg-12 col-md-12 col-12">
                        <label for="" className="form-label">Occupation</label>
                        <input type="text" className="form-control" id="occupation" name='occupation' value={getData.occupation} onChange={setdata} />
                    </div>

                    <div class="mb-3  col-lg-6 col-md-6 col-12">
                        <label for="" className="form-label">Contact No</label>
                        <input type="text" className="form-control" id="contact" name='contact' value={getData.contact} onChange={setdata} />
                    </div>

                    <div class="mb-3  col-lg-6 col-md-6 col-12">
                        <label for="" clclassNameass="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name='address' value={getData.address} onChange={setdata} />
                    </div>

                    <div class="mb-3  col-lg-12 col-md-12 col-12">
                        <label for="" className="form-label">Description</label>
                        <textarea name="description"  className='form-control' id="description" cols="30" rows="5" value={getData.description} onChange={setdata} ></textarea>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register
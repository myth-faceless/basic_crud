import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();

    const [getData, setData] = useState({
        name: "",
        email: "",
        occupation: "",
        contact: "",
        address: "",
        description: ""
    })

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addData = async (e) => {
        e.preventDefault();

        try {

            const apiUrl = '/api/v1/register';
            // console.log('Sending request to:', apiUrl);
            const res = await axios.post(apiUrl, getData);
            //   const res = await axios.post('/api/v1/register', getData);



            if (res && res.data) {
                console.log("Registration Successful!", res.data);

                // Show an alert box
                window.alert("Registration Successful!");
                navigate('/');
            } else {
                console.error("Unexpected Response:", res);
            }
        } catch (error) {
            console.error("Registration Failed!", error);
        }
    };

    return (
        <div className="container">
            <form className='mt-2' onSubmit={addData}>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" value={getData.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-3  col-lg-6 col-md-6 col-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email' value={getData.email} onChange={handleChange} required />
                    </div>

                    <div className="mb-3  col-lg-12 col-md-12 col-12">
                        <label className="form-label">Occupation</label>
                        <input type="text" className="form-control" id="occupation" name='occupation' value={getData.occupation} onChange={handleChange} required />
                    </div>

                    <div className="mb-3  col-lg-6 col-md-6 col-12">
                        <label className="form-label">Contact No</label>
                        <input type="number" className="form-control" id="contact" name='contact' value={getData.contact} onChange={handleChange} required />
                    </div>

                    <div className="mb-3  col-lg-6 col-md-6 col-12">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name='address' value={getData.address} onChange={handleChange} required />
                    </div>

                    <div className="mb-3  col-lg-12 col-md-12 col-12">
                        <label className="form-label">Description</label>
                        <textarea name="description" className='form-control' id="description" cols="30" rows="5" value={getData.description} onChange={handleChange} required ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register
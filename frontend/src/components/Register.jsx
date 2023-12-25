import React from 'react'

const Register = () => {
    return (
        <div className="container">
            <form className='mt-2'>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> 
                    </div>
                    
                    <div class="mb-3  col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3  col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Contact No:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3  col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" clclassNameass="form-label">Address</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3  col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <textarea name=""  className='form-control' id="" cols="30" rows="5"></textarea>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register
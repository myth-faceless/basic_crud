import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2">
                    <NavLink to='/register' className='btn btn-primary'>
                        <AddIcon /> Add Data
                    </NavLink>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered mt-2">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Manis</td>
                                <td>manis@manis.com</td>
                                <td>Developer</td>
                                <td>123456789</td>
                                <td className='d-flex justify-content-between'>
                                    <button className='btn btn-success'><RemoveRedEyeIcon /></button>
                                    <button className='btn btn-primary'><CreateIcon /></button>
                                    <button className='btn btn-danger'><DeleteIcon /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home
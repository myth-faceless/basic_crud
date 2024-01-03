import React, { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [getUserData, setUserData] = useState([]);
    // console.log("HEHEH",getUserData)

    const getData = async () => {
        try {
            const res = await axios.get("/api/v1/getdata");
            setUserData(res.data.data);
            // console.log(res.data);
        } catch (error) {
            console.error("Error fetching data!", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

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
                                <th scope="col">S.N</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>

                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(getUserData) && getUserData.map((user, id) => (
                                <tr key={id}>
                                    <th scope="row">{id + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.occupation}</td>
                                    <td>{user.contact}</td>
                                    <td className='d-flex justify-content-between'>
                                        <NavLink to={`view/${user._id}`} > <button className='btn btn-success'><RemoveRedEyeIcon /></button> </NavLink>
                                        <button className='btn btn-primary'><CreateIcon /></button>
                                        <button className='btn btn-danger'><DeleteIcon /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PlaceIcon from '@mui/icons-material/Place';
import { useParams, useNavigate, } from 'react-router-dom';
import axios from 'axios';

const Details = () => {

    const navigate = useNavigate();
    const {id} = useParams(""); //id nai kina lekheako vanda, it should match with route.(getuser/:id). userId vanera variable banayo vaney make sure route ma pani userId nai cha.
    // console.log((id));

    const [getUserData, setUserData] = useState([]);
    console.log("User Data",getUserData)

    const getData = async () => {
        try {
            const res = await axios.get(`/api/v1/getuser/${id}`);
            setUserData(res.data.data);
            // console.log(res.data);
        } catch (error) {
            console.error("Error fetching data!", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleClick = () => {
        navigate(`/edit/${id}`)
    }

    const deleteData = async() => {
       const confirmDelete = window.confirm("Are you sure you want to delete the data ?")
        if (confirmDelete) {
         try {
             const res = await axios.delete(`/api/v1/deleteuser/${id}`)
             navigate('/')
         } catch (error) {
             console.error("Error Deleting Data !", error)
         }
       }
    }

    return (
        
        <div className='container mt-5'>
            <h1 style={{ fontWeight: 300 }}>Welcome {getUserData.name} !</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='d-flex justify-content-between'>
                        <div className='img-div'>
                            <img src="../src/assets/avatar.png" style={{ width: 50 }} alt="profile_pic" />
                        </div>
                        <div className="add_btn">
                            <button className='btn btn-primary mx-2 mx-2' onClick={handleClick}><CreateIcon /></button>
                            <button className='btn btn-danger' onClick={deleteData}><DeleteIcon /></button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="left_view col-lg-6 col-md-6 col-12">

                            <h3 className='mt-3'>Name: <span style={{ fontWeight: 350, fontSize: 25 }}>{getUserData.name}</span></h3>
                            <p className='mt-3'><EmailIcon /> <strong>Email</strong>:<span style={{ fontWeight: 300 }}>{getUserData.email}.com</span></p>
                            <p className='mt-3'><WorkIcon /> <strong>Occupation</strong>: <span style={{ fontWeight: 300 }}>{getUserData.occupation}</span></p>
                        </div>

                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className='mt-3'><SmartphoneIcon /> <strong>Contact</strong>: <span style={{ fontWeight: 300 }}>{getUserData.contact}</span></p>
                            <p className='mt-3'> <PlaceIcon /> <strong>Address</strong>: <span style={{ fontWeight: 300 }}>{getUserData.address}</span></p>
                            <p className='mt-3'><strong>Description</strong>: <span style={{ fontWeight: 300 }}>{getUserData.description}</span></p>

                        </div>
                    </div>



                </CardContent>

            </Card>
        </div>
    )
}

export default Details
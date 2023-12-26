import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const Details = () => {
    return (
        <div className='container mt-5'>
            <h1 style={{ fontWeight: 300 }}>Welcome Manis !</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='d-flex justify-content-between'>
                        <div className='img-div'>
                            <img src="../src/assets/avatar.png" style={{ width: 50 }} alt="profile_pic" />
                        </div>
                        <div className="add_btn">
                            <button className='btn btn-primary mx-2 mx-2'><CreateIcon /></button>
                            <button className='btn btn-danger'><DeleteIcon /></button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="left_view col-lg-6 col-md-6 col-12">

                            <h3 className='mt-3'>Name: <span style={{ fontWeight: 300, fontSize: 20 }}>Manis</span></h3>
                            <h3 className='mt-3'>Age: <span style={{ fontWeight: 300 }}>24</span></h3>
                            <p className='mt-3'><EmailIcon /> Email:<span style={{ fontWeight: 300 }}>manis@manis.com</span></p>
                            <p className='mt-3'><WorkIcon /> Occupation: <span style={{ fontWeight: 300 }}>MERN Developer</span></p>
                        </div>

                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className='mt-3'><SmartphoneIcon /> Mobile: <span style={{ fontWeight: 300 }}>123456798</span></p>
                            <p className='mt-3'>Location: <span style={{ fontWeight: 300 }}>Kathmandu</span></p>
                            <p className='mt-3'>Description: <span style={{ fontWeight: 300 }}>Hello, I am Manis !</span></p>

                        </div>
                    </div>



                </CardContent>

            </Card>
        </div>
    )
}

export default Details
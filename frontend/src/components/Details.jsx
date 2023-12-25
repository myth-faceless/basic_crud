import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Details = () => {
    return (
        <div className='container mt-5'>
            <h1 style={{ fontWeight: 300 }}>Welcome Manis !</h1>

            <Card sx={{ minWidth: 275 }}>
                <CardContent className='d-flex align-items-center justify-content-around'>
                    <div className="left_view">
                        <img src="/profile.png" style={{ width: 50 }} alt="profile_pic" />
                        <h3 className='mt-3'>Name:</h3> <span style={{fontWeight:300}}>Manis</span>
                        <h3 className='mt-3'>Age:</h3> <span style={{fontWeight:300}}>24</span>
                        <h3 className='mt-3'>Email:</h3> <span style={{fontWeight:300}}>manis@manis.com</span>
                        <h3 className='mt-3'>Occupation:</h3> <span style={{fontWeight:300}}>MERN Developer</span>
                    </div>

                    <div className="right_view">
                    <h3 className='mt-3'>Mobile:</h3> <span style={{fontWeight:300}}>123456798</span>
                    <h3 className='mt-3'>Location:</h3> <span style={{fontWeight:300}}>Kathmandu</span>
                    <h3 className='mt-3'>Description:</h3> <span style={{fontWeight:300}}>Hello, I am Manis !</span>

                    </div>


                </CardContent>

            </Card>
        </div>
    )
}

export default Details
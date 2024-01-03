import React, {useState, useEffect }from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {

    // const [getUserData, setUserData] = useState([]);
    // console.log("User Data",getUserData)

    const navigate = useNavigate()

    const [getData, setData] = useState({
        name:"",
        email:"",
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


    const {id} = useParams(""); //id nai kina lekheako vanda, it should match with route.(getuser/:id). userId vanera variable banayo vaney make sure route ma pani userId nai cha.
    // console.log((id));

    const getDataDB = async () => {
        try {
            const res = await axios.get(`/api/v1/getuser/${id}`);
            setData(res.data.data); // Input field ma auto data lerauna setData mai data rakhdeko.
            // console.log(res.data);
        } catch (error) {
            console.error("Error fetching data!", error);
        }
    };

    useEffect(() => {
        getDataDB();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();

        try {

            const apiUrl = `/api/v1/updateuser/${id}`;
            // console.log('Sending request to:', apiUrl);
            const res = await axios.patch(apiUrl, getData);

            if (res && res.data) {
                console.log("Update Successful!", res.data);

                // Show an alert box
                window.alert("Update Successful!");
                navigate(`/view/${id}`)
            } else {
                console.error("Unexpected Response:", res);
            }
        } catch (error) {
            console.error("Update Failed!", error);
        }
    };
    

  return (
    <div className="container">
    <form className='mt-2' onSubmit={updateUser}>
        <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" value={getData.name} onChange={setdata} /> 
            </div>
            
            <div class="mb-3  col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name='email' value={getData.email} onChange={setdata}  />
            </div>
            <div class="mb-3  col-lg-12 col-md-12 col-12">
                <label for="exampleInputPassword1" className="form-label">Occupation</label>
                <input type="text" className="form-control" id="email" name='email' value={getData.occupation} onChange={setdata}  />
            </div>

            <div class="mb-3  col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" className="form-label">Contact No:</label>
                <input type="number" className="form-control" id="contact" name='contact' value={getData.contact} onChange={setdata}  />
            </div>

            <div class="mb-3  col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" clclassNameass="form-label">Address</label>
                <input type="text" className="form-control" id="address" name='address' value={getData.address} onChange={setdata}  />
            </div>

            <div class="mb-3  col-lg-12 col-md-12 col-12">
                <label for="exampleInputPassword1" className="form-label">Description</label>
                <textarea name="description"  className='form-control' id="description" cols="30" rows="5" value={getData.description} onChange={setdata} ></textarea>
            </div>
        
            <button type="submit" className="btn btn-primary" >Submit</button>
        </div>
    </form>
</div>
  )
}

export default Edit
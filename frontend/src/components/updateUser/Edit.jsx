

import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import "../addUser/Add.css";
import axios from 'axios';
import toast from 'react-hot-toast'



const Edit = () => {

  const users ={
    fname: "",
    lname: "",
    email: ""
  }


  const {id} = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(users);  


  const inputChangeHandler = (e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
        // console.log(users);
  }


  useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
  },[id])

  const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/"} className='addBack'>Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor='fname'>First Name</label>
                <input type='text' value={user.fname} onChange={inputChangeHandler} id='fname' name="fname" autoComplete='off' placeholder='First Name' />
            </div>

            <div className='inputGroup'>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' value={user.lname} onChange={inputChangeHandler} id='lname' name="lname" autoComplete='off' placeholder='Last Name' />
            </div>  

            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='email' value={user.email} onChange={inputChangeHandler} id='email' name="email" autoComplete='off' placeholder='Email' />
            </div>

            <div className='inputGroup'>
                <button type='submit'>UPDATE USER</button>
            </div>
        </form>
  </div>
  )
}

export default Edit

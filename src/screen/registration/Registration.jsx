import React, { useState, useEffect } from 'react'
import BasicInput from '../../component/input/BasicInput'
import { BasicButton } from '../../component'
import { useNavigate } from 'react-router-dom';
import './registration.css';
import { Typography } from '@mui/material';

export default function Registration() {

const navigate = useNavigate()

  const [userDetail, setUserDetail] = useState({
    email: ""
  })

 const formStyle = {
  width: "300px", height: "40px", border: "1px solid #afa9a9", fontSize: "14px", borderRadius: "10px", marginTop: "20px", paddingLeft: "20px"
  }

  const buttonStyle = {
    width: "320px",
    height: "40px", fontSize: "14px", backgroundColor: "#e31d1d", borderRadius: "10px", marginTop: "20px", border: "none", color: "#fff"
  }

  const user = [
    {
      placeholder: 'Enter E-mail',
      value: userDetail.email,
      type: "email",
      name: "email"
    }
  ]

  function handleChange(e) {

    const { name, value } = e.target
    setUserDetail(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

   function handleSubmit(e) {
    e.preventDefault();
    const storedEmailsString =JSON.parse(localStorage.getItem('storedEmails')) || [];
    const updatedEmails = [...storedEmailsString, userDetail.email];
    localStorage.setItem('storedEmails', JSON.stringify(updatedEmails));
    setUserDetail({email: ''});
    navigate("./login");
  }
  function handleDirectLogIn (){
    navigate("/login");
  }


  return (
    <>
      <div className='mainDiv'>
        <form className='formDiv' onSubmit={handleSubmit}>
          <h1>User Registration</h1>
          {
            user.map((item) => (
              <div className='registrationdiv'>
                <BasicInput name={item.name} placeholder={item.placeholder} onChange={handleChange} value={item.email} type={item.type} style={formStyle} />
               
              </div>
            ))
          }
           
          <BasicButton title="Submit" color="blue" style={buttonStyle}  />
          <Typography className="alreadyLoginbtn" >Already Register? <span onClick={handleDirectLogIn}>Log-In</span></Typography>
        </form>
      </div>
    </>
  )
}

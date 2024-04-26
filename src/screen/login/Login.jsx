import React, { useState } from 'react'
import BasicInput from '../../component/input/BasicInput'
import { BasicButton } from '../../component'
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {

  const navigate = useNavigate()

  const [userLogin, setUserLogin] = useState({
    email: ""
  })

  const LogininputStyle = {
    width: "300px", height: "40px", border: "1px solid #afa9a9", fontSize: "14px", borderRadius: "10px", marginTop: "20px", paddingLeft: "20px"
  }

  const LoginbuttonStyle = {
    width: "320px",
    height: "40px", fontSize: "14px", backgroundColor: "#e31d1d", borderRadius: "10px", marginTop: "20px", border: "none", color: "#fff"
  }

  const Loginuser = [
    {
      placeholder: 'Enter E-mail',
      value: userLogin.email,
      type: "email",
      name: "email"
    }
  ]

  function handleChange(e) {

    const { name, value } = e.target
    setUserLogin(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const storedEmailsString = JSON.parse(localStorage.getItem('storedEmails')) || [];
    const findEmail = storedEmailsString.find((item) => item === userLogin.email)
    if (findEmail) {
      const token =localStorage.setItem('token', JSON.stringify(findEmail));
      navigate("/mainscreen")
    }
}
 return (
    <>
      <div className='LoginmainDiv'>

        <form className='LoginformDiv' onSubmit={handleSubmit} >
          <h1>Login</h1>
          {
            Loginuser.map((item) => (
              <div className='Logindiv'>
                <BasicInput onChange={handleChange} name='email' placeholder={item.placeholder} value={item.email} type={item.type} style={LogininputStyle}  />
              </div>
            ))
          }
          <BasicButton title="Submit" color="blue" style={LoginbuttonStyle} />
        </form>
      </div>
    </>
  )
}

import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [formdata,setformdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    useEffect(() => {
        if(sessionStorage.length !== 0) {
            navigate("/home");
        }
    },[])
    const handleSubmit = () => {
        if(formdata.firstname === "" || formdata.lastname === "" || formdata.email === "" || formdata.password === "") {
            alert("Please fill all the fields");
            return;
        }
        if (formdata.email !== null) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formdata.email)) {
                alert("Please enter a valid email address.");
                return;
            }
        }
        if (formdata.password !== null) {
            if (formdata.password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
        }
        if(localStorage.getItem(formdata.email)) {
            alert("User already exists. Please login.");
            return;
        }
        localStorage.setItem((formdata.email),JSON.stringify(formdata));
        alert("Registration Successful");
        setformdata({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        });
        sessionStorage.setItem(formdata.email,"success");
        navigate("/home");         
    }
    return(
        <div style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/clipboard-with-ribbons-candles_23-2147628613.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat:"no-repeat",
            height: "100vh",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
        <div className="register container border border-2 border-info rounded-3 shadow-lg p-5 mt-5 w-50 text-dark bg-white">
            <h1>Register For Now</h1>
            <form className="register-form mt-5 d-flex justify-content-center align-items-center flex-column">
                <div className="mb-3">
                    <div className="w-100 d-flex justify-content-start align-items-center">
                    <label className="form-label">First Name</label>
                    </div>
                    <input type="text" className="form-control"  name="first name" onChange={(e) => {
                        setformdata({
                            ...formdata,
                            firstname: e.target.value
                        });
                    }} value={formdata.firstname} placeholder="Enter your First Name" />
                </div>
                <div className="mb-3">
                    <div className="w-100 d-flex justify-content-start align-items-center">
                    <label className="form-label">Last Name</label>
                    </div>
                    <input type="text" className="form-control" name="last name" onChange={(e) => {
                        setformdata({
                            ...formdata,
                            lastname: e.target.value
                        });
                    }} value={formdata.lastname} placeholder="Enter your Last Name" />
                </div>
                <div className="mb-3">
                    <div className="w-100 d-flex justify-content-start align-items-center">
                    <label className="form-label">Email</label>
                    </div>
                    <input type="email" className="form-control" name="email" onChange={(e) => {
                        setformdata({
                            ...formdata,
                            email: e.target.value
                        });
                    }} value={formdata.email} placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <div className="w-100 d-flex justify-content-start align-items-center">
                    <label className="form-label">Create Password</label>
                    </div>
                    <input type="password" className="form-control" name="password" onChange={(e) => {
                        setformdata({
                            ...formdata,
                            password: e.target.value
                        });
                    }} value={formdata.password} placeholder="Create your password" />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
            </form>
         </div> 
         </div>  
    )
}
export default Register;
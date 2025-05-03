import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const SignIn = () => {
    const [userdata, setUserdata] = useState({
        email:"",
        password:""
    });
    useEffect(() => {
        if(sessionStorage.length !== 0) {
            navigate("/home");
        }
    },[])
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        if(userdata.email === null || userdata.password === null) {
            alert("Please fill all the fields");    
            return;
        }
        if(userdata?.email === "" || userdata?.password === "") {
            alert("Please fill all the fields");
            return;
        }
        const currUser = JSON.parse(localStorage.getItem(userdata.email));
        //console.log(currUser.email, currUser.password,userdata.email, userdata.password);
        var isValidUser = false;
        isValidUser = currUser?.email == userdata.email && currUser?.password == userdata.password;
        if(!isValidUser) {
            alert("please enter valid credentials");
            return;
        }
        if(isValidUser) {
            alert("Login Successful");
            sessionStorage.setItem(currUser.email,currUser.email);
            navigate("/home");
        }
    };
    const handleSignIn = (e) => {
        navigate("/register");
    }
    return(
        <div style={{
            backgroundImage: "url('https://img.freepik.com/premium-vector/padlock-with-keyhole-icon-personal-data-security-illustrates-cyber-data-information-privacy-idea-blue-color-abstract-hi-speed-internet-technology_542466-600.jpg?semt=ais_hybrid&w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat:"no-repeat",
            height: "100vh",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}> 
        <div className="container border border-2 border-primary rounded-3 shadow-lg p-5 mt-5 w-50 text-dark bg-white">
            <h1 className="text-center">Sign In</h1>
            <form className="mt-5 d-flex justify-content-center align-items-center flex-column">
                <div className="mb-3">
                    <div className="w-100 d-flex justify-content-start align-items-center">
                    <label htmlFor="email" className="form-label">Email address</label>
                    </div>
                    <input type="email" className="form-control" onChange={(e) => {
                        setUserdata({
                            ...userdata,
                            email: e.target.value
                        });
                    }} id="email" placeholder="Enter your email" required/>
                </div>
                <div className="mb-3 ">
                <div className="w-100 d-flex justify-content-start align-items-center">
                    <label htmlFor="password" className="form-label">Password</label>
                    </div>
                    <input type="password" className="form-control  " onChange={(e) => {
                        setUserdata({
                            ...userdata,
                            password: e.target.value
                        });
                    }} id="password" placeholder="Enter your password" required/>
                </div>
                <div className="mb-3" >
                <button type="submit" onClick={handleSignUp} className="btn btn-primary gap-3">Log In</button>
                <p className="mt-3">If not Registered, Please Create an Account!</p>
                <button type="submit" onClick={handleSignIn} className="btn btn-warning">Create New Account</button>
                </div>
            </form>
            </div>    
        </div>
    )
}
export default SignIn;
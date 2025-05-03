import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate("/signin");
    };
    return (
        <div style={{
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/007/978/439/non_2x/abstract-blue-background-with-waves-and-liquid-shape-for-landing-page-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat:"no-repeat",
            height: "100vh",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"    
        }}>
        <div className="container mt-5 border border-2 border-primary rounded-3 shadow-lg p-5 w-50 text-dark bg-white">
        <div className="welcome-page d-flex justify-content-center align-items-center flex-column">
        <h1>Welcome to the To-Do List App!</h1>
        <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D" width={300} style={{height:"300px"}} />
        <p>Manage your tasks efficiently and stay organized.</p>
        <p>Click on the "SignIn" button to get started.</p>
        <button className="btn btn-primary w-25" onClick={handleSignIn}>Sign In</button>
        </div>
        </div>
        </div>
    );
}
export default WelcomePage;
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-100 bg-primary text-center p-4"
      style={{ height: "80px", display: "flex" }}
    >
      <h3>To-do List</h3>
      <div className="ms-auto gap-3">
        <button onClick={() => {
          sessionStorage.clear();
          confirm("Are you Sure Want to Logout")
          navigate("/");
        }} className="text-dark btn btn-danger fs-5 ">
          LogOut
        </button>
      </div>
    </div>
  );
};
export default Nav;

const Nav = () => {
  return (
    <div
      className="w-100 bg-primary text-center p-4"
      style={{ height: "80px", display: "flex" }}
    >
      <h3>To-do List</h3>
      <div className="ms-auto">
        <a href="#" className="text-dark text-decoration-none fs-4 ">
          Sign Up
        </a>
        <a href="#" className="text-dark text-decoration-none fs-4 ">
          Log In
        </a>
        <a href="#" className="text-dark text-decoration-none fs-4 ">
          Eng
        </a>
      </div>
    </div>
  );
};
export default Nav;

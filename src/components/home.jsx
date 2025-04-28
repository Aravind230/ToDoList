import Nav from "./Navbar";
import { useState } from "react";
const Home = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [update, setupdate] = useState([]);
  const handleclick = () => {
    if (inputvalue.trim !== "") {
      setupdate([...update, inputvalue]);
      setinputvalue("");
    }
  };
  const handleClear = () => {
    setupdate([]);
  };
  return (
    <>
      <Nav />
      <div
        style={{
          backgroundImage: `url("https://t3.ftcdn.net/jpg/05/13/59/72/360_F_513597277_YYqrogAmgRR9ohwTUnOM784zS9eYUcSk.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-100 vh-100"
      >
        <input
          type="text"
          className="w-75 justify-content-center align-items-center"
          placeholder="Write Your near Task Here....."
          style={{ marginTop: "100px" }}
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />{" "}
        <br />
        <div className="btn btn-success ms-3 mt-4" onClick={handleclick}>
          Add Task
        </div>
        <div className="btn btn-danger ms-4 mt-4" onClick={handleClear}>
          Clear Tasks
        </div>
        <div className="mt-4">
          {update.map((task, index) => (
            <div key={index}>
              {index + 1}.{task}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;

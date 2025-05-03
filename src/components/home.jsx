import { useEffect, useState } from "react";
import Nav from "./Navbar"; 

const Home = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [update, setupdate] = useState([]);
  const [editindex, seteditindex] = useState(null);
  const [editvalue, seteditvalue] = useState("");
  const [email,setemail] = useState("");
      useEffect(()=>{
         const storedemail = sessionStorage.key(0);
         if(storedemail){
          setemail(storedemail)
         }
      },[])
  useEffect(() => {
    let currEmail = sessionStorage.key(0);
   if(currEmail) {
     let data = localStorage.getItem(currEmail+"data");
     if(data) setupdate([...data.split("#")])
    }
  },[]);
  const handleclick = () => {
    const trimmedInput = inputvalue.trim();
    if (trimmedInput === "") {
      alert("Please enter a task.");
      return;
    }
    if (update.includes(trimmedInput)) {
      alert("Task already exists.");
      return;
    }
    
    setupdate([...update, trimmedInput]);
    handleSave();
    setinputvalue("");
  };

  const handleEdit = (index) => {
    seteditindex(index);
    seteditvalue(update[index]);
  };

  const handleUpdate = (index,original) => {
    const trimmed = editvalue.trim();
    if (trimmed === "") {
      alert("Edited task cannot be empty.");
      return;
    }
    const newUpdate = [...update];
    newUpdate[index] = trimmed;
    setupdate(newUpdate);
    let currEmail = sessionStorage.key(0);
    if(currEmail) {
      let data = localStorage.getItem(currEmail+"data");
      if(data){
        data = data.split("#").map((val) => {
          if(val == original){
            return trimmed;
          }
          else{
            return val;
          }
        }).join("#");
        localStorage.setItem(currEmail +"data",data);
      }
    }
    seteditindex(null);
    seteditvalue("");
  };

  const handleClear = () => {
    if (update.length === 0) {
      alert("No tasks to clear.");
      return;
    }
    setupdate([]);
  };
  const handleDelete = (index) => {
    const newUpdate = update.filter((_, i) => i !== index);
    setupdate(newUpdate);
    if (editindex === index) {
      seteditindex(null);
      seteditvalue("");
    }
  };
  const handleSave = () => {
    const currEmail = sessionStorage.key(0);
    const user = localStorage.getItem(currEmail+"data");
    if(!user || user.length == 0){
      localStorage.setItem(currEmail +"data",inputvalue);
    }else{
      localStorage.setItem(currEmail+"data",user+"#"+inputvalue);
    }
  }
  return (
    <>
      <Nav />
      <div
        style={{
          backgroundImage:
            'url("https://t3.ftcdn.net/jpg/05/13/59/72/360_F_513597277_YYqrogAmgRR9ohwTUnOM784zS9eYUcSk.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-100 vh-100"
      >
        <div className="container p-4 ">
        <div className="d-flex justify-content-end">
          <div className="bg-info text-dark p-1 rounded">
          <h4 className="m-0">Your Email Address : {email}</h4>
          </div>
        </div>
        </div>
        <input
          type="text"
          className="w-75 justify-content-center align-items-center"
          placeholder="Write Your new Task Here....."
          style={{ marginTop: "100px" }}
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />
        <br />
        <div className="btn btn-success ms-3 mt-4" onClick={handleclick}>
          Add Task
        </div>
        <div className="btn btn-danger ms-4 mt-4" onClick={handleClear}>
          Clear Tasks
        </div>

        <div className="container bg-light p-5 border mt-4">
          {update.map((task, index) => (
            <div key={index} className="border rounded p-3 mb-3 bg-white">
              <div className="d-flex align-items-center">
                <div className="btn btn-warning ms-3">{index + 1}</div>
                {editindex === index ? (
                  <input
                    className="form-control ms-5"
                    style={{ width: "50%" }}
                    type="text"
                    value={editvalue}
                    onChange={(e) => seteditvalue(e.target.value)}
                  />
                ) : (
                  <span className="ms-5">{task}</span>
                )}
                <div className="d-flex align-items-end justify-content-end flex-grow-1 gap-3">
                  {editindex === index ? (
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleUpdate(index,task);
                       }
                      }
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(index)
                      }
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(index);
                      let currEmail = sessionStorage.key(0);
                      if(currEmail) {
                        let data = localStorage.getItem(currEmail+"data");
                        if(data){
                          data = data.split("#").filter((val) => val !== task).join("#");
                          localStorage.setItem(currEmail +"data",data);
                        }
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;

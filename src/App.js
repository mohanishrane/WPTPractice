import { useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <>
      <Component />
    </>
  );
}

function Component() {

  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");

  const handlename = (e) => {
    setname(e.target.value);
  };

  const handlemail = (e) => {
    setmail(e.target.value);
  }

  const handlepsw = (e) => {
    setpassword(e.target.value);
  }

  const addUser = async () => {

    let url = "http://localhost:5000/adduser";
    let data = {
      name: name,
      email: email,
      password: password
    };

    await axios.post(url, data);

    setname("");
    setmail("");
    setpassword("");

  }


  return (
    <div>
      <h1>React App</h1>
      <div><input type="text" name="" id="" placeholder="Enter Name" onChange={handlename} /></div>
      <div><input type="text" name="" id="" placeholder="Enter Email" onChange={handlemail} /></div>
      <div><input type="text" name="" id="" placeholder="Enter Password" onChange={handlepsw} /></div>
      <input type="submit" value="Register" onClick={addUser} />

    </div>
  );
}

import { useState } from "react";
import './App.css';
import { courseDetails } from "./course_details";
import Cards from "./cards";
import logo from "./logo.svg";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["title", "description", "description_2", "panel__block"]

  const search = (data) => {
    return data.filter(
      (item) =>
        keys.some(key=>item[key]?.toLowerCase().includes(query))
    );
  }

  return (
    <div className="App">
      <nav className="navbar bg-info-subtle">
        <div className="container-fluid py-3 px-5">
          <a className="navbar-brand" href="https://www.lanternsol.com/" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={logo} alt="lanternsol" width="200" height="40"/>
          </a>
          <button class="btn btn-outline-success" type="submit">Visit Brilliant Marketers</button>
        </div>
      </nav>
      <div className="container">
        <div className="card mt-3">
          <p className="text-start p-5 pb-0">Perform a search between all the topics in the Agency Founders Accelerator course.</p> 
          <div className="input-group mx-auto p-5 pt-0">
            <span className="input-group-text">Topic</span> 
            <input 
              type="text"
              placeholder="Search..."
              className="form-control"
              onChange={(e) => setQuery(e.target.value)} 
            />
          </div>
        </div>
      </div>
      <div className="container p-3">
        <Cards data={ search(courseDetails) }/> 
      </div>
    </div>
  );
}

export default App;

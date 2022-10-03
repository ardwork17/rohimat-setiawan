import './App.css';
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.github.com/users/ardwork17/repos")
    .then((response) => {
      setData(response.data);
      console.log(response.data)
  });
  }, []);


  return (
    <div className="app">
      <div className="container container-repo">
        <h5 className="title">List Repository</h5>
      <table class="table table-bordered table-responsive">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">ID</th>
      <th scope="col">Name Repository</th>
      <th scope="col">Link Repository</th>
    </tr>
  </thead>
  <tbody>
  {data.map((repo,index) => (
    <tr key={index}>
      <td>{index}</td>
      <td>{repo.id}</td>
      <td>{repo.name}</td>
      <td><a href={repo.html_url} target="_blank">{repo.html_url}</a></td>
    </tr>
        ))}
  </tbody>
</table>
      </div>
    </div>
  );
}

export default App;

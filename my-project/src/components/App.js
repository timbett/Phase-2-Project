import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Results from "./Results";
import Home from "./Home";

function App() {
  const [notes, setNotes] = useState([]);
  const [newData, setNewData] = useState(false);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      });
  }, [newData]);

  function handleNewData() {
    setNewData((newData) => !newData);
  }

  return (
    <div className="App">
      <NavBar setIsLoggedIn={setIsLoggedIn} setSearch={setSearch} />
      <hr />
      <Switch>
        <Route exact path="/notes">
          <Results isLoggedIn={isLoggedIn} handleNewData={handleNewData} />
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} notes={notes} search={search} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

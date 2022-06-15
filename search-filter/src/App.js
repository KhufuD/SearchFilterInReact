import React from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {


  return (
    <div className="App">
      <SearchBar/>
      <UserList />
    </div>
  );
};

export default App;

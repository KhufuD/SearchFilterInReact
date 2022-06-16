
import Card from "./Card";

import "./SearchBar.css";
import { useState } from "react";


const USERS = [
    { id: 1, name: "Andy", age: 32 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Tom Hulk", age: 40 },
    { id: 4, name: "Tom Hank", age: 50 },
    { id: 5, name: "Audra", age: 30 },
    { id: 6, name: "Anna", age: 68 },
    { id: 7, name: "Tom", age: 34 },
    { id: 8, name: "Tom Riddle", age: 28 },
    { id: 9, name: "Bolo", age: 23 },
  ];
  
const SearchBar = () => {

    


    const[isName, setIsName] = useState("");
    const [foundUsers, setFoundUsers] = useState(USERS);
    
 
        const filteredName = (e) => {
            const keyword = e.target.value;

            if(keyword !== ''){
                const filteredResult = USERS.filter((user) => {
                    return ( !isNaN(keyword) ?  user.age.toString().includes(keyword) : user.name.toLowerCase().includes(keyword.toLowerCase()) );
                    
                });
                setFoundUsers(filteredResult);
            }
            else{
                setFoundUsers(USERS);
            }
            setIsName(keyword);
            console.log(setIsName);
        };

    return (
       <Card className= 'main-card'>
         <form className="search-form">
            <label className="search-label">Filter here</label>
            <input className="search-input" type={"search"} value={isName} onChange={filteredName} ></input>
        </form>
         

        <ul className="to-be-filtered-list">
            {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((items) => ( 
                    <li key={items.id} className="User-list-item">
          <p className="list-name"><span className="list-label">Id:</span> {items.id}</p>
          <p className="list-name"><span className="list-label">Name:</span> {items.name}</p>
          <p className="list-age"><span className="list-label">Age:</span> {items.age}</p>
        </li>
                ))
           ):(<h1>No Results Found!</h1>)} 
        </ul>
       </Card>
    );
};

export default SearchBar;
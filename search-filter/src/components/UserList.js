import React from "react";

const UserList = () => {
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
  console.log(USERS);
  return (
    <ul>
      {USERS.map((items) => (
        <li>
          <p>Name: {items.name}</p>
          <p>age: {items.age}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

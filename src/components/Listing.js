import React from "react";

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howel" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebrask" },
];

const userList = users.map((user) => {
  return <li key={user.id}>{user.name}</li>;
});

export default class Listing extends React.Component {
  render() {
    const userList = users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
    return <ul>{userList}</ul>;
  }
}

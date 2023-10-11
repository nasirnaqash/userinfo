import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetail from "./components/UserDetail";
import User from "./components/Users";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:1999/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const openUserDetails = (user) => {
    setSelectedUser(user);
  };

  const closeUserDetails = () => {
    setSelectedUser(null);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="container mt-5">
      <User currentUsers={currentUsers} openUserDetails={openUserDetails} />
      <UserDetail
        selectedUser={selectedUser}
        closeUserDetails={closeUserDetails}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        users={users}
        usersPerPage={usersPerPage}
      />
    </div>
  );
}

export default App;

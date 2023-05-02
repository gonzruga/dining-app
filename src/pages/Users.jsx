import React from "react";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { firebaseDataBase } from "../firebase";

const Users = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(firebaseDataBase, "Users");

  const [newDisplayName, setDisplayName] = useState("");
  // eslint-disable-next-line
  const [newEmail, setEmail] = useState("");
  const [newInterests, setInterests] = useState("");
  const [newInterestLink, setInterestLink] = useState("");
  const [newAge, setAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      DisplayName: newDisplayName,
      Email: newEmail,
      Interests: newInterests,
      InterestLink: newInterestLink,
      Age: Number(newAge),
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      const dataToGet = await getDocs(usersCollectionRef);
      console.log(dataToGet);
      setUsers(dataToGet.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [usersCollectionRef]); // Added dependency info dep. array

  const updateUser = async (id, DisplayName, Interests, InterestLink) => {
    // const userDoc = doc(firebaseDataBase, "Users", id);
    // const newFields = { age: age + 1 };
    // await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(firebaseDataBase, "Users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div>
      <h3>Create Your User Profile</h3>
      <input
        placeholder="Display Name e.g. Donald45"
        onChange={(event) => {
          setDisplayName(event.target.value);
        }}
      />{" "}
      <br></br>
      <input
        placeholder="Email"
        onChange={(event) => {
          setInterests(event.target.value);
        }}
      />{" "}
      <br></br>
      <input
        placeholder="Interests"
        onChange={(event) => {
          setInterests(event.target.value);
        }}
      />{" "}
      <br></br>
      <input
        placeholder="Interest Link"
        onChange={(event) => {
          setInterestLink(event.target.value);
        }}
      />{" "}
      <br></br>
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />{" "}
      <br></br>
      <button onClick={createUser}> Create User</button>
      <hr></hr>
      <h3>LIST OF USERS</h3>
      {users.map((user) => {
        return (
          <div>
            <h3>Display Name: {user.DisplayName} </h3>
            <h5>Interests: {user.Interests}</h5>
            <h5>Interest Link: {user.InterestLink}</h5>
            <h5>Reviews: {user.Reviews}</h5>
            <button
              onClick={() => {
                updateUser(
                  user.id,
                  user.DisplayName,
                  user.Interests,
                  user.InterestLink
                );
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User{" "}
            </button>

            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

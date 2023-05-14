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

const UsersSB = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(firebaseDataBase, "Users");

  const [newDisplayName, setDisplayName] = useState("");
  // eslint-disable-next-line
  const [newEmail, setEmail] = useState("");
  const [newProfessionIndustry, setProfessionIndustry] = useState("");
  const [newInterests, setInterests] = useState("");
  const [newInterestLink, setInterestLink] = useState("");
  const [newAge, setAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      DisplayName: newDisplayName,
      Email: newEmail,
      ProfessionIndustry: newProfessionIndustry,
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
          setEmail(event.target.value);
        }}
      />{" "}
      <br></br>
      <input
        placeholder="Profession / Industry"
        onChange={(event) => {
          setProfessionIndustry(event.target.value);
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
      <h3>List Of Users</h3>
      {users.map((user) => {
        return (
          <div>
            <h5>Display Name: {user.DisplayName} </h5>
            <h6>
              <i class="ri-user-2-fill"></i> Profession/Industry:{" "}
              {user.ProfessionIndustry}
            </h6>
            <h6>
              <i class="ri-heart-fill"></i> Interests: {user.Interests}
            </h6>
            <h6>
              <i class="ri-global-line"></i> Interest Link: {user.InterestLink}
            </h6>
            <h6>
              <i class="ri-chat-1-line"></i> Reviews: {user.Reviews}
            </h6>
            <button
              className="btn btn-info"
              onClick={() => {
                updateUser(
                  user.id,
                  user.DisplayName,
                  user.ProfessionIndustry,
                  user.Interests,
                  user.InterestLink
                );
              }}
            >
              Edit User
            </button>
            {"  "}
            <button
              className="btn btn-danger"
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

export default UsersSB;

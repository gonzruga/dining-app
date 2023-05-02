import React from "react";
import "remixicon/fonts/remixicon.css";

import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

// import { AuthContext } from "./context/AuthContext";

// const RequireAuth = ({children}) => {
//   return currentUser ? (children) : <Navigate to="" />
// };

/*

function App() {
  return (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>)
  
}
## Lama Dev- AUTH CRUD
const currentUser = false;

const RequireAuth = ({children}) => {
  return currentUser ? (children) : <Navigate to="/login" />
};

  return (
  <div>
    <BrowserRouter>
     <Routes>
      <Route path="/">       
        <Route path="login" element={<Login />} />
        <Route index element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="events" element={<EventsListPage />} />
        <Route path="users" element={<Users />} />
        <Route path="signup" element={<Signup />} />
      </Route>
     </Routes>   
    </BrowserRouter>
  </div>)

#######

 <div className="App">
      <p>Signup to create an account</p>
      <Signup />
      
      <p>Already have an account? Login below</p> 

      <Login />
    </div>
*/

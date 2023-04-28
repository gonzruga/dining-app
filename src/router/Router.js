import React from 'react'

import {
  createBrowserRouter,
} from "react-router-dom";

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";
// import { AuthContext } from './context/AuthContext';


import App from "../App";
import Home from "../pages/Home";
import EventsListPage from '../pages/EventsListPage';
import Users from '../pages/Users';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

// import RequireAuth from '../App';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // loader: rootLoader,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/test",
          element: <div>TESTING MF!!</div>,
          // loader: teamLoader,
        },
        {
          path: "/home",
          element: <Home />,
          // element: <RequireAuth><Home /></RequireAuth>,

        },
        {
          path: "/events",
          element: <EventsListPage />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        
       
      ],
    },
  ]);

 
  
  export default router;

/*

import Home from './pages/Home';
import Signup from './../pages/signup/Signup';
import Login from './../pages/login/Login';

import Events from './../pages/Events';
import EventDetails from './../pages/EventDetails';
import EventsResultList from "../pages/EventsResultList";

import Users from "./../pages/Users";
import UserDetails from './../pages/UserDetails';
import UsersResultList from "../pages/UsersResultList";

#######

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "event",
        element: <Event />,
        loader: eventLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

########

const Routers = () => {
    return ( 
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/event/search" element={<EventsResultList />} />
       
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />       
        <Route path="/user/search" element={<UsersResultList />} />

    </Routes>
    )
};

export default Routers;

*/
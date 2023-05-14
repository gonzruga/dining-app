import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import EventsListPage from "../pages/EventsListPage";
import Users from "../pages/Users";
import UsersSB from "../pages/UsersSB";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import EventCard from "../pages/EventCard";
import ComponentSingleEvent from "../components/Events/ComponentSingleEvent";
import EventCreate from "../pages/EventCreate";

// import { AuthContext } from './context/AuthContext';
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
        path: "/#home",
        element: <Home />,
        // element: <RequireAuth><Home /></RequireAuth>,
      },
      {
        path: "/events",
        element: <EventsListPage />,
      },
      {
        path: "/add",
        element: <EventCreate />,
      },
      {
        path: "/eventComponent/:eventId",
        element: <ComponentSingleEvent />,
      },
      {
        path: "/event",
        element: <EventCard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/usersSB",
        element: <UsersSB />,
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

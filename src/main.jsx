import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Root from "./Components/Root/Root.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import Header from "./Components/Header/Header.jsx";
import Services from "./Components/Services/Services.jsx";
import Home from "./Components/Home/Home.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Users2 from "./Components/Users2/Users2.jsx";
import Users from "./Components/Users/Users.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";

const UsersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {
        index:true,Component:Home
      },
      {
        path:"aboutUs", Component:AboutUs
      },
      {
        path:"users2",
        element:<Suspense fallback={<span>Loading...</span>}><Users2 UsersPromise={UsersPromise}></Users2></Suspense>
      },
      {
        path:"users",
        loader:() => fetch('https://jsonplaceholder.typicode.com/users/'),
        Component:Users
      },
      {
        path:"users/:userDetails",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userDetails}`),
        Component:UserDetails
      },

      {
        path:"posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts/'),
        Component:Posts
      },
      {
        path:"posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails
      },
      {
        path:"header",Component:Header
      },
      {
        path:"mobile",Component:Mobiles
      },
      {
        path:"nav",Component:Navbar
      },
      {
        path:"service",Component:Services
      },
      {
        path:'app2',Component:App
      },
    ]
  },
  {
    path:'/',
    element:<div>This is the main point</div>
  },
  {
    path:"/home",
    element:<div>Home is here</div>
  },
  {
    path:"services",
    element:<div>Services</div>
  },

  {
    path:"contact",
    element:<div>Contact Me</div>
  },
  {
    path:"nav",
    element:<Navbar></Navbar>
  },
  {
    path:"app",
    Component:App
  },

  {
    path:"*",
    element:<h2>Eror Not Found 404</h2>
  }

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

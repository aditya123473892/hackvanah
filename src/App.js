import React from 'react'
import Cards from './Comps/Cards'
import Navbar from './Comps/Navbar'
import Home from './Pages/Home'
import {
  createBrowserRouter,RouterProvider,Route,Link,
} from "react-router-dom";

import Signup from './Pages/Signup';
import Form from './Pages/Form'
import Profile from './Pages/Profile';
import './App.css'
import Studentshome from './Pages/Studentshome'
import StudentProfile from './Pages/StudentProfile'
import Login from './Pages/Login';
const router =createBrowserRouter([
  {path:'/',
  element:<Home></Home>,
},
{path:'signup',
element:<Signup></Signup>,
}
,
{path:'login',
element:<Login></Login>,
}
,
{path:'form',
element:<Form></Form>,
}
,
{path:'studentshome',
element:<Studentshome></Studentshome>,
}
,
{path:'profile',
element:<Profile></Profile>,
},
{path:'studentsprofile',
element:<StudentProfile></StudentProfile>,
}
]);
export default function App() {
  return (
    <div>
   <RouterProvider router={router}/>

    </div>
  )
}

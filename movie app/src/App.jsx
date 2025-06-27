import axios from "axios";
import React, { useState, useEffect } from "react";
import Video from "./Components/video";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Tv_day from "./Components/Tv_day";
import Tv_week from "./Components/Tv_week";
import Movie_day from "./Components/Movie_day";
import Movie_week from "./Components/Movie_week";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import Card_info from "./Components/Card_info";


export default function App() {

  //
      const [movie_day, setMovie_day] = useState([])
      const [tv_day, setTv_day] = useState([])
      const [movie_week, setMovie_week] = useState([])
      const [tv_week, setTv_week] = useState([])
      


     
      useEffect(() => {
       
          axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=98a143002a5afe4c98aceba553614060").then((response) => {
              setMovie_day(response.data.results)   
              // console.log(response.data.results);
              return  response.data ;
  
          })
          axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=98a143002a5afe4c98aceba553614060").then((response) => {
              setTv_day(response.data.results)   
              // console.log(response.data.results);
              return  response.data ;
  
          })
          axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=98a143002a5afe4c98aceba553614060").then((response) => {
              setMovie_week(response.data.results)   
              // console.log(response.data.results);
              return  response.data ;
  
          })
          axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=98a143002a5afe4c98aceba553614060").then((response) => {
              setTv_week(response.data.results)   
              // console.log(response.data.results);
              return  response.data ;
  
          })

      
  
  
      }, [])



      const data = {
        M_day: movie_day ,  
        T_day: tv_day ,
        M_week: movie_week ,
        T_week: tv_week ,

      }

///////////// routing
const routes = createBrowserRouter([
 
   
    {
        path: "/signup",
        element: <Signup />
    },
     {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: (<ProtectedRoute> <Layout /> </ProtectedRoute>),
        children: [
     { path: "/HOME", element: <ProtectedRoute><Video data={data} /></ProtectedRoute> },
      { path: "/Tday", element: <ProtectedRoute><Tv_day data={data} /> </ProtectedRoute>},
      { path: "/Tweek", element: <ProtectedRoute><Tv_week data={data} /> </ProtectedRoute>},
      { path: "/Mday", element: <ProtectedRoute><Movie_day data={data} /></ProtectedRoute> },
      { path: "/Mweek", element: <ProtectedRoute><Movie_week data={data} /> </ProtectedRoute>},
      { path: "/Card_info/:id", element: <ProtectedRoute><Card_info data={data} /></ProtectedRoute> },

        ]
    }
]);


return (
<>
<RouterProvider router={routes} />
</>
)
}














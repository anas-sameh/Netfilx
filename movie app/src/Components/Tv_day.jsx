import React from 'react'
import Card from './Card'
import { Helmet } from 'react-helmet'


export default function Tv_day(props) {
  let {data} = props

  return (
    <div className="row p-2 ">
      <h2 className=' text-danger'>Trending TV day</h2>
      {data.T_day.map((item) => (
  
        <Card  data={item} />
        
      ))
      
      
      }
    
    <Helmet>

       <title>TV page</title>
    </Helmet>
    
    </div>
  )}




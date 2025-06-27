import React from 'react'
import Card from './Card'
import { Helmet } from 'react-helmet'

export default function Movie_day(props) {
    let {data} = props
  return (
    <div className="row p-2">
          <h2 className=' text-danger'>Trending movies day</h2>
          {data.M_day.map((item) => (
      
            <Card  data={item} />
            
          ))
          
          
          }
        
        <Helmet>
            <title>Movie  page</title>
          </Helmet>
        
        </div>
  )
}

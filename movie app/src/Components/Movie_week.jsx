import React from 'react'
import Card from './Card'
import { Helmet } from 'react-helmet'

export default function Movie_week(props) {
    let {data} = props
  return (
    <div className="row p-2">
          <h2 className=' text-danger'>Trending movies week</h2>
          {data.M_week.map((item) => (
      
            <Card  data={item} />
            
          ))
          
          
          }
        
        <Helmet>
            <title>Movie  page</title>
          </Helmet>
        
        </div>
  )
}

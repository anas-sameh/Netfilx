import { Helmet } from "react-helmet"
import Card from "./Card"

export default function Tv_week (props) {
  let {data} = props

  return (
    <div className="row p-2 ">
      <h2 className=' text-danger '>Trending TV week</h2>
      {data.T_week.map((item) => (
  
        <Card  data={item} />
        
      ))
      
      
      }
     <Helmet>

     <title>TV page</title>
    </Helmet>
   
    
    </div>
  )}
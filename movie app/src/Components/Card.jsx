import { useNavigate } from 'react-router-dom';

import './Card.css'
export default function Card(props) {
    const {data} = props;
    const BASE_URL = "https://image.tmdb.org/t/p/w500";

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/Card_info/${data.id}`);
  }

    
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 pt-4" onClick={handleClick}>
            <div className="card-container">
                <img 
                    className="card-image"
                    src={BASE_URL + (data.poster_path ?? data.backdrop_path)} 
                    alt={data.title ?? data.name} 
                />
                <div className="card-overlay">
                    <h3 className="overlay-title"  >{data.title ?? data.name}</h3>
                    <div className="overlay-rating">
                        Rating: {data.vote_average?.toFixed(1)} ⭐
                    </div>
                </div>  
            </div>
            
        </div>
    )
}

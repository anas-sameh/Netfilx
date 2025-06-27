import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import './Card_info.css'

export default function Card_info({ data }) {
  const { id } = useParams();
  const location = useLocation();

  // Try to get card info from location.state (for backward compatibility)
  let cardInfo = location.state;

  // If no state, find the card by id from all data arrays
  if (!cardInfo && data) {
    const allItems = [
      ...(data.M_day || []),
      ...(data.T_day || []),
      ...(data.M_week || []),
      ...(data.T_week || [])
    ];
    cardInfo = allItems.find(item => String(item.id) === String(id));
    if (cardInfo) {
      cardInfo = {
        Rating: cardInfo.vote_average?.toFixed(1),
        original_language: cardInfo.original_language,
        overview: cardInfo.overview,
        origin_country: cardInfo.origin_country,
        media_type: cardInfo.media_type,
        first_air_date: cardInfo.first_air_date,
        title: cardInfo.title ?? cardInfo.name,
        poster_path: cardInfo.poster_path ?? cardInfo.backdrop_path
      };
    }
  }

  const { Rating, original_language, overview, origin_country, media_type, first_air_date, title, poster_path } = cardInfo || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="card-info-wrapper">
      <div className="card-info-container">
        <div className="card-img">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        </div>
        <div className="card-details">
          <h1 className="card-title">{title}</h1>
          <p className="card-overview">{overview ?? 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur veniam praesentium quaerat, magni accusamus eum aut? Consectetur veritatis maiores necessitatibus dolorem facere maxime dolores voluptas! Similique itaque alias a illo?'}</p>
          <ul className="card-meta">
            <li><strong>First Air Date:</strong> {first_air_date ?? '10/10/2005'}</li>
            <li><strong>Media Type:</strong> {media_type ?? 'TV'}</li>
            <li><strong>Origin Country:</strong> {origin_country ?? 'USA'}</li>
            <li><strong>Original Language:</strong> {original_language ?? 'English'}</li>
            <li><strong>Rating:</strong> {Rating ?? 'N/A'} ⭐</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

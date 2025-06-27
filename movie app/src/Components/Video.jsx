import { Helmet } from "react-helmet"
import Card from "./Card"
import './Video.css'

export default function Video(props) {
  return (
    <div className="video-container p-2">
        <div className="section">
            <h2 className="section-title">Trending Movies & TV</h2>
            <div className="row g-4">
                {props.data.M_day.slice(0, 6).map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>

        <div className="section">
            <div className="row g-4">
                {props.data.M_week.slice(0, 6).map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>
        
        <div className="section">
            <div className="row g-4">
                {props.data.T_day.slice(0, 6).map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>

        <div className="section">
            <div className="row g-4">
                {props.data.T_week.slice(0, 6).map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>

        <Helmet>
            <title>Home Page</title>
        </Helmet>
    </div>
  )
}







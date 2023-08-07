import React from "react"

export default function Main(props){
    return(
        <div className="places-container">
            <div className="image-container">
                 <img src={props.imageUrl} className="image"/>
            </div>
            <div className="places-details">
                <div className="sub-cont">
                    <img src={props.icon} className="location-icon" />
                    <p className="location-text">{props.location}</p>
                    <a href={props.googleMapsUrl} className="google-map">View on Google Maps</a>
                </div>
                    <h1 className="title">{props.title}</h1>
                    <p className="date">{props.startDate} - <span>{props.endDate}</span></p>
                    <p className="description">{props.description}</p>
                    
            </div>    
        </div>
    )
}
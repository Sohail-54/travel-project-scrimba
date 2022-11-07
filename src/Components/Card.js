import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            
            <div>
                <img className="card-img" src={props.item.imageUrl} alt="img" />
            </div>
            
            <div className="card-text">
                <div className="dis-flex">
                    <img className="marker" src="../images/location-logo.png" alt="locaton-logo"/>
                    <h4 className="location">{props.item.location}</h4>
                    <a className="link" href={props.item.googleMapsUrl} target="blank">View on Google Maps</a>
                </div>
                <h1 className="card-h1">{props.item.title}</h1>
                <h5>{props.item.startDate}-{props.item.endDate}</h5>
                <p>{props.item.description}</p>
            </div>
        </div>
        
        
    )
    
}
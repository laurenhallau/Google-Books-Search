import React from "react";

const BookCard = (props) => {
    return (
        <div>
           <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.description}</p>
            </div>
           </div> 
        </div>
     );
}

export default BookCard;
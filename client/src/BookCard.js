import React from "react";

const BookCard = ({ image, title, author, description, id, saveBook }) => {
    return (
        <div>
           <div className="card-container">
            <img src={image} alt="" />
            <div className="desc">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{description}</p>
            </div>
           </div> 
          <button
            onClick={() => saveBook(id)}
            >
            saveBook
            </button>
        </div>
     );
}

export default BookCard;
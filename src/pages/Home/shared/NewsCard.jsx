import React from "react";
import { Link } from "react-router-dom";


const NewsCard = ({ aNews }) => {
  const { _id, title, image_url, details } = aNews;
  return (
   <div className="py-4">
        <div className="card card-compact ">
        <div className="w-[600px] flex justify-center">
        <img 
          src={image_url}
          alt={title}
        />
        </div>
      <div className="card-body">
        <h2 className="card-title text-left">{title}</h2>
        {
            details.length > 150 ? <p className="text-left"> {details.slice(0,150)} <Link to={`/news/${_id}`} className="text-blue-600">Read More. . .  </Link> </p> : <p>{details}</p>
        }
        
       
      </div>
    </div>
   </div>
  );
};

export default NewsCard;

import { useState } from "react";
import "./Like.css"; 

const Like = ({ addTocart }) => { 
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      addTocart();
      setLiked(true);
    }
  };

  return (
    <div className="heart-container" onClick={handleLikeClick}>
      <div className={`heart gray-heart ${liked ? "fill-color" : ""}`} />
      <div className={`heart red-heart ${liked ? "animation" : ""}`} />
    </div>
  );
};

export default Like;

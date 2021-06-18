import React from "react";
import "./style.css";

function FriendCard({info}) {
    console.log(info)
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={info.name}
          src={info.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {info.name}
          </li>
          <li>
            <strong>Occupation:</strong> {info.occupation}
          </li>
          <li>
            <strong>Location:</strong> {info.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
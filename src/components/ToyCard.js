import React from "react";

function ToyCard({toy, onUpdateToy, onDeleteToy}) {
  const {id, name, image, likes} = toy

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(onDeleteToy);
  }

  function handleLikes(){
    const newLikes = {
      likes: toy.likes + 1
    }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newLikes),
    })
      .then((r) => r.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button 
        onClick={handleLikes} 
        className="like-btn"
        >Like {"<3"}</button>
      <button 
        onClick={handleDelete} 
        className="del-btn"
        >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

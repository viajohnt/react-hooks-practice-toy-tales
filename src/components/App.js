import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy){
    setToys([...toys, newToy])
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }
  
  function handleDeleteToy(deletedToy){
    const updatedToys = toys.filter(toy => 
      toy.id !== deletedToy.id)
      setToys(updatedToys)
  }



  return (
    <>
      <Header toys={toys} />
      {showForm ? <ToyForm toys={toys} onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys= {toys} 
      onUpdateToy= {handleUpdateToy} 
      onDeleteToy= {handleDeleteToy} />
    </>
  );
}

export default App;

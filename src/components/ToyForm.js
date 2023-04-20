import React, {useState} from "react";

function ToyForm({onAddToy, toys}) {
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newToy = {
      id: toys.length +1,
      name: formData.name,
      image: formData.image,
      likes : 0
    }
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newToy)
    })
    .then(response => response.json())
    .then(onAddToy)
  }






  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange= {handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange= {handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

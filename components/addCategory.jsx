"use client";
import { useState } from "react";
import axios from "axios";

function AddCategories() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:3000/api/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Clear form after successful submission
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        className="border p-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="border p-2"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button className="bg-black text-white p-2" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
}

export default AddCategories;

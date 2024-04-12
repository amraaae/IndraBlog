"use client";
import { useState } from "react";
import axios from "axios";

function AddCategories() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState();
  const HandleClick = async () => {
    let data = await axios.post("http://localhost:3000/api/category", {
      title,
      description,
    });
  };
  return (
    <div className=" flex flex-col gap-[40px]">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button className="bg-[#000] text-[#fff] " onClick={HandleClick}>
        add category
      </button>
    </div>
  );
}

export default AddCategories;
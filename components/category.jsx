"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/category");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[80%] m-auto h-[100vh]">
      <div className="text-center py-14">
        <h1 className="text-7xl font-bold italic">All Posts</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category._id} className="border p-4">
            <h2 className="text-xl font-bold">{category.title}</h2>
            <p>{category.description}</p>
            {category.image && <img src={category.image} alt={category.title} className="mt-2 w-full" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

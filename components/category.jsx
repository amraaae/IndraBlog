import React from "react";
import axios from "axios";

function Categories({ categories }) {
  console.log(categories);
  return (
    <div>
      {categories && categories.map((el) => <p key={el._id}>{el.title}</p>)}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/category");
    console.log(data);
    const categories = data.data;

    return {
      props: { categories },
    };
  } catch (error) {
    return {
      props: { categories: [] }, // Return empty array if error occurs
    };
  }
}

export default Categories;
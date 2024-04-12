"use client";
import FileUpload from "@/components/fileUpload";
import { useState } from "react";
import axios from "axios";

function Posts() {
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState();
  const handlePublish = async () => {
    try {
      const data = await axios.post("http://localhost:3000/api/blog", {
        fileName,
        title,
        description,
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[93.5vh] w-full">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <FileUpload setName={setFileName} />
      <button onClick={handlePublish}>publish</button>
      {success && <p>success</p>}
    </div>
  );
}

export default Posts;

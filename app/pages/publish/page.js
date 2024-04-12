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
    <div className="h-[93.5vh] w-full flex flex-col justify-center items-center">
      <input
        type="text"
        className="w-[300px] px-4 py-2 text-black mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="w-[300px] px-4 py-2 text-black mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none "
        placeholder="Enter description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <FileUpload setName={setFileName} />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handlePublish}
      >
        Publish
      </button>
      {success && <p className="mt-4 text-green-600">Success</p>}
    </div>
  );
}

export default Posts;

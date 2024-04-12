"use client";
import { useState, useEffect } from "react";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/lib/firebase";

function FileUpload({ setName }) {
  const [selectFile, setSelectFile] = useState(null);

  const [success, setSuccess] = useState();
  const fileSelectHandle = (e) => {
    setSelectFile(e.target.files[0]);
  };
  useEffect(() => {
    let storage = getStorage(app);
    let upload = () => {
      const storageRef = ref(storage, selectFile.name);
      const uploadTask = uploadBytesResumable(storageRef, selectFile);
      uploadTask.on(
        "state_chaged",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setName(downloadURL);
          });
        }
      );
    };
    selectFile && upload();
  }, [selectFile]);
  return (
    <div>
      {/* {success & <p>{success}</p>} */}
      <input
        type="file"
        onChange={(e) => {
          fileSelectHandle(e);
        }}
      />
    </div>
  );
}

export default FileUpload;
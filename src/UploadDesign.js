import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import compressFile from "./utils/compress";
import { DESIGN_UPLOAD } from "./graphql";
import DisplayUploadData from "./DisplayUploadData";
import "./App.css";

const UploadPhoto = () => {
  const [description, setDescription] = useState("");
  const [sendDesign, { loading, error, data }] = useMutation(DESIGN_UPLOAD, {
    onCompleted: () => setDescription(""),
  });

  const onChange = async ({
    target: {
      files: [file],
    },
  }) => {
    const normalSizeFile = file;

    const normalFile = await compressFile(0.8, 1080, normalSizeFile);
    const compressedFile = await compressFile(0.5, 700, file);

    sendDesign({
      variables: { normalFile, compressedFile, description },
    });
  };

  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <div className="uploadBox">
      <input
        name="description"
        className="input"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        placeholder="Description"
      ></input>
      <label className="custom-file-upload">
        <input
          type="file"
          required
          onChange={onChange}
          className="uploadButton"
        />
        {data ? "Done! Another one?" : loading ? "Loading..." : "Upload Design"}
      </label>
      {!!data && <DisplayUploadData data={data.designUpload} />}
    </div>
  );
};

export default UploadPhoto;

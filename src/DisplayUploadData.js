import React from "react";

const DiplayUploadData = ({ data }) => (
  <div class="displayUploadData">
    Normal: <a href={data.normalUrl}>Click Here</a>
    <br />
    Compressed: <a href={data.compressedUrl}>Click Here</a>
  </div>
);

export default DiplayUploadData;

import React from "react";
import UploadPhoto from "./UploadPhoto";
import UploadDesign from "./UploadDesign";

const App = () => (
  <div className="App">
    <div className="content">
      <div>
        <h1>Photos</h1>
        <UploadPhoto />
      </div>
      <div>
        <h1>Design</h1>
        <UploadDesign />
      </div>
    </div>
  </div>
);

export default App;

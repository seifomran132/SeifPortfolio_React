import React from "react";
import TextSide from "./TextSide";
import ImageSide from "./ImageSide";

function HomeInfo(props) {
  return (
    <main className="main-home">
      <div className="row">
        <TextSide />
        <ImageSide />
      </div>
    </main>
  );
}

export default HomeInfo;

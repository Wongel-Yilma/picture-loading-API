import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  console.log(props);
  const images = props.images.map(({ description, id, urls }) => (
    <img alt={description} key={id} src={urls.regular}></img>
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;

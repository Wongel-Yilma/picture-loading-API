import React from "react";

const ImageList = (props) => {
  console.log(props);
  const images = props.images.map(({ description, id, urls }) => (
    <img alt={description} key={id} src={urls.regular}></img>
  ));
  return <div>{images}</div>;
};

export default ImageList;

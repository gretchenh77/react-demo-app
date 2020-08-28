import React from "react";

function Display(props) {
  let cat = "loading";
  if (props.category && props.category.title) {
    cat = props.category.title;
  }
  return (
    <div className="Display">
      <strong>Question:</strong>
      {props.question}
      <br />
      <strong>Category:</strong>
      {cat}
      <br />
      <strong>Point Value:</strong>
      {props.value}
      <br />
      <strong>User Score:</strong>
      {props.points}
    </div>
  );
}

export default Display;

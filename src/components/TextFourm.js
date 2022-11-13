import React, { useState } from "react";

export default function TextFourm(props) {
  const [text, setText] = useState("Enter Text Here");
  const convertUpperCase = () => {
    let newText = text.toUpperCase();
    props.showAlert("Your Text Converted into UpperCase", "success");
    setText(newText);
  };
  const convertLowerCase = () => {
    props.showAlert("Your Text Converted into LowerCase", "success");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#445669",
          // backgroundColor: props.mode === "dark" ? "grey" : "white",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="my-4">
          <textarea
            style={{
              color: props.mode === "dark" ? "white" : "#445669",
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
            }}
            className="form-control"
            id="boxArea"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={convertUpperCase}>
          Convert to Upprecase
        </button>
        <button className="btn btn-primary mx-1" onClick={convertLowerCase}>
          Convert to Lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#445669",
          // backgroundColor: props.mode === "dark" ? "grey" : "white",
        }}
      >
        <h5>Text Summary</h5>
        <p>
          {text.length > 0 ? text.trim().split(" ").length : 0} Words ,
          {text.length} Charecters
        </p>
        <p>{0.008 * text.split(" ").length} Time To Read Words</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

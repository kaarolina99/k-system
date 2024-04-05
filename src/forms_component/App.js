import React from "react";
import "./App.css";

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    console.log("Enter key was pressed");
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const formJson = Object.fromEntries(formData.entries());
  console.log("YOLO", formJson);
}

export function FormsGrid() {
  return (
    <div className="formsGridContainer">
      <div className="FormsGrid">
        <div className="InputForms">
          <h1> Skriv deg opp i køen </h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="Navn"> Navn </label>
            <br />
            <input
              type="text"
              id="Navn_"
              name="Navn"
              onKeyDown={handleKeyDown}
            />
            <br />
            <label htmlFor="Sted"> Sted </label>
            <br />
            <input
              type="text"
              id="Sted_"
              name="Sted"
              onKeyDown={handleKeyDown}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}

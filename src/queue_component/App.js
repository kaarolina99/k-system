import React from "react";
import "./App.css";

let test_queue = [
  { name: "Karolina", sted: "Amfiet" },
  { name: "Julian", sted: "Utsikten" },
  { name: "Sara", sted: "Blåbås" },
  { name: "Henrik", sted: "Langbord" },
  { name: "Erik", sted: "Grønnbås" },
  { name: "Tidemann", sted: "Amfiet" },
];

export function QueueGrid() {
  return (
    <div className="queueGridContainer">
      <div className="QueueGrid">
        <div>
          <div className="KContainer">
            <h1>Kø</h1>
          </div>
          <div className="ActiveQueue">
            <div className="queueItems">
              {test_queue.map((person, index) => (
                <div key={index} className="queueItem">
                  <p>
                    Name: {person.name} Sted: {person.sted}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

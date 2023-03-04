import React from "react";
import { arrowup, arrowdown } from "../helper/icons";
import { useState } from "react";

const Questions = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div className="card-group">
      {show ? (
        <div className="card ">
          <div className="question-answer">
            <h4>
              {id}.{question}
            </h4>
            <button onClick={handleToggle}>{arrowup}</button>
          </div>

          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="question">
            <h4>
              {id}.{question}
            </h4>
            <button onClick={handleToggle}>{arrowdown}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;

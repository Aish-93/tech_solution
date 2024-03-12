import React from "react";
import {QUESTIONS} from "../questions";
import "../index.css";
import QuestionList from "./QuestionList";
function Main() {
  const questionArray = Object.values(QUESTIONS);

  return (
    <>
      <h1>
        You will be asked a series of questions Kindly answer in Yes or No only
      </h1>
      <div>
        <h2>Questions</h2>
        <QuestionList questions={questionArray} />
      </div>
    </>
  );
}

export default Main;

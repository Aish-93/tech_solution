import React, {useState} from "react";

function QuestionItem({question, onAnswerSubmit}) {
  const [answer, setAnswer] = useState("");
  const [errMsg, setErrmsg] = useState("");

  const handleAnswerChange = (e) => {
    const userInput = e.target.value.trim().toLowerCase();
    if (/^[yesno]*$/.test(userInput)) {
      setAnswer(userInput);
      setErrmsg("");
    } else {
      setErrmsg('Please enter "yes" or a "no"');
    }
  };

  const handleAnswerSubmit = () => {
    if (answer !== "") {
      onAnswerSubmit(answer);
      setAnswer("");
    }
  };
  return (
    <>
      <div>
        <h2>{question}</h2>
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          placeholder='Type "yes" or "no"'
        />

        {errMsg && <p style={{color: "red"}}>{errMsg}</p>}
      </div>
      <button onClick={handleAnswerSubmit}>Save your ans</button>
    </>
  );
}

export default QuestionItem;

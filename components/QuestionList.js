import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [scores, setScores] = useState(null);

  console.log(questions);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (answers.length > 0) {
      const result = answers.filter((item) => item === "yes");
      const calculatedScore = (result.length / answers.length) * 100;
      setScores(calculatedScore);
    }
  }, [answers]);
  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <QuestionItem
          question={questions[currentQuestionIndex]}
          onAnswerSubmit={handleAnswer}
        />
      ) : (
        <h2>All questions answered</h2>
      )}

      {questions.length === answers.length && (
        <div>
          {scores !== null && (
            <div>
              <h2>Your score is {scores}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionList;

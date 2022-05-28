import { useState } from "react";

function Question({ questionText, correctAnswer, incorrectAnswers, index }) {
  const [isCorrect, setIsCorrect] = useState("unanswered");
  return (
    <div key={index}>
      <h2>{questionText}</h2>
      {/* <h3>Pick an Answer!</h3> */}
      {isCorrect === "unanswered" ? (
        <>
          <button
            onClick={() => {
              setIsCorrect("Correct");
            }}
          >
            {correctAnswer}
          </button>
          {incorrectAnswers.map((answer, index) => {
            return (
              <button
                onClick={() => {
                  setIsCorrect("Wrong");
                }}
                key={index}
              >
                {answer}
              </button>
            );
          })}
        </>
      ) : isCorrect === "Correct" ? (
        <p>Correct!</p>
      ) : (
        <p>Incorrect :(</p>
      )}
    </div>
  );
}

export default Question;

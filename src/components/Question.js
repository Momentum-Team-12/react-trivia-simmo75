import React, { useState, useEffect } from "react";
import _ from "lodash";

function Question({ questionText, correctAnswer, incorrectAnswers, index }) {
  const [isCorrect, setIsCorrect] = useState("unanswered");
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    incorrectAnswers.push(correctAnswer);
    setShuffledAnswers(_.shuffle(incorrectAnswers));
  }, []);

  return (
    <div key={index}>
      <h2>{questionText}</h2>
      {/* <h3>Pick an Answer!</h3> */}
      {isCorrect === "unanswered" ? (
        <>
          {shuffledAnswers.map((answer, index) => {
            return (
              <button
                onClick={(e) => {
                  if (e.target.innerText === correctAnswer) {
                    setIsCorrect("Correct");
                  } else {
                    setIsCorrect("Wrong");
                  }
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
        <p>Wrong!</p>
      )}
    </div>
  );
}

export default Question;

import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./Question";

function Categories() {
  const [catObjects, setCatObjects] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [categorySelected, setCategorySelected] = useState(false);
  

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((res) => {
      console.log(res.data);
      setCatObjects(res.data.trivia_categories);
    });
  }, []);

  const handleSetSelectedCat = (catObject) => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${catObject.id}`)
      .then((res) => {
        console.log(catObject.id);
        console.log(res.data);
        setQuestions(res.data.results);
        setCategorySelected(true);
      });
  };

  return (
    <>
      {!categorySelected ? (
        <>
          <h2>Pick a Category?</h2>
          <div>
            {catObjects.map((catObject, index) => {
              return (
                <div key={index}>
                  <button onClick={() => handleSetSelectedCat(catObject)}>
                    {catObject.name}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div>
            {questions &&
              questions.map((question, index) => {
    
                return (
                  <Question
                    questionText={question.question}
                    correctAnswer={question.correct_answer}
                    key={index}
                    incorrectAnswers={question.incorrect_answers}
                  />
                );
              })}
          </div>
        </>
      )}
    </>
  );
}

export default Categories;

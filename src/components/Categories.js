import "./Categories.css";
import axios from "axios";
import { useEffect, useState } from "react";

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
          <div>
            <h2>Pick a Category!</h2>
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
            <p>
              {questions &&
                questions.map((questions, index) => {
                  return (
                    <div key={index}>
                      <p>{questions.question}</p>
                      <h3>Pick an Answer!</h3>
                      <button>{questions.correct_answer}</button>
                      {questions.incorrect_answers.map((answer, index) => {
                        return <button key={index}>{answer}</button>;
                      })}
                    </div>
                  );
                })}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Categories;

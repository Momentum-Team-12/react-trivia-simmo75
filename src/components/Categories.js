import { useEffect, useState } from "react";
import axios from "axios";

export function Categories() {
  const [catObjects, displayApiResults] = useState([]);

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((res) => {
      console.log(res.data.trivia_categories);
      displayApiResults(res.data.trivia_categories);
    });
  }, []);

  return (
    <div>
      <p>Pick a category:</p>
      {catObjects.map((catObject, index) => {
        return (
          <div key={index}>
            <p>{catObject.name}</p>
          </div>
        );
      })}
    </div>
  );
}

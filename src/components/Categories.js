import { useEffect, useState } from "react";
import axios from "axios";

export function Categories() {
  const [catObjects, setCatObjects] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((res) => {
      console.log(res.data.trivia_categories);
      setCatObjects(res.data.trivia_categories);
    });
  }, []);

  return (
    <div>
      <div className="container">
        {catObjects.map((catObject, index) => {
          return (
            <div key={index}>
              <button
                className="catButt"
                onClick={() => setSelectedCat(catObject.id)}
              >
                {catObject.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

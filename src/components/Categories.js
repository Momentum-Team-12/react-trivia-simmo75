import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";

export function Categories() {
  const [catObjects, setCatObjects] = useState([]);
  // const [catObject, setSelectedCat] = useState(null);

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((res) => {
      console.log(res.data.trivia_categories);
      setCatObjects(res.data.trivia_categories);
    });
  }, []);

  const tempLink = (catId) => {
    console.log(catId);
  };

  return (
    <div>
      <div className="container">
        {catObjects.map((catObject, index) => {
          const catId = catObject.id;
          const catName = catObject.name;

          return (
            <div key={index}>
              <button className="catButt" onClick={() => tempLink(catId)}>
                {catName}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

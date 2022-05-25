import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

export function Questions() {
  const [questObjects, setQuestObjects] = useState([]);
  const [selectedQuest, setSelectedQuest] = useState(null);

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10`).then((res) => {
      console.log(res.data.trivia_questions);
      setQuestObjects(res.data.trivia_questions);
    });
  }, []);

  return (
    <div>
      <div>
        {questObjects.map((questObject, index) => {
          return (
            <div key={index}>
              <button onClick={() => setSelectedQuest(questObject.id)}>
                {questObject.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

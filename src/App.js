import "./components/Categories.css";
import "./App.css";
import { useState } from "react";
import { Categories } from "./components/Categories";

function App() {
  return (
    <div className="text">
      <h1>Big Lou's Trivia</h1>
      <h2>Let's Play!</h2>
      <h3>Pick a category:</h3>

      <Categories />
    </div>
  );
}

export default App;

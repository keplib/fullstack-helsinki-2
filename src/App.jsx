import Header from "./components/Header";
import Stats from "./components/Stats";
import Buttons from "./components/Buttons";

import Anecdotes from "./components/Anecdotes";

import { useState } from "react";


function App() {
  
  const [ratings, setRatings] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  const [all, setAll] = useState(0)

  return (
    <div>
      <Header />
      <Buttons ratings={ratings} setRatings={setRatings} setAll={setAll} all={all}/>
      <Stats ratings={ratings} all={all}/>
      <Anecdotes />
    </div>
  )
}

export default App

import Header from "./components/Header";
import Stats from "./components/Stats";
import Buttons from "./components/Buttons";

import { useState } from "react";


function App() {
  
  const [ratings, setRatings] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  return (
    <div>
      <Header />
      <Buttons ratings={ratings} setRatings={setRatings}/>
      <Stats ratings={ratings}/>
    </div>
  )
}

export default App

import { useState, useEffect } from "react"
import Button from "../components/Button"

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(function() {
    if(counter > 0) {
      setColor("green");
    } else if(counter < 0) {
      setColor("red");
    } else {
      setColor("black");
    }
  }, [counter])

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <p style={{
        fontSize: "3rem",
        color: color,
      }}>{counter}</p>
      <div>
        <Button text="decrement" onClickFunc={() => setCounter(counter-1)}></Button>
        <Button text="reset" onClickFunc={() => setCounter(0)}></Button>
        <Button text="increments" onClickFunc={() => setCounter(counter+1)}></Button>
      </div>
    </div>
  )
}

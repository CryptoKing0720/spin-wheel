import React, { useRef } from "react";
import "./App.css";
import { Wheel } from "spin-wheel-ts";

const wheelItems = [
  {
    backgroundColor: "#0057E2",
  },
  {
    backgroundColor: "#41256A",
  },
  {
    backgroundColor: "#2561AE",
  },
  {
    backgroundColor: "#DB0181",
  },
  {
    backgroundColor: "#1F304E",
  },
  {
    backgroundColor: "#E85214",
  },
  {
    backgroundColor: "#014B8D",
  },
  {
    backgroundColor: "#DD1E2D",
  },
  {
    backgroundColor: "#242BB0",
  },
  {
    backgroundColor: "#FFCB04",
  },
];

function App() {
  const wheelRef = useRef<Wheel | null>(null);
  const handleWheelInit = (element: any) => {
    if (!wheelRef.current) {
      console.log(element);

      wheelRef.current = new Wheel(element, {
        items: wheelItems,
      });
    }
  };
  return <div ref={(element) => handleWheelInit(element)}>test</div>;
}

export default App;

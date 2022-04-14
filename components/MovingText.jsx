import { useEffect, useRef } from "react";
import {playRowAnim } from "../animations"
import {useWindowSize} from "../hooks"
const MovingText = ({list, reverse=false}) => {
  const rowRef = useRef(null)
  const size = useWindowSize()
  useEffect(()=> {
    if(size.width > 992){
      playRowAnim(rowRef.current, reverse, 100)
    }else{
      playRowAnim(rowRef.current, reverse, 100)
    }
    
  },[rowRef, size])
  const colorArray = ["#FF5500","#CE349A","#FF5500","#CE349A","#FF9900", "#8E00E6"]
  const textArray = ["Kiva","Level","Papa & Barkley","Old Pal","Wunder", "Besito", "1906"]
  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  return(
    <div style={{overflow: "hidden"}}>
      <div ref={rowRef} style={{whiteSpace: "nowrap", display: "flex",  gap: 24, fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em"}}>
        {list.map((e, i) => <div key={i} style={{color: getRandom(colorArray)}}>{getRandom(textArray)}</div>)}
      </div>
    </div>
  )
}

export default MovingText
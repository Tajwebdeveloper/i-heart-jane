import { useEffect, useRef } from "react";
import {playRowAnim } from "../animations"
const MovingText = ({list, reverse=false}) => {
  const rowRef = useRef(null)
  useEffect(()=> {
    playRowAnim(rowRef.current, reverse)
  },[rowRef])
  return(
    <div style={{overflow: "hidden"}}>
      <div ref={rowRef} style={{whiteSpace: "nowrap", display: "flex",  gap: 24, fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em"}}>
        {list.map((e, i) => <div key={i} style={{color: e.color}}>{e.text}</div>)}
      </div>
    </div>
  )
}

export default MovingText
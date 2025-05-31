import React, { useRef } from 'react'

const UseRefHookOne = () => {
    const colorRef = useRef(true)
    console.log("components rerendered")

    const toggleColor = () => {
        if(colorRef.current){
            document.body.style.background = "lightBlue"
        }
        else{
            document.body.style.background = "lightPink"
        }
        colorRef.current = !colorRef.current
    }
  return (
    <div>
        <button onClick={toggleColor}>toggle</button>
    </div>
  )
}

export default UseRefHookOne
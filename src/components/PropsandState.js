import React, { useState } from "react";
import "./Kennel.js"

export const PropsAndState = ({jatin}) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    return (
        <>
        <h3>Welcome, {jatin}</h3>
        <p>{countClicks}</p>
        <button onClick={(handleClick)}>Click Me</button>
        </>
    )
}


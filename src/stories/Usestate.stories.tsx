import {memo, useMemo, useState} from "react";
import {number} from "prop-types";

export default {
    title: "UseState demo",

}

function generateData() {
    console.log("generateData")
    return 1;
}

export const Example1 = () => {
    console.log("EXAMPLE")

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return (
        <>
            <button onClick={()=> setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    )
}
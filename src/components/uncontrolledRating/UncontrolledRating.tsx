import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRating(props: RatingPropsType) {

    let [selected, setSelected] = useState(0)

    return (
        <div>
            <Star selected={selected > 0}/>
            <button onClick={() => {setSelected(selected = 1)}}>1</button>
            <Star selected={selected > 1}/>
            <button onClick={() => {setSelected(selected = 2)}}>2</button>
            <Star selected={selected > 2}/>
            <button onClick={() => {setSelected(selected = 3)}}>3</button>
            <Star selected={selected > 3}/>
            <button onClick={() => {setSelected(selected = 4)}}>4</button>
            <Star selected={selected > 4}/>
            <button onClick={() => {setSelected(selected = 5)}}>5</button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}
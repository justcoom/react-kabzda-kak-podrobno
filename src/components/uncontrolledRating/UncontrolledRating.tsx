import React, {Dispatch, SetStateAction, useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function UncontrolledRating(props: RatingPropsType) {

    let [selected, setSelected] = useState(0)

    return (
        <div>
            <Star selected={selected > 0} callback={() => setSelected(1)}/>
            <Star selected={selected > 1} callback={() => setSelected(2)}/>
            <Star selected={selected > 2} callback={() => setSelected(3)}/>
            <Star selected={selected > 3} callback={() => setSelected(4)}/>
            <Star selected={selected > 4} callback={() => setSelected(5)}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    callback?: () => void
}

function Star(props: StarPropsType) {
    return props.selected ? <span onClick={props.callback}><b>star </b></span> : <span onClick={props.callback}>star </span>
}
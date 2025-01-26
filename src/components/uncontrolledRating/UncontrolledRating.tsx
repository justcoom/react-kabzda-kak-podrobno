import React, {Dispatch, SetStateAction, useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {

    let [selected, setSelected] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={selected > 0} callback={() => {
                setSelected(1)
                props.onChange(1)
            }}/>
            <Star selected={selected > 1} callback={() => {
                setSelected(2)
                props.onChange(2)
            }}/>
            <Star selected={selected > 2} callback={() => {
                setSelected(3)
                props.onChange(3)
            }}/>
            <Star selected={selected > 3} callback={() => {
                setSelected(4)
                props.onChange(4)
            }}/>
            <Star selected={selected > 4} callback={() => {
                setSelected(5)
                props.onChange(5)
            }}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.callback()}>{props.selected ? <b> star </b> : " star "}</span>
}
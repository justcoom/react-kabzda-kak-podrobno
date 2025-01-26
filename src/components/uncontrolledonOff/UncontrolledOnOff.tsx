import styled from "styled-components";
import {useState} from "react";

type Props = {
    // state: boolean
    onChange: (state: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: Props) => {

    console.log("OnOff Rendered")
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    console.log("on: " + on)

    const onStyle = {
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        backgroundColor: on ? "white" : "red",
    }
    const circle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red",
    }
    const wrapper = {
        marginTop: "20px"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div style={wrapper}>
            <div>
                <div style={onStyle} onClick={onClicked}>On
                </div>
                <div style={offStyle} onClick={offClicked}>Off
                </div>
                <div style={circle}></div>
            </div>
        </div>
    )
}

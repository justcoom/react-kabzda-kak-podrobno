import styled from "styled-components";
import {useState} from "react";

type Props = {
    state: boolean
    setOnOff: (state: boolean) => void
}

export const OnOff = (props: Props) => {

    const onStyle = {
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        backgroundColor: props.state ? "green" : "white",
    }
    const offStyle = {
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        backgroundColor: props.state ? "white" : "red",
    }
    const circle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.state ? "green" : "red",
    }
    const wrapper = {
        marginTop: "20px"
    }

    return (
        <div style={wrapper}>
            <div>
                <div style={onStyle} onClick={() => {props.setOnOff(true)}}>On</div>
                <div style={offStyle} onClick={() => {props.setOnOff(false)}}>Off</div>
                <div style={circle}></div>
            </div>
        </div>
    )
}
import styled from "styled-components";
import {useState} from "react";

type Props = {
    state: boolean
}

export const OnOff = (props: Props) => {

    console.log("OnOff Rendered")
    let [on, setOn] = useState(props.state);

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



    return (
        <div style={wrapper}>
            <div>
                <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
                <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
                <div style={circle}></div>
            </div>


            {/*{props.state &&*/}
            {/*    <FlexWrapper>*/}
            {/*        <Button style={{backgroundColor: "green"}}>On</Button>*/}
            {/*        <Button>Off</Button>*/}
            {/*        <Circle style={{backgroundColor: "green"}}></Circle>*/}
            {/*    </FlexWrapper>*/}
            {/*}*/}
            {/*{!props.state &&*/}
            {/*    <FlexWrapper>*/}
            {/*        <Button>On</Button>*/}
            {/*        <Button style={{backgroundColor: "red"}}>Off</Button>*/}
            {/*        <Circle style={{backgroundColor: "red"}}></Circle>*/}
            {/*    </FlexWrapper>*/}
            {/*}*/}
        </div>
    )
}

const Button = styled.div`
    padding: 25px;
    width: 40px;
    border: 1px solid black;
    text-align: center;
`

const FlexWrapper = styled.div`
    display: flex;
    margin-top: 25px;
`

const Circle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid black;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: 10px;
`
import styled from "styled-components";

type Props = {
    state: boolean
}


export const OnOff = (props: Props) => {
    return (
        <div>
                {props.state &&
                    <FlexWrapper>
                        <Button style={{backgroundColor: "green"}}>On</Button>
                        <Button>Off</Button>
                        <Circle style={{backgroundColor: "green"}}></Circle>
                    </FlexWrapper>
                }
                {!props.state &&
                    <FlexWrapper>
                        <Button>On</Button>
                        <Button style={{backgroundColor: "red"}}>Off</Button>
                        <Circle style={{backgroundColor: "red"}}></Circle>
                    </FlexWrapper>
                }
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
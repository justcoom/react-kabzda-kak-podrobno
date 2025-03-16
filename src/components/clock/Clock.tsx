import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            {props.mode === 'digital'
                ? <DigitalClockView date={date}/>
                : <AnalogClockView date={date}/>
            }
        </div>
    )
}

export type ClockPropsType = {
    date: Date
}
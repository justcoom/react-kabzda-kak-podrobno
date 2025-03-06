import {useEffect, useState} from "react";

type PropsType = {}

const getTwoDigitsString = (number: number) => number < 10 ? "0" + number : number

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
            console.log('tick')
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}:</span>
            <span>{getTwoDigitsString(date.getMinutes())}:</span>
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )
}
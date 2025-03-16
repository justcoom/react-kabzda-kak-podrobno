import {ClockPropsType} from "./Clock";

export const getTwoDigitsString = (number: number) => number < 10 ? "0" + number : number

export const DigitalClockView = ({date}: ClockPropsType) => {
    return (
        <>
            <span>{getTwoDigitsString(date.getHours())}:</span>
            <span>{getTwoDigitsString(date.getMinutes())}:</span>
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </>
    )
}
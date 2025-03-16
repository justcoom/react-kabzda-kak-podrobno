import {Clock} from "./Clock";


export default {
    title: 'clock demo',
    component: Clock
}

export const AnalogClock = () => {
    return <Clock mode={'analog'}/>
}
export const DigitalClock = () => {
    return <Clock mode={'digital'}/>
}



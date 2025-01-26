import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    component: UncontrolledOnOff,
};

const callback = action("on or off clicked")

export const OnMode = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={callback}/>
}

export const OffMode = () => {
    return <UncontrolledOnOff defaultOn={false} onChange={callback}/>
}

export const BugMode = () => {
    return <div>Uncsync when change defaultValue when already rendered</div>
}

export const DefaultInputValue = () => {
    return <input type="text" defaultValue={"yo"} onChange={() => {}}/>
}
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    component: OnOff,
};

const callback = action("on or off clicked")

export const OnMode = () => {
    return <OnOff setOnOff={callback} state={true}/>
}

export const OffMode = () => {
    return <OnOff setOnOff={callback} state={false}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOff state={value} setOnOff={setValue}/>
}

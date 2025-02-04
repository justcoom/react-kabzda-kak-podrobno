import {Select} from "./Select";
import {ChangeEvent, useState} from "react";

export default {
    component: Select
}

export const SelectMode = () => {
    const [value, setValue] = useState<number>(2)
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onChange = (value: any) => {
        setValue(value)
    }

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return <Select
        setCollapsed={setCollapsedHandler}
        collapsed={collapsed}
        value={value}
        onChange={onChange}
        items={[
            {title: "Dimych", value: 1},
            {title: "Valera", value: 2},
            {title: "Artem", value: 3},
            {title: "Viktor", value: 4}
        ]}
    />
}
import {Select} from "./Select";
import {ChangeEvent, useState} from "react";

export default {
    component: Select
}

export const SelectMode = () => {
    const [value, setValue] = useState<string>('2')
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onChange = (value: string) => {
        setValue(value)
    }

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <>
            <Select
                setCollapsed={setCollapsedHandler}
                collapsed={collapsed}
                value={value}
                onChange={onChange}
                items={[
                    {title: "Minsk", value: "1"},
                    {title: "Moscow", value: "2"},
                    {title: "Kiev", value: '3'},
                    {title: "Viktor", value: '4'}
                ]}
            />
        </>
    )
}

export const withoutValueSelect = () => {
    const [value, setValue] = useState<string>('2')
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onChange = (value: string) => {
        setValue(value)
    }

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return <Select
        setCollapsed={setCollapsedHandler}
        collapsed={collapsed}

        onChange={onChange}
        items={[
            {title: "Minsk", value: "1"},
            {title: "Moscow", value: "2"},
            {title: "Kiev", value: '3'},
            {title: "Viktor", value: '4'}
        ]}
    />
}
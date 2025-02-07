
import {ChangeEvent, useState} from "react";
import {SelectDimych} from "./SelectDimych";

export default {
    component: SelectDimych
}

export const SelectMode = () => {
    const [value, setValue] = useState<string>('2')

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <>
            <SelectDimych

                value={value}
                onChange={onChange}
                items={[
                    {title: "Minsk", value: "1"},
                    {title: "Moscow", value: "2"},
                    {title: "Kiev", value: '3'},

                ]}
            />
        </>
    )
}

export const withoutValueSelect = () => {
    const [value, setValue] = useState<string | null>(null)

    const onChange = (value: string) => {
        setValue(value)
    }

    return <SelectDimych
        value={value}
        onChange={onChange}
        items={[
            {title: "Minsk", value: "1"},
            {title: "Moscow", value: "2"},
            {title: "Kiev", value: '3'},
            {title: "Viktor", value: '4'}
        ]}
    />
}
import {ChangeEvent, useRef, useState} from "react";
import {Input} from "./Input";
import {action} from "@storybook/addon-actions";


export default {
    component: Input
}

export const UncontrolledInput = () => {
    return (
        <Input/>
    )
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actialValue = event.currentTarget.value
        setValue(actialValue)
    }

    return (
        <div>
            <input onChange={onChange}/>{value}
        </div>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)


    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            actual value: {value}
        </div>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={onChange}>
        <option value="1">none</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
        <option value="4">Minsk</option>
    </select>
}

export const ControlledInputWithFixedValue = () => {
    return <input value={"it-incubator"}/>
}
import React from "react";
import '../App.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
    setCollapsed: () => void
    collapsed: boolean
}

export const Select = (props: SelectPropsType) => {


    return (
        <div tabIndex={0} className={"selectStyle"} onBlur={props.setCollapsed}>
            <div onClick={props.setCollapsed} className={'valueStyle'}>
                {props.items.find(i => i.value === props.value)?.title}
            </div>
            {!props.collapsed &&
                props.items.map((i) =>
                    <div
                        key={i.value}
                        className={"item"}
                        // onBlur={props.setCollapsed}
                        onClick={() => {
                            props.onChange(i.value)
                            props.setCollapsed()
                        }}>
                        {i.title}
                    </div>)}
        </div>
    );
};
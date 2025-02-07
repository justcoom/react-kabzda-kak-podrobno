import React from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: string) => void
    items: ItemType[]
    setCollapsed: () => void
    collapsed: boolean
}

export const Select = (props: SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <>
            <div tabIndex={0} className={styles.selectStyle} onBlur={props.setCollapsed}>
                <div onClick={props.setCollapsed} className={styles.valueStyle}>
                    {selectedItem && selectedItem.title + " ⬇️"}
                </div>
                <div>
                    {!props.collapsed &&
                        props.items.map((i) =>
                            <div
                                key={i.value}
                                className={styles.item}
                                // onBlur={props.setCollapsed}
                                onClick={() => {
                                    props.onChange(i.value)
                                    props.setCollapsed()
                                }}>
                                {i.title}
                            </div>)}
                </div>
            </div>
        </>

    );
};
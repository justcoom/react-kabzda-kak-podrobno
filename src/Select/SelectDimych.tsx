import React, {useState, KeyboardEvent} from "react";
import styles from "./SelectDimych.module.css"


type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: string) => void
    items: ItemType[]
}

export const SelectDimych = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === 'Escape') {
            setActive(false)
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const temp = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (temp) {
                        props.onChange(temp.value)
                        setHoveredElementValue(temp.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
                setHoveredElementValue(props.items[0].value)
            }
        }
    }

    return (
        <>
            <select name="" id="">
                <option value="1"></option>
                <option value="2">222222222</option>
                <option value="3">33333333</option>
            </select>

            <div tabIndex={0} className={styles.select} onKeyDown={onKeyPress}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i =>
                            <div
                                onMouseEnter={() => {
                                    setHoveredElementValue(i.value)
                                }}
                                className={hoveredItem === i ? styles.selected : ""}
                                key={i.value}
                                onClick={() => onItemClick(i.value)}
                            >
                                {i.title}
                            </div>
                        )}
                    </div>
                }
            </div>
        </>

    );
};
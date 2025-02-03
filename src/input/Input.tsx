import React from "react";

type InputPropsType = {
    value?: string
}

export const Input = (props: InputPropsType) => {
    return (
        <div>
            <input/> {props.value}
        </div>
    );
};
import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    // collapsed?: boolean;
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapse, setCollapse] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} callback={() => setCollapse(!collapse)}/>
            {!collapse && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string;
    callback?: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.callback}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;
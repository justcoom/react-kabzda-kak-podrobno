import {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    component: Accordion,
};

// type Story = StoryObj<typeof Accordion>
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: "hello",
//         collapsed: true,
//         // onClick: action("fdf"),
//     },
// }

const onChangeHadnler = action("accordion mode changed")
const onClickHadnler = action("some item was clicked")

export const CollapsedAccordion = () => {
    return <Accordion
        onClick={onClickHadnler}
        items={[]}
        titleValue={"Collapsed Accordion"}
        collapsed={true}
        onChange={onChangeHadnler}
    />

}

export const UnCollapsedAccordion = () => {
    return <Accordion
        onClick={onClickHadnler}
        items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {title: "Viktor", value: 4}]}
        titleValue={"Opened Accordion"}
        collapsed={false}
        onChange={onChangeHadnler}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion
        onClick={(id)=> {alert(`user with ID ${id} should be happy`)}}
        items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {title: "Viktor", value: 4}]}
        titleValue={"Accordion Demo"}
        collapsed={collapsed}
        onChange={()=> setCollapsed(!collapsed)}
    />
}

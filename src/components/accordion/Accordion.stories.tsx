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

const onClickHadnler = action("accordion mode changed")

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={"Collapsed Accordion"}
        collapsed={true}
        onClick={onClickHadnler}
    />

}

export const UnCollapsedAccordion = () => {
    return <Accordion
        titleValue={"Opened Accordion"}
        collapsed={false}
        onClick={onClickHadnler}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion
        titleValue={"Accordion Demo"}
        collapsed={collapsed}
        onClick={()=> setCollapsed(!collapsed)}
    />
}

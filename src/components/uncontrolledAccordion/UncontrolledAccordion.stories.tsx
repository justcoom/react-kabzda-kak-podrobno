import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    component: UncontrolledAccordion,
};

// const onClickHadnler = action("accordion mode changed")

export const Uncontrolled = () => {
    return <UncontrolledAccordion titleValue={"Uncontrolled Accordion"}/>
}
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/accordion/Accordion";
import {UncontrolledOnOff} from "./components/uncontrolledonOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {useState} from "react";
import {OnOff} from "./onOff/OnOff";


function App() {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [onOffValue, setOnOffValue] = useState<boolean>(false)

    return (
        <div className={"App"}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={"Menu"}/>

            {/*<OnOff state={onOffValue} setOnOff={setOnOffValue}/>*/}
            <UncontrolledOnOff onChange={setOnOffValue}/> {onOffValue.toString()}
            {/*<PageTitle title={"This is component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string,
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;


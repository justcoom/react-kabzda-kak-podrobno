import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import UncontrolledAccordion from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";


function App() {
    console.log("App rendered")
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}

            {/*Article 1*/}
            {/*<Rating value={0} />*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}

            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <OnOff state={true}/>
            <OnOff state={false}/>

            <UncontrolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

            <UncontrolledRating/>
            <Rating value={4}/>
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


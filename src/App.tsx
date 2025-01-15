import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";


function App() {
    return (

        <div>
            <PageTitle title={"This is component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={0} />
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff state={true}/>
            <OnOff state={false}/>
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


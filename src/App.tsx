import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/styles/Button.styled";
import {Link} from "./components/styles/Link";
import {SuperButton} from "./components/styles/SuperButton";
import {Menu} from "./components/styles/Menu.styled";


function sum(a: number, b: number) {
    alert(a + b);
}

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">123</a></li>
                    <li><a href="">123</a></li>
                    <li><a href="">123</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href={"#"}>Linkew</StyledBtn>
                <StyledBtn as={"a"} href={"#"}>Linkew</StyledBtn>
                <StyledBtn>button :)</StyledBtn>
                <SuperButton>sp button</SuperButton>
            </Box>
        </div>
        // <div>
        //     {/*<PageTitle title={"This is component"}/>*/}
        //     {/*<PageTitle title={"My friends"}/>*/}
        //     {/*Article 1*/}
        //     {/*/!*<Rating value={0} />*!/*/}
        //     {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
        //     {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
        //     {/*Article 2*/}
        //     {/*<Rating value={0}/>*/}
        //     {/*<Rating value={1}/>*/}
        //     {/*<Rating value={2}/>*/}
        //     {/*<Rating value={3}/>*/}
        //     {/*<Rating value={4}/>*/}
        //     {/*<Rating value={5}/>*/}
        // {/*</div>*/}
    );
}

// type PageTitlePropsType = {
//     title: string,
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return (
//         <h1>{props.title}</h1>
//     )
// }

export default App;


const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }
    
    @media screen and (max-width: 200px){
        flex-direction: column;
    }
`
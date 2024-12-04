import styled from "styled-components";
import {StyledBtn} from "./Button.styled";
import {MyAnimations} from "./animations/Animations";

export const SuperButton = styled(StyledBtn)`
    border-radius: 10px;
    background-color: red;
    color: white;
    
    &:hover {
        animation: ${MyAnimations} 2s ease-in-out infinite;
    }
`
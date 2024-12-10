import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string,
    btnType: "primary" | "outlined",
    active?: boolean,
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    background-color: ${props => props.color || "blue"};
    padding: 10px 20px;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#d31280"};
        color: ${props => props.color || "#d31280"};
        background-color: transparent;
        
        &:hover {
            background-color: ${props => props.color || "#2b87e2"};
            color: snow;
            border: none;
        }
    `}
    
    ${props => props.btnType === "primary" && css<StyledBtnPropsType> `
        background-color: ${props => props.color || "#d31280"};
        color: snow;
        
        &:hover {
            background-color: transparent;
            color: ${props => props.color || "#2b87e2"};
            border: 2px solid ${props => props.color || "#2b87e2"};
        }
    `}
    
    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 3px 3px 3px 2px rgba(6, 75, 138, 0.71);
    `}

    

`
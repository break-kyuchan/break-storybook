import React from "react"
import styled from "styled-components"


export interface ButtonProps{
    title?: string;
    check?: boolean;
    color? :string;
}

export const Button: React.FC<ButtonProps> = ({
    color = "#000000",
    title="HOME",
})=>{
return (
    <ButtonContainer color={color} >
        {title}
    </ButtonContainer>
)
}

const ButtonContainer=styled.div`
height:20px;
font-size : 14px;
font-weight : 900;
color: ${props => (props.color ? props.color : 'red')};
margin : 0 15px;
&:hover{
    cursor : pointer;
}
`

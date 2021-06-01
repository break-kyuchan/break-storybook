import React, {useState} from 'react';
import styled from "styled-components"

interface SearchTagButtonProps{
    title?:string;
    color?:string;
    check?:boolean;
} 

export const SearchTagButton:React.FC<SearchTagButtonProps> = ({
    title="Cards",
}) => {
    const [changeColor, SetChangeColor] = useState(false)

    const handleColor =()=>{
        SetChangeColor(!changeColor)
    }

    console.log(changeColor)

    return (
        <SearchTag check={changeColor} onClick={handleColor}>
         <span>{title}</span>
        </SearchTag>
    );
};

const SearchTag = styled.button<SearchTagButtonProps>`
border-radius: 20px;
height:26px;
border: 1px solid #6034b0;
box-sizing: border-box;
background: ${props=>(props.check ? '#6034b0' : '#ffffff')};

span{
    color : ${props=>(props.check ? '#ffffff' : '#000000')};
    font-size: 12px;
    font-weight: 300;
}

&:hover{
    cursor: pointer;
}
`



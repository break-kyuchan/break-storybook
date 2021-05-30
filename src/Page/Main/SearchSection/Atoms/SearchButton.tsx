import React from "react"
import styled from "styled-components"

export interface SearchButtonProps{
    title?: string;
}

export const SearchButton : React.FC<SearchButtonProps> = ({
    title="All",
})=>{
return (
    <SearchButtonContainer>
        {title}
    </SearchButtonContainer>
)
}

const SearchButtonContainer=styled.div`
height:20px;
font-size : 14px;
font-weight : 900;
color: #ffffff;
margin : 0 15px;
&:hover{
    cursor : pointer;
}
`
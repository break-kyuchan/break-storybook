import React from "react"
import styled from "styled-components"
import { SearchButton } from "../Atoms/SearchButton"

const SearchmenuTitle:Array<string> = [
    "ALL",
    "Baseball",
    "Basketball",
    "Football",
    "Soccer",
    "SCC",
    "Etc"
]

export const SearchMenu : React.FC =()=>{
    return(
        <>
    <SearchMenuWrap>
        {SearchmenuTitle.map((btn,idx)=>{
            return <SearchButton key={idx} title={btn}/>
        })}
    </SearchMenuWrap>

    </>
    )
} 

const SearchMenuWrap =styled.div`
display:flex;
align-items: center;
margin-top: 40px;
`

import React from "react"
import styled from "styled-components"
import {Button} from "../Atoms/Button"
import {CgProfile} from "react-icons/cg"

const menuTitle:string[]= [
    "HOME",
    "GRADING",
    "MARKET",
    "COLLECTION",
    "WATCH LIST"
]

export const Menu : React.FC =()=>{
    return(
        <>
    <MenuWrap>
        {menuTitle.map((btn,idx)=>{
            return <Button key={idx} title={btn}/>
        })}
        <CgProfile size="28"/>
    </MenuWrap>
    
    </>
    )
} 

const MenuWrap =styled.div`
display:flex;
align-items: center;
`


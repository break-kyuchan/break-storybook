import React from 'react'
import styled from "styled-components";
import { Menu } from "../Molecules/Menu"



export const Header :React.FC =()=>{
    return (
        <HeaderWrap>
            <Logo src="/break_logo192.png"/>
            <Menu/>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 1440px;
height: 86px;
padding : 0 80px;
margin-top : 35px;
`

const Logo = styled.img`
width: 128px;
height: 28px;
`
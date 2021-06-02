import React from 'react';
import styled from "styled-components"
import { MainBreakPick } from "../Organisms/MainBreakPick"

export const MainContents:React.FC = () => {
    return (
        <>
        <MainBack>
            <MainBreakPick/>
            <MainBreakPick/>
            <MainBreakPick/>
            <MainBreakPick/>
            <MainBreakPick/>
        </MainBack>
          </>  
    );
}

const MainBack = styled.div`
box-sizing: border-box;
width: 1440px;
height: 1000px;
background : #F5F6FA;
padding : 20px;
margin: 0 auto;
`

import React from 'react';
import styled from "styled-components"
import { BreakPick } from "../Atoms/SectionTitle/BreakPick"
import { MainCards } from "../Molecules/MainCards"

export const MainBreakPick:React.FC = () => {
    return (
        <>
        <MainBreakPickBack>
        <BreakPick/>
        <MainCards/>
        </MainBreakPickBack>
        </>  
    );
}

const MainBreakPickBack=styled.div`
margin-top:20px;`
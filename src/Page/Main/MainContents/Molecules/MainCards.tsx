import React from 'react';
import styled from "styled-components";
import { MainCard } from "../Atoms/MainCard/MainCard"

export const MainCards:React.FC = () => {
    return (
        <>
        <MainCardsBack >
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        </MainCardsBack>
        </>
    );
}

const MainCardsBack=styled.div`
display:flex`

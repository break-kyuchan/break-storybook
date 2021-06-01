import React from 'react';
import styled from "styled-components"
import { MainSearch } from "../Organisms/MainSearch"

export const MainSearchSection = () => {
    return (
        <MainSearchBack>
        <MainSearch/>
        </MainSearchBack>
    );
}

const MainSearchBack = styled.div`
display:flex;
justify-content: center;
width:1440px;
height:157px;
background:linear-gradient(88.25deg, #6034B0 27.42%, #5481B7 68.53%);
margin: 0 auto
`



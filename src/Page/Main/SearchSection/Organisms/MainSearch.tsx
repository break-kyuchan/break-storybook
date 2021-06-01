import React from 'react';
import styled from "styled-components"
import { SearchInput } from "../Atoms/SearchInput"
import { SearchMenu } from "../Molecules/SearchMenu"

export const MainSearch:React.FC = () => {
    return (
        <>
        <MainSearchWrap>
            <SearchInput/>
            <SearchMenu/>
        </MainSearchWrap>
        </>
    );
}

const MainSearchWrap = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


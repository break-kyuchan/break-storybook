import React from 'react';
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai"

export interface SerchInputProps {
    placeholder?:string
}

export interface SearchInputStyleProps{
    color?:string
}

export const SearchInput:React.FC<SerchInputProps> = ({placeholder="카드이름, 카드번호, 선수 이름을 검색해보세요"},chlidren) => {


    return (
        <SearchWrap>
            <AiOutlineSearch size="30"/>
            <SearchInputAtom placeholder={placeholder} />
        </SearchWrap>
    );
}

const SearchWrap=styled.div`
display:flex;
align-items:center;
width: 477.45px;
height: 46px;
margin: 0 5px;
border-radius: 40px;
border: none;
background-color: #ffffff;
padding: 0 10px
`

const SearchInputAtom=styled.input<SearchInputStyleProps>`
width: 384px;
height: 46px;
margin: 0 5px;
border-radius: 40px;
border:none;
outline: none;
padding: 0 20px;
::placeholder{
    ${props=>(props.color="red")}
} // 프롭스 전달 어떻게 하는건지
`
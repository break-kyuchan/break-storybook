import React from 'react';
import styled from "styled-components"

export interface SectionTitleProps{
    title?: string
    subTitle?: string
}

export const SectionTitle:React.FC<SectionTitleProps> = ({
    title = "break's Pick",
    subTitle= "break 에서 가장 핫하고 새로운 카드들입니다."
}) => {
    return (
        <>
    <TitleWrap>
        <MainTitle>{title}</MainTitle>
        <MainSubTitle>{subTitle}</MainSubTitle>
    </TitleWrap>            
    </>
    );
}

const TitleWrap = styled.div`
display:flex;
align-items:center;
height:34px;
background:none`

const MainTitle=styled.div`
font-size: 24px;
font-family: 'Montserrat', sans-serif;
font-weight : bold ;
color:#000000
`

const MainSubTitle=styled.div`
font-size: 14px;
line-height: 20px;
color: #5E5E5E;
margin-left: 20px;
`


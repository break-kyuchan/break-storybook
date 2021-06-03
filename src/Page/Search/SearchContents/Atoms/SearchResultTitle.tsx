import React from 'react';
import styled from "styled-components"

interface SearchResultTitleProps{
    title? : string;
    cardType? : number;
    forSale?: number;
}


export const SearchResultTitle:React.FC<SearchResultTitleProps> = ({
    title="'zion' 검색 결과 중 Baseball 카드 조회 결과",
    cardType= 40,
    forSale = 556
}) => {
    return (
            <SearchResultTitleBack>
                <span>{title}</span>
                <SearchResultSubtitle>
                    {cardType}  <span> Card Type</span>
                    {forSale}   <span> For Sale</span>
                </SearchResultSubtitle>
            </SearchResultTitleBack>
    );
}

const SearchResultTitleBack=styled.div`
span{
    font-size:12px;
    color:#5e5e5e;
}
`

const SearchResultSubtitle=styled.div`
margin-top: 10px;
span{
    font-size:14px;
    color:#5481B7;
    
&:last-child{
    margin-left: 10px;
}
}`

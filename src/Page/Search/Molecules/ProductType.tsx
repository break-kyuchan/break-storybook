import React from 'react';
import styled from "styled-components";
import { SearchTagButton } from '../Atoms/SearchTagButton';
import { SideBarTitle } from '../Atoms/SideBarTitle';


export const ProductType:React.FC = () => {
    return (
        <>
        <ProductTypeBack>
            <SideBarTitle/>
            <SearchTagButton/>
            <SearchTagButton/>
            <SearchTagButton/>
            <SearchTagButton/>
            <SearchTagButton/>
            <SearchTagButton/>
        </ProductTypeBack>
        </>
    );
}

const ProductTypeBack=styled.div`
width:270px;`
import React from 'react';
import styled from "styled-components"
import { SearchTagButton } from '../Atoms/SearchTagButton';
import { SideBarTitle } from '../Atoms/SideBarTitle';

export const ProductType = () => {
    return (
        <>
        <ProductTypeBack>
            <SideBarTitle/>
            <SearchTagButton/>
        </ProductTypeBack>
        </>
    );
}

const ProductTypeBack=styled.div`
`


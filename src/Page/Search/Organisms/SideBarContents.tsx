import React from 'react';
import styled from "styled-components"
import { ProductType } from '../Molecules/ProductType';

export const SideBarContents:React.FC = () => {
    return (
        <>
        <SideBarContentsBack>
            <ProductType/>
            <ProductType/>
            <ProductType/>
        </SideBarContentsBack>
        </>
    );
}

const SideBarContentsBack=styled.div`
box-sizing : border-box;
width: 308px;
height: 384px;
background: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
border-radius: 4px;
padding : 0 10px;
`

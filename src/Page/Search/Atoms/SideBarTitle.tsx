import React from 'react';
import styled from 'styled-components';

interface SideBarTitleProps{
    title? : string;
}

export const SideBarTitle:React.FC<SideBarTitleProps> = ({title = "PRODUCT TYPE"}) => {
    return (
        <SideTitle>
            {title}
        </SideTitle>
    );
}

const SideTitle=styled.div`
display:flex;
align-items: center;
color : #000000;
font-size:14px;
font-family : 'Montserrat', sans-serif;
font-weight: bold;
text-transform: uppercase;
height: 42px;
`

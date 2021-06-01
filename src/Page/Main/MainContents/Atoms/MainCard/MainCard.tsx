import React from 'react';
import styled from "styled-components"

export interface MainCardstyleProps extends MainCardProps {

}

export interface MainCardProps{
    cardSort?:string,
    playerName?:string,
    cardTag?:string
    color?:string
    lowestPrice?:string
    latestPrice?:string
}

export const MainCard:React.FC<MainCardProps> = ({
    cardSort="2019-20 Panini Prizm Basketball Base",
    playerName="ZION WILLIAMSON #248",
    cardTag="SILVER",
    color = "#c4c4c4",
    lowestPrice ="₩1,000,000",
    latestPrice ="₩950,000"
}) => {
    return (
        <>
        <MainCardBack>
            <CardPicture src="/IMG_1376.WEBP"/>
            <CardContents>
                <CardName>
                    <span>{cardSort}</span>
                    <span>{playerName}</span>
                </CardName>
                <CardTag>
                    <span>{cardTag}</span>
                </CardTag>
                    <CardGrade >
                        <span color={color}>PSA 10</span>
                        <span>brg 10</span>
                        <span>break A</span>
                    <CardGradeLine/>
                    </CardGrade>
                    <CardPriceWrap>
                        <LowestPrice>
                            <span>{lowestPrice}</span>
                            <span>최저 판매가</span>
                        </LowestPrice>
                        <LatestPrice>
                            <span>{latestPrice}</span>
                            <span>최근 거래가</span>
                        </LatestPrice>
                    </CardPriceWrap>
            </CardContents>
        </MainCardBack>
        </>
    );
}

const MainCardBack=styled.div`
display: flex;
box-sizing:border-box;
width:329px;
height:183.99px;
padding: 17px 13px;
margin-top : 15px;
margin-right: 25px;
background-color: #ffffff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16)`

const CardPicture=styled.img`
width:106px;
height:149px;
`

const CardContents=styled.div`
box-sizing:border-box;
padding: 0 10px;
width:239px;
`

const CardName=styled.div`
span{
    display:flex;
    font-size:8px;
    color : #5e5e5e;

    &:last-child{
        font-family: 'Montserrat', sans-serif;
        font-size:14px;
        line-height: 17px;
        color:#5481b7;
        margin-top: 10px;
    }
}
`

const CardTag =styled.div`
display: flex;
justify-content: center;
align-items: center;
box-sizing:border-box;
width:35px;
height: 15px;
background: #dddddd;
border-radius: 4px;
margin-top:30px;

span{
    font-size: 6px;
    color:#ffffff
}
`

const CardGrade=styled.div<MainCardstyleProps>`
font-size:8px;
margin-top:5px;

span{
color: ${props=>(props.color ? props.color : '#000000')};
margin-left:5px;

&:first-child{
    margin:0
}
};
`

const CardGradeLine=styled.div`
width:180.87px;
border-bottom : 2px solid #e5e5e5;
margin-top:5px`

const CardPriceWrap=styled.div`
display:flex;
justify-content: space-between;
width: 180.87px;
margin-top: 5px;
`

const LowestPrice=styled.div`
display:flex;
flex-direction:column;

span{
    font-size : 12px;
    color: #6034b0;

    &:last-child{
        font-size:8px;
        color: #5e5e5e;
        margin-top: 8px;
    }
}
`

const LatestPrice=styled.div`
display:flex;
flex-direction:column;
align-items: flex-end;
span{
    font-size : 12px;
    color: #000000;

    &:last-child{
        font-size:8px;
        color: #5e5e5e;
        margin-top: 8px;
    }
}
`
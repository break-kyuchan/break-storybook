import React from "react";
import styled from "styled-components";
import { MainCard } from "../Atoms/MainCard/MainCard";
import { MainData}  from "../../../../Data/MainData";


export const MainCards: React.FC = () => {
  return (
    <>
      <MainCardsBack>
        {MainData.map((maindata, idx) => {
          return <MainCard key={idx} data={maindata} />;
        })}
      </MainCardsBack>
    </>
  );
};

const MainCardsBack = styled.div`
  display: flex;
`;

import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({ title = 'HOME' }) => {
  return <ButtonContainer>{title}</ButtonContainer>;
};

const ButtonContainer = styled.div`
  height: 20px;
  font-size: 14px;
  font-weight: 900;
  color: #000000;
  margin: 0 15px;
  &:hover {
    cursor: pointer;
  }
`;

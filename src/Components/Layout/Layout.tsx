import React from 'react';
import styled from 'styled-components';

import { Header } from '../Header/Templates/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
`;
